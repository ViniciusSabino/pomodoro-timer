import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Theme } from "../shared/themes/Theme";

export const Settings = () => {
  const navigation = useNavigation<any>();

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
        Settings
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ fontFamily: "InterBold", color: Theme.colors.text }}>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};
