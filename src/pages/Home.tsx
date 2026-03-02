import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { TNavigationScreenProps } from "../app/AppRoutes";

export const Home = () => {
  const navigation = useNavigation<TNavigationScreenProps>();

  return (
    <View>
      <Text style={{ fontFamily: "InterBold", color: "black" }}>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text style={{ fontFamily: "InterBold", color: "black" }}>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};
