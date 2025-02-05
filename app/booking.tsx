import List from "@/src/components/booking/List";
import { ThemedText } from "@/src/components/common/ThemedText";
import { ThemedView } from "@/src/components/common/ThemedView";

export default function BookingScreen() {

  return (
    <ThemedView>
      <ThemedText>Available Doctors:</ThemedText>
      <List />
    </ThemedView>
  );
}
