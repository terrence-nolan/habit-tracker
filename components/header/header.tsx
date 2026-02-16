import { spacing, useThemeColors } from "@/theme";
import { GearIcon } from "phosphor-react-native";
import { TouchableOpacity, View } from "react-native";
import { useHeaderStyles } from "./styles/header.styles";

export function Header() {
  const colors = useThemeColors();
  const styles = useHeaderStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <GearIcon size={spacing.s28} color={colors.textPrimary} />
      </TouchableOpacity>
    </View>
  );
}
