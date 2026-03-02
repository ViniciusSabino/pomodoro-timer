import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

import { TNavigationScreenProps } from "../app/AppRoutes";
import { Theme } from "../shared/themes/Theme";

export const Home = () => {
  const navigation = useNavigation<TNavigationScreenProps>();

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontFamily: "InterBold",
          color: Theme.colors.text,
        }}
      >
        Home
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text style={{ fontFamily: "InterBold", color: Theme.colors.text }}>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};
