import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";

import { Home } from "../pages/Home";
import { Settings } from "../pages/Settings";

type ScreenDefinitions = {
  Home: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type TNavigationScreenProps = NavigationProp<ScreenDefinitions>;
