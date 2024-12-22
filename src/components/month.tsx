import { Text, View, StyleSheet } from "react-native";

export interface MonthProps {
  month: string;
  number: string;
}

export const Month: React.FC<MonthProps> = ({ month, number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.text}>{month}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "yellow",
    fontSize: 60,
  },
  number: {
    color: "yellow",
    fontSize: 40,
  },
});
