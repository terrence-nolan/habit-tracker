import { BreadcrumbSection } from "@/components/breadcrumbs/breadcrumb-section";
import { Header } from "@/components/header/header";
import { spacing, useThemeColors } from "@/theme";
import { PlusIcon } from "phosphor-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIndexStyles } from "./styles/index.styles";

export default function Index() {
  const styles = useIndexStyles();
  const colors = useThemeColors();
  const currentDate = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  } as const;

  const fullDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <SafeAreaView style={styles.page}>
      <Header />
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{fullDate}</Text>
      </View>
      <View>
        <BreadcrumbSection title="Drink Water" goal={8} unit="1 glass" />
        <BreadcrumbSection title="Play Guitar" goal={5} unit="5 minutes" />
        <BreadcrumbSection title="Read" goal={10} unit="10 minutes" />
      </View>
      <TouchableOpacity style={styles.addButton}>
        <PlusIcon size={spacing.s32} color={colors.background} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
