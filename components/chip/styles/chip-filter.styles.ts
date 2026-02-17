import { spacing } from "@/theme";
import { StyleSheet } from "react-native";

export function useChipFilterStyles() {
  return StyleSheet.create({
    filterContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: spacing.s8,
      marginBottom: spacing.s8,
    },
  });
}
