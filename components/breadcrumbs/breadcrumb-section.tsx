import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { BreadcrumbCheckbox } from "./breadcrumb-checkbox";
import { useBreadCrumbSectionStyles } from "./styles/breadcrumb-section.styles";

type BreadcrumbSectionProps = {
  title: string;
  goal: number;
};

export function BreadcrumbSection({ title, goal }: BreadcrumbSectionProps) {
  const styles = useBreadCrumbSectionStyles();
  const [count, setCount] = useState(0);

  function handlePress(index: number) {
    if (index === count) {
      setCount(count + 1);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else if (index === count - 1) {
      setCount(count - 1);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  }

  return (
    <View>
      <Text>{title}</Text>

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
