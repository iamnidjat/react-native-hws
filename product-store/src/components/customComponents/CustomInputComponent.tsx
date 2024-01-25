import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface MyInputComponentProps extends TextInputProps {
  placeholder: string;
}

const CustomInputComponent: React.FC<MyInputComponentProps> = ({
  placeholder,
}) => {
  return <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor='grey'></TextInput>;
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 30,
    zIndex: 999,
    backgroundColor: '#fff',
    borderRadius: 100,
    marginHorizontal: 20,
    marginTop: -20
  },
});

export default CustomInputComponent;
