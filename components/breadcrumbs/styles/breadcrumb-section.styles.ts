import { spacing, typography, useThemeColors } from "@/theme";
import { StyleSheet } from "react-native";

export function useBreadCrumbSectionStyles() {
  const colors = useThemeColors();

  return StyleSheet.create({
    title: {
      color: colors.textPrimary,
      fontSize: typography.sizes.lg,
      fontWeight: typography.weights.medium,
      paddingBottom: spacing.s8,
    },
    breadcrumbSection: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.s8,
    },
  });
}
