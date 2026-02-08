import { spacing, useThemeColors } from "@/theme";
import { StyleSheet } from "react-native";

export function useHistoryStyles() {
  const colors = useThemeColors();

  return StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: spacing.s16,
    },
    text: {
      color: colors.textPrimary,
    },
  });
}
