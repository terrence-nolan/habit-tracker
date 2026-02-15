import { spacing, useThemeColors } from "@/theme";
import { StyleSheet } from "react-native";

export function useBreadCrumbStyles() {
  const colors = useThemeColors();

  return StyleSheet.create({
    checkbox: {
      height: spacing.s32,
      width: spacing.s32,
      borderRadius: spacing.s4,
      borderColor: colors.primary,
      borderWidth: spacing.s2,
      backgroundColor: colors.background,
      justifyContent: "center",
      alignItems: "center",
    },
    checked: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    inactive: {
      opacity: 0.3,
      borderColor: colors.textSecondary,
    },
  });
}
