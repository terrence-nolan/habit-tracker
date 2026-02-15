import { spacing, useThemeColors } from "@/theme";
import { StyleSheet } from "react-native";

export function useBreadCrumbSectionStyles() {
  const colors = useThemeColors();

  return StyleSheet.create({
    breadcrumbSection: {
      flexDirection: "row",
      gap: spacing.s8,
    },
  });
}
