import { Button } from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "@apollo/client";
import { useHairCare } from "@/src/context/HairCareContext";
import { GraphQLError } from "graphql";
import { UPLOAD_IMAGE } from "@/src/graphql/hairCare";
import { ThemedView } from "@/src/components/common/ThemedView";

export default function HairScanScreen() {
  const router = useRouter();
  const { setRecommendations } = useHairCare();

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({ base64: true });
      if (result.canceled) throw new Error("Image upload cancelled");

      useMutation(UPLOAD_IMAGE, {
        onCompleted: (data) => {
          setRecommendations(data.uploadHairScan.recommendations);
          router.push("/recommendations");
        },
      });
    } catch (error) {
      if (error instanceof GraphQLError || error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <ThemedView>
      <Button title="Upload Hair Scan" onPress={pickImage} />
    </ThemedView>
  );
}
