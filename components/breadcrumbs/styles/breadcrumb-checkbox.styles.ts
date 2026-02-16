import { spacing, useThemeColors } from "@/theme";
import { StyleSheet } from "react-native";

export function useBreadCrumbStyles() {
  const colors = useThemeColors();

  return StyleSheet.create({
    checkbox: {
      height: spacing.s32,
      width: spacing.s32,
      borderRadius: spacing.s4,
      borderColor: colors.primaryRich,
      borderWidth: spacing.s2,
      justifyContent: "center",
      alignItems: "center",
    },
    checked: {
      backgroundColor: colors.primaryRich,
      borderColor: colors.primaryRich,
    },
    inactive: {
      borderColor: colors.inactive,
    },
  });
}
