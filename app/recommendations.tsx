import { Button } from "react-native";
import { useRouter } from "expo-router";
import List from "@/src/components/recommendations/List";
import { ThemedText } from "@/src/components/common/ThemedText";
import { ThemedView } from "@/src/components/common/ThemedView";

export default function RecommendationsScreen() {
  const router = useRouter();

  const navigateToBooking = () => router.push("/booking");

  return (
    <ThemedView>
      <ThemedText>Product Recommendations:</ThemedText>
      <List />
      <Button title="Book Consultation" onPress={navigateToBooking} />
    </ThemedView>
  );
}
