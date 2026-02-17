import { BreadcrumbSection } from "@/components/breadcrumbs/breadcrumb-section";
import { ChipFilter } from "@/components/chip/chip-filter";
import { Header } from "@/components/header/header";
import { Consistency } from "@/constants/consistency";
import { mockHabits } from "@/mocks/habits";
import { spacing, useThemeColors } from "@/theme";
import * as Haptics from "expo-haptics";
import { PlusIcon } from "phosphor-react-native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIndexStyles } from "./styles/index.styles";

export default function Index() {
  const styles = useIndexStyles();
  const colors = useThemeColors();
  const currentDate = new Date();
  const [isActive, setIsActive] = useState("All");

  const habits = mockHabits;

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  } as const;

  const fullDate = currentDate.toLocaleDateString("en-US", options);

  const handleAddHabit = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  };

  const filteredHabits = habits.filter(
    (habit) => habit.frequency === isActive || isActive === "All"
  );

  return (
    <SafeAreaView style={styles.page}>
      <Header />
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{fullDate}</Text>
      </View>
      <ChipFilter isActive={isActive} setIsActive={setIsActive} />
      {filteredHabits.length > 0 && (
        <ScrollView>
          {filteredHabits.map((habit) => (
            <BreadcrumbSection
              key={habit.id}
              title={habit.title}
              goal={habit.goal}
              unit={habit.unit}
              consistency={habit.consistency as Consistency}
            />
          ))}
        </ScrollView>
      )}
      <TouchableOpacity style={styles.addButton} onPress={handleAddHabit}>
        <PlusIcon size={spacing.s32} color={colors.background} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
