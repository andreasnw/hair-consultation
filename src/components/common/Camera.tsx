import { Button, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { CameraView } from "expo-camera";
import { useCameraPermissions } from "expo-image-picker";

type CameraProps = {
  onPictureTaken: (image: any) => void;
};

const Camera = ({ onPictureTaken }: CameraProps) => {
  const camera = useRef<CameraView>(null);
  const [permissions, requestPermissionsAsync] = useCameraPermissions();

  const takePicture = async () => {
    if (!camera.current) return;

    const image = await camera.current.takePictureAsync();

    onPictureTaken(image);
  };

  const checkCameraPermissions = async () => {
    if (!permissions) {
      return await requestPermissionsAsync();
    }

    return permissions;
  };

  return (
    <CameraView facing={"front"} ref={camera}>
      <Button title="shutter" onPress={takePicture} />
    </CameraView>
  );
};

export default Camera;

const styles = StyleSheet.create({});
