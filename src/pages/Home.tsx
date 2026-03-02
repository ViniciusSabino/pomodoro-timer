import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export const Home = () => {
  const navigation = useNavigation<any>();

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
