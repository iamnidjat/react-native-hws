import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInputProps,
} from "react-native";

interface MyButtonComponentProps extends TextInputProps {
  title: string;
  testID: string;
  onPress: () => void;
}

const CustomButtonComponent: React.FC<MyButtonComponentProps> = ({
  title,
  testID,
  onPress,
}) => {
  return (
    <Pressable style={styles.button} testID={testID} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "green",
    borderWidth: 1,
    backgroundColor: "green",
  },
  text: {
    padding: 10,
    color: "white",
  },
});

export default CustomButtonComponent;
