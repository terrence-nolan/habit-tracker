import { spacing } from "@/theme";
import { StyleSheet } from "react-native";

export function useHeaderStyles() {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingBottom: spacing.s4,
    },
  });
}
