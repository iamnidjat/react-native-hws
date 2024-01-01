import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TextInputProps } from "react-native";

interface MyInputComponentProps extends TextInputProps {
    placeholder: string;
    value: string;
    secureTextEntry: boolean;
    myFunction: (text: string) => void;
 };

const MyInputComponent: React.FC<MyInputComponentProps> = ({
    placeholder,
    value,
    secureTextEntry,
    myFunction,
  }) => {
    return (
      <View>
        <TextInput
          value={value}
          onChangeText={(text) => myFunction(text)}
          className='border border-platinum border-solid m-2.5 bg-platinum p-2.5 rounded'
          placeholder={placeholder}
          placeholderTextColor = '#BDBDBD'
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  };
  

// const styles = StyleSheet.create({
//     input: {
//       borderWidth: 1,
//       borderColor: "#E8E8E8",
//       borderStyle: "solid",
//       margin: 10,
//       backgroundColor: '#E8E8E8',
//       padding: 10,
//       borderRadius: 5
//     },
//   });

export default MyInputComponent;