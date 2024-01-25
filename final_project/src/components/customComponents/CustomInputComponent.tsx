import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface MyInputComponentProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  secureTextEntry?: boolean;
  handleField: (text: string) => void;
}

const MyInputComponent: React.FC<MyInputComponentProps> = ({
  placeholder,
  value,
  secureTextEntry,
  handleField,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => handleField(text)}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  input: {width: '100%',
    marginLeft: 10,
    marginVertical: 10,
    padding: 5,
    backgroundColor: "#F3F8FE",
    color: "#B8B8B8",
    borderRadius: 100,
    textAlign: 'center'
  },
});

export default MyInputComponent;
