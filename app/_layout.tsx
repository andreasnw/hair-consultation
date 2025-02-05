import { Stack } from "expo-router";
import { HairCareProvider } from "@/src/context/HairCareContext";

export default function Layout() {
  return (
    <HairCareProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </HairCareProvider>
  );
}
