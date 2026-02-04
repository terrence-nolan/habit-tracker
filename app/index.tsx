import React from "react";
import { Text, View } from "react-native";
import { useIndexStyles } from "./styles/index.styles";

export default function Index() {
  const styles = useIndexStyles();
  const currentDate = new Date();

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  } as const;

  const fullDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <View
      style={styles.page}
    >
      <Text>{fullDate}</Text>
    </View>
  );
}
