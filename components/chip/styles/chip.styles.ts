import { spacing, typography, useThemeColors } from "@/theme";
import { StyleSheet } from "react-native";

export function useChipStyles() {
  const colors = useThemeColors();

  return StyleSheet.create({
    chipContainer: {
      paddingVertical: spacing.s8,
      paddingHorizontal: spacing.s16,
      borderRadius: spacing.s20,
      backgroundColor: colors.chipBackground,
    },
    chipText: {
      color: colors.chipText,
      fontSize: typography.sizes.sm,
    },
    chipContainerActive: {
      backgroundColor: colors.primary,
    },
    chipTextActive: {
      color: colors.textPrimaryInverted,
    },
  });
}
