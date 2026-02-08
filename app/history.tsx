import { Text, View } from "react-native";
import { useHistoryStyles } from "./styles/history.styles";

export default function Index() {
  const styles = useHistoryStyles();

  return (
    <View
      style={[
        styles.page,
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Text style={styles.text}>Welcome to your page.</Text>
    </View>
  );
}
