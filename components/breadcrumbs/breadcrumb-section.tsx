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
};

export function BreadcrumbSection({
  title,
  goal,
  unit,
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.consistencyContainer}>
          <CircleIcon size={spacing.s8} color={colors.primary} weight="fill" />
          <Text style={styles.consistencyText}> High Consistency</Text>
        </View>
        <View style={styles.unitContainer}>
          <View style={styles.unitBox} />
          <Text style={styles.unitText}> = {unit}</Text>
        </View>
      </View>
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
