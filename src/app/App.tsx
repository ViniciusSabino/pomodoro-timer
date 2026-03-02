import { View } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

import { Home } from "../pages/Home";

SplashScreen.preventAutoHideAsync();

export function App() {
  const [loaded, error] = useFonts({
    InterRegular: Inter_400Regular,
    InterBold: Inter_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hide();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Home />
    </View>
  );
}
