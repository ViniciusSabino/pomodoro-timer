import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { MaterialIcons } from "@expo/vector-icons";

import { TNavigationScreenProps } from "../app/AppRoutes";
import { Theme } from "../shared/themes/Theme";

export const Home = () => {
  const navigation = useNavigation<TNavigationScreenProps>();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.settingButton}
        onPress={() => navigation.navigate("Settings")}
      >
        <MaterialIcons
          name="settings"
          size={28}
          color={Theme.colors.divider}
        ></MaterialIcons>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.titleGroup}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Pomodoro</Text>
          </View>

          <View style={styles.stateContainer}>
            <Text style={styles.stateText}>Vamos nos concentrar?</Text>
          </View>

          {/* <View style={styles.stateContainer}>
          <Text style={styles.stateText}>Pausa Curta</Text>
        </View>

        <View style={styles.stateContainer}>
          <Text style={styles.stateText}>Pausa longa</Text>
        </View>

        <View style={styles.stateContainer}>
          <Text style={styles.stateText}>Cronometro em pausa</Text>
        </View> */}
          <View style={styles.progressContainer}>
            <AnimatedCircularProgress
              size={160}
              width={7}
              fill={10}
              rotation={0}
              tintColor={Theme.colors.divider}
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor={Theme.colors.primary}
              children={() => <Text style={styles.progressText}>12:45</Text>}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Iniciar</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Pausar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Parar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View> */}

        <View style={styles.pomodorosContainer}>
          <Text style={styles.pomodorosText}>Pomodoros:</Text>
          <View style={styles.pomodorosIndicator}></View>
          <View style={styles.pomodorosIndicatorComplete}></View>
          <View style={styles.pomodorosIndicatorComplete}></View>
          <View style={styles.pomodorosIndicatorComplete}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 65,
    paddingHorizontal: 25,
  },
  container: {
    gap: 36,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  settingButton: {
    alignSelf: "flex-end",
  },
  titleGroup: {
    gap: 24,
  },
  primaryButton: {
    backgroundColor: Theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 55,
  },
  primaryButtonText: {
    color: Theme.colors.text,
    fontFamily: Theme.fonts.interRegular,
    fontSize: Theme.fontSizes.body,
  },
  secondaryButton: {
    borderColor: Theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderWidth: 2,
    borderRadius: 55,
  },
  secondaryButtonText: {
    color: Theme.colors.text,
    fontFamily: Theme.fonts.interRegular,
    fontSize: Theme.fontSizes.body,
  },
  buttonContainer: { flexDirection: "row", justifyContent: "center", gap: 16 },
  progressContainer: {
    alignItems: "center",
  },
  progressText: {
    color: Theme.colors.text,
    fontSize: Theme.fontSizes.title,
    fontFamily: Theme.fonts.interRegular,
  },
  titleContainer: {
    alignItems: "center",
  },
  titleText: {
    color: Theme.colors.text,
    fontFamily: Theme.fonts.interBold,
    fontSize: Theme.fontSizes.title,
  },
  stateContainer: {
    alignItems: "center",
  },
  stateText: {
    color: Theme.colors.text,
    fontFamily: Theme.fonts.interRegular,
    fontSize: Theme.fontSizes.body,
  },
  pomodorosContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  pomodorosText: {
    color: Theme.colors.text,
    fontFamily: Theme.fonts.interRegular,
    fontSize: Theme.fontSizes.body,
  },
  pomodorosIndicator: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: Theme.colors.divider,
  },
  pomodorosIndicatorComplete: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: Theme.colors.primary,
  },
});
