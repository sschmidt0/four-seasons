import { View, StyleSheet } from "react-native";
import { CustomButton } from "./button";
import { buttonContent } from "../business";

export interface ButtonSetProps {
  onPress: (text: string) => void;
}

export const ButtonSet: React.FC<ButtonSetProps> = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonLine}>
        <CustomButton
          image={buttonContent[0].image}
          text={buttonContent[0].text}
          onPress={onPress}
        />
        <CustomButton
          image={buttonContent[1].image}
          text={buttonContent[1].text}
          onPress={onPress}
        />
      </View>
      <View style={styles.buttonLine}>
        <CustomButton
          image={buttonContent[2].image}
          text={buttonContent[2].text}
          onPress={onPress}
        />
        <CustomButton
          image={buttonContent[3].image}
          text={buttonContent[3].text}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    gap: 12,
    alignItems: "center",
  },
  buttonLine: {
    flexDirection: "row",
    gap: 12,
  },
});
