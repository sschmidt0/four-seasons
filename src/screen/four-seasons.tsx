import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import { ButtonSet } from "../components/button-set";
import { Month } from "../components/month";
import { monthContent, MonthObj } from "../business";
import { Colours } from "../colours";
import { speak } from "../speak";

export const FourSeasons = () => {
  const [month, setMonth] = React.useState<MonthObj>();
  const [result, setResult] = React.useState("");
  const [color, setColor] = React.useState("red");

  const question = "Which season does the month belong to?";

  const handlePress = (season: string) => {
    Speech.stop();
    setResult("");
    speak(season);

    if (season.toLowerCase() === month?.season?.toLowerCase()) {
      setColor(Colours["light-green"]);
      setResult("🥳");
      speak("Well done! Continue this way!");

      setTimeout(() => {
        chooseMonth();
      }, 3700);
    } else {
      setColor(Colours.red);
      setResult("🤨");
      speak(`${month?.month} is not in ${season}. Try again!`);

      setTimeout(() => {
        setResult("");
      }, 2000);
    }
  };

  const chooseMonth = () => {
    const randomNumber = Math.floor(Math.random() * monthContent.length);
    const randomMonth = monthContent[randomNumber] as MonthObj;
    setMonth(randomMonth);
    setResult("");
  };

  React.useEffect(() => {
    setMonth(undefined);
    speak(`Four seasons. ${question}`);
    chooseMonth();
  }, []);

  React.useEffect(() => {
    speak(month?.month as string);
  }, [month]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Four Seasons</Text>
        <Text style={styles.subtitle}>{question}</Text>
      </View>
      <Month month={month?.month!} number={month?.number!} />
      <View style={styles.resultContainer}>
        <Text style={[{ color: color }, styles.result]}>{result}</Text>
      </View>
      <ButtonSet onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    color: Colours.white,
    fontSize: 48,
  },
  subtitle: {
    color: Colours.white,
    fontSize: 18,
  },
  resultContainer: {
    width: "80%",
    height: 80,
    alignItems: "center",
  },
  result: {
    fontSize: 70,
  },
});
