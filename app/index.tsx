import { Button } from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "@apollo/client";
import { useHairCare } from "@/src/context/HairCareContext";
import { GraphQLError } from "graphql";
import { UPLOAD_IMAGE } from "@/src/graphql/hairCare";
import { ThemedView } from "@/src/components/common/ThemedView";
import { useState } from "react";
import Camera from "@/src/components/common/Camera";
import { CameraCapturedPicture, useCameraPermissions } from "expo-camera";

export default function HairScanScreen() {
  const router = useRouter();
  const [permissions, requestPermissionsAsync] = useCameraPermissions();
  const { setScanResult } = useHairCare();
  const [camera, setCamera] = useState(false);

  const uploadImage = async (image: string) => {
    try {
      useMutation(UPLOAD_IMAGE, {
        variables: { image },
        onCompleted: (data) => {
          setScanResult(data);
          router.push("/recommendations");
        },
      });
    } catch (error) {
      if (error instanceof GraphQLError || error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({ base64: true });
      if (result.canceled) throw new Error("Image upload cancelled");

      return uploadImage(result.assets[0].base64 ?? '');
    } catch (error) {
      if (error instanceof GraphQLError || error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const openCamera = async () => {
    if (!permissions) {
      const res = await requestPermissionsAsync();
      if (res) return setCamera(true);
      alert("Camera permissions are required to take a picture");
    }

    setCamera(true);
  };

  const onPictureTaken = async (image: CameraCapturedPicture) => {
    try {
      return uploadImage(image.base64 ?? '');
    } catch (error) {
      if (error instanceof GraphQLError || error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <ThemedView>
      {camera && <Camera onPictureTaken={onPictureTaken} />}
      <Button title="Upload Hair Scan" onPress={pickImage} />
      <Button title="Take Picture for Hair Scan" onPress={openCamera} />
    </ThemedView>
  );
}
