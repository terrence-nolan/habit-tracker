import { spacing, typography, useThemeColors } from "@/theme";
import { StyleSheet } from "react-native";

export function useBreadCrumbSectionStyles() {
  const colors = useThemeColors();

  return StyleSheet.create({
    container: {
      padding: spacing.s16,
      backgroundColor: colors.surface,
      borderRadius: spacing.s8,
      marginVertical: spacing.s8,
    },
    title: {
      color: colors.textPrimary,
      fontSize: typography.sizes.lg,
      fontWeight: typography.weights.medium,
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: spacing.s8,
      marginBottom: spacing.s4,
    },
    consistencyContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    unitText: {
      color: colors.textSecondary,
      fontSize: typography.sizes.sm,
      marginBottom: spacing.s4,
    },
    breadcrumbSection: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.s8,
    },
  });
}
