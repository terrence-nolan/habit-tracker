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
      marginVertical: spacing.s12,
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
    addModalTitle: {
      color: colors.textPrimary,
      fontSize: typography.sizes.xl,
      fontWeight: typography.weights.semibold,
      marginHorizontal: spacing.s16,
      marginTop: spacing.s28,
      marginBottom: spacing.s16,
    },
    input: {
      backgroundColor: colors.surface,
      color: colors.textPrimary,
      fontSize: typography.sizes.md,
      paddingHorizontal: spacing.s8,
      paddingVertical: spacing.s12,
      borderRadius: spacing.s8,
      marginBottom: spacing.s20,
      marginHorizontal: spacing.s16,
    },
    inputLabel: {
      color: colors.textPrimary,
      fontSize: typography.sizes.lg,
      fontWeight: typography.weights.medium,
      marginBottom: spacing.s8,
      marginHorizontal: spacing.s16,
    },
  });
}
