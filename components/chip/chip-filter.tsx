import { Chip } from "@/components/chip/chip";
import * as Haptics from "expo-haptics";
import React from "react";
import { View } from "react-native";
import { useChipFilterStyles } from "./styles/chip-filter.styles";

type ChipFilterProps = {
  isActive: string;
  setIsActive: (label: string) => void;
};

export function ChipFilter({ isActive, setIsActive }: ChipFilterProps) {
  const styles = useChipFilterStyles();

  function handleChipPress(filter: string) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsActive(filter);
  }

  return (
    <View style={styles.filterContainer}>
      <Chip
        label="All"
        onPress={() => handleChipPress("All")}
        isActive={isActive === "All"}
      />
      <Chip
        label="Daily"
        onPress={() => handleChipPress("Daily")}
        isActive={isActive === "Daily"}
      />
      <Chip
        label="Weekly"
        onPress={() => handleChipPress("Weekly")}
        isActive={isActive === "Weekly"}
      />
      <Chip
        label="Monthly"
        onPress={() => handleChipPress("Monthly")}
        isActive={isActive === "Monthly"}
      />
    </View>
  );
}
