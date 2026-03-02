import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  NavigationProp,
  DefaultTheme,
} from "@react-navigation/native";

import { Home } from "../pages/Home";
import { Settings } from "../pages/Settings";
import { Theme } from "../shared/themes/Theme";

type ScreenDefinitions = {
  Home: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        fonts: {
          ...DefaultTheme.fonts,
          bold: {
            fontWeight: "700",
            fontFamily: Theme.fonts.interBold,
          },
          regular: {
            fontWeight: "500",
            fontFamily: Theme.fonts.interRegular,
          },
        },
        colors: {
          ...DefaultTheme.colors,
          background: Theme.colors.background,
          primary: Theme.colors.primary,
          card: Theme.colors.divider,
          text: Theme.colors.text,
        },
      }}
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type TNavigationScreenProps = NavigationProp<ScreenDefinitions>;
