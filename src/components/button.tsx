import {
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  View,
  ImageSourcePropType,
  Platform,
} from "react-native";
import { Colours } from "../colours";

export interface CustomButtonProps {
  image: ImageSourcePropType;
  text: string;
  onPress: (text: string) => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  image,
  text,
  onPress,
}) => {
  const handlePress = () => {
    onPress(text);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={(pressed) => [
          styles.innerContainer,
          { backgroundColor: pressed ? "darkred" : "red" },
        ]}
        accessible
        accessibilityLabel={text}
        android_ripple={{ color: Colours.blue, borderless: true }}
        onPress={handlePress}
      >
        <View style={styles.imageContainer}>
          <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>{text}</Text>
          </ImageBackground>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "47%",
    height: 120,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    borderRadius: 20,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    borderRadius: 20,
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.9,
  },
  text: {
    padding: 20,
    color: Colours.black,
    fontWeight: 900,
    fontSize: 20,
  },
});
