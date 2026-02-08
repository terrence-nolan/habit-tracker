import { spacing } from "@/theme";
import { useThemeColors } from "@/theme/useThemeColors";
import { Tabs } from "expo-router";
import { CalendarDotIcon, ChartBarIcon } from "phosphor-react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabLayout() {
  const colors = useThemeColors();
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: colors.background },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarIconStyle: {
            width: spacing.xl,
            height: spacing.xl,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <CalendarDotIcon
                color={color}
                size={size}
                weight={focused ? "fill" : "regular"}
              />
            ),
            title: "Today",
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <ChartBarIcon
                color={color}
                size={size}
                weight={focused ? "fill" : "regular"}
              />
            ),
            title: "History",
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
