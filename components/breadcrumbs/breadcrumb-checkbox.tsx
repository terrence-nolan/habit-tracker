import { spacing, useThemeColors } from "@/theme";
import { CheckIcon } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useBreadCrumbStyles } from "./styles/breadcrumb-checkbox.styles";

type BreadcrumbProps = {
  isActive?: boolean;
  isChecked?: boolean;
  onPress?: () => void;
};

export function BreadcrumbCheckbox({
  isChecked = false,
  isActive,
  onPress = () => {},
}: BreadcrumbProps) {
  const styles = useBreadCrumbStyles();
  const colors = useThemeColors();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!isActive}
      style={[
        styles.checkbox,
        !isActive && !isChecked && styles.inactive,
        isChecked && styles.checked,
      ]}
    >
      {isChecked && <CheckIcon size={spacing.lg} color={colors.background} />}
    </TouchableOpacity>
  );
}
