import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export const Settings = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>Settings</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ fontFamily: "InterBold", color: "black" }}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};
