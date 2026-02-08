import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIndexStyles } from "./styles/index.styles";

export default function Index() {
  const styles = useIndexStyles();
  const currentDate = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  } as const;

  const fullDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{fullDate}</Text>
      </View>
    </SafeAreaView>
  );
}
