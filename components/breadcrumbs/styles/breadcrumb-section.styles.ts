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
      paddingBottom: spacing.s8,
    },
    infoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: spacing.s4,
    },
    consistencyContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    consistencyText: {
      color: colors.textSecondary,
      fontSize: typography.sizes.sm,
    },
    unitContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    unitBox: {
      height: spacing.s12,
      width: spacing.s12,
      borderRadius: spacing.s2,
      backgroundColor: colors.primaryRich,
    },
    unitText: {
      color: colors.textSecondary,
      fontSize: typography.sizes.sm,
    },
    breadcrumbSection: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.s8,
    },
  });
}
