import { colors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: spacing.s32,
    width: spacing.s32,
    borderRadius: spacing.s4,
    borderColor: colors.primary,
    borderWidth: spacing.s2,
    backgroundColor: colors.background,
  },
  active: {
    backgroundColor: colors.primary,
  }
});