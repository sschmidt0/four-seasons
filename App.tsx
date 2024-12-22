import { StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FourSeasons } from "./src/screen/four-seasons";
import { StatusBar } from "expo-status-bar";
import { Colours } from "./src/colours";

export default function App() {
  return (
    <LinearGradient
      colors={[Colours["dark-red"], Colours.blue]}
      style={styles.container}
    >
      <SafeAreaView style={styles.innerContainer}>
        <FourSeasons />
        <StatusBar style="light" />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.15,
  },
});
