import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useChipStyles } from "./styles/chip.styles";

type ChipProps = {
  label: string;
  onPress: () => void;
  isActive?: boolean;
};

export function Chip({ label, onPress, isActive }: ChipProps) {
  const styles = useChipStyles();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.chipContainer, isActive && styles.chipContainerActive]}
    >
      <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
