import { Consistency } from "@/constants/consistency";
import { spacing, useThemeColors } from "@/theme";
import * as Haptics from "expo-haptics";
import { CircleIcon } from "phosphor-react-native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { BreadcrumbCheckbox } from "./breadcrumb-checkbox";
import { useBreadCrumbSectionStyles } from "./styles/breadcrumb-section.styles";

type BreadcrumbSectionProps = {
  title: string;
  goal: number;
  unit: string;
  consistency: Consistency;
};

export function BreadcrumbSection({
  title,
  goal,
  unit,
  consistency,
}: BreadcrumbSectionProps) {
  const styles = useBreadCrumbSectionStyles();
  const colors = useThemeColors();
  const [count, setCount] = useState(0);

  function handlePress(index: number) {
    if (index === count) {
      setCount(count + 1);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else if (index === count - 1) {
      setCount(count - 1);
    }
  }

  function getConsistencyColor() {
    switch (consistency) {
      case Consistency.LOW:
        return colors.error;
      case Consistency.MEDIUM:
        return "gold";
      case Consistency.HIGH:
        return colors.primaryRich;
      default:
        return colors.inactive;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.consistencyContainer}>
          <CircleIcon
            size={spacing.s16}
            color={getConsistencyColor()}
            weight="fill"
            style={{ opacity: 0.5 }}
          />
          <CircleIcon
            size={spacing.s8}
            color={getConsistencyColor()}
            weight="fill"
            style={{ position: "absolute", marginLeft: spacing.s4 }}
          />
        </View>
      </View>
      <Text style={styles.unitText}>{unit} per</Text>
      <View style={styles.breadcrumbSection}>
        {Array.from({ length: goal }).map((_, index) => {
          const isChecked = index < count;
          const isActive = index === count || index === count - 1;
          return (
            <BreadcrumbCheckbox
              key={index}
              isChecked={isChecked}
              isActive={isActive}
              onPress={() => handlePress(index)}
            />
          );
        })}
      </View>
    </View>
  );
}
