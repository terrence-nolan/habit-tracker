import { spacing, typography, useThemeColors } from "@/theme";
import { StyleSheet } from "react-native";

export function useIndexStyles() {
  const colors = useThemeColors();

  return StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: spacing.s16,
    },
    dateContainer: {
      marginTop: spacing.s16,
    },
    date: {
      color: colors.textPrimary,
      fontSize: typography.sizes.xl,
      fontWeight: typography.weights.semibold,
    },
    addButton: {
      position: "absolute",
      bottom: spacing.s48,
      right: spacing.s28,
      backgroundColor: colors.primary,
      padding: spacing.s12,
      borderRadius: spacing.s28,
    },
  });
}
