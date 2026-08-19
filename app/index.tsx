import { BreadcrumbSection } from "@/components/breadcrumbs/breadcrumb-section";
import { ChipFilter } from "@/components/chip/chip-filter";
import { Header } from "@/components/header/header";
import { Consistency } from "@/constants/consistency";
import { mockHabits } from "@/mocks/habits";
import { spacing, typography, useThemeColors } from "@/theme";
import * as Haptics from "expo-haptics";
import { PlusIcon } from "phosphor-react-native";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIndexStyles } from "./styles/index.styles";

export default function Index() {
  const styles = useIndexStyles();
  const colors = useThemeColors();
  const currentDate = new Date();
  const [isActive, setIsActive] = useState("All");
  const [showAddHabitModal, setShowAddHabitModal] = useState(false);
  const [barWidth, setBarWidth] = useState("0%");
  const progressPercentage = 0.75;

  const habits = mockHabits;

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  } as const;

  const fullDate = currentDate.toLocaleDateString("en-US", options);

  const handleAddHabit = () => {
    setShowAddHabitModal(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  };

  const handleCloseAddHabitModal = () => {
    setShowAddHabitModal(false);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  };

  const filteredHabits = habits.filter(
    (habit) => habit.frequency === isActive || isActive === "All",
  );

  const calculateProgressBarWidth = (progressPercentage: number) => {
    const minWidth = 5;
    const maxWidth = 100;
    const progressBarWidth = progressPercentage * 100;
    if (progressBarWidth < minWidth) {
      return `${minWidth}%`;
    } else if (progressBarWidth > maxWidth) {
      return `${maxWidth}%`;
    } else {
      return `${progressBarWidth}%`;
    }
  };

  useEffect(() => {
    setBarWidth(calculateProgressBarWidth(progressPercentage));
  }, [progressPercentage]);

  return (
    <View style={styles.page}>
      <SafeAreaView style={{ backgroundColor: colors.primary }} />
      <Header />
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{fullDate}</Text>
      </View>
      <View style={{ marginBottom: spacing.s16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: spacing.s8,
          }}
        >
          <Text
            style={{ color: colors.textPrimary, fontSize: typography.sizes.lg }}
          >
            {"Today's Progress"}
          </Text>
          <Text
            style={{
              color: colors.primaryRich,
              fontSize: typography.sizes.lg,
              fontWeight: typography.weights.medium,
            }}
          >
            {progressPercentage * 100}%
          </Text>
        </View>
        <View>
          <View
            style={{
              height: spacing.s8,
              backgroundColor: colors.primarySubtle,
              borderRadius: spacing.s4,
            }}
          >
            <View
              style={{
                height: spacing.s8,
                backgroundColor: colors.primaryRich,
                borderRadius: spacing.s4,
                width: barWidth,
              }}
            />
          </View>
        </View>
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
      {showAddHabitModal && (
        <Modal
          animationType="slide"
          onRequestClose={() => handleCloseAddHabitModal()}
          backdropColor={colors.background}
          presentationStyle="pageSheet"
        >
          <SafeAreaView>
            <Text style={styles.addModalTitle}>Add Habit</Text>
            <Text style={styles.inputLabel}>Habit Title</Text>
            <TextInput style={styles.input} placeholder="Habit Title" />
            <Text style={styles.inputLabel}>Goal</Text>
            <TextInput
              style={styles.input}
              placeholder="Goal"
              keyboardType="number-pad"
            />
            <Text style={styles.inputLabel}>Unit of Measure</Text>
            <TextInput style={styles.input} placeholder="Unit of Measure" />
            <Text style={styles.inputLabel}>Time Range</Text>
            <View style={{ paddingHorizontal: spacing.s16 }}>
              <ChipFilter
                isActive={isActive}
                setIsActive={setIsActive}
                includeAllOption={false}
              />
            </View>
          </SafeAreaView>
        </Modal>
      )}
    </View>
  );
}
