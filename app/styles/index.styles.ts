import { typography, useThemeColors } from "@/theme";
import { StyleSheet } from "react-native";

export function useIndexStyles() {
  const colors = useThemeColors();

  return StyleSheet.create({
    page: {
      backgroundColor: colors.background,
    },
    date: {
      color: colors.textPrimary,
      fontSize: typography.sizes.lg,
      fontWeight: typography.weights.semibold,
    },
  });
}
