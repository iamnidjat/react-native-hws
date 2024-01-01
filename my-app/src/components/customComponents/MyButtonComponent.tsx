import React from 'react';
import { Pressable, View, Text, TextInput, Button, StyleSheet, TextInputProps } from "react-native";

interface MyButtonComponentProps extends TextInputProps {
    title: string;
    onPress: () => void;
 };

const MyButtonComponent: React.FC<MyButtonComponentProps> = ({
    title,
    onPress,
  }) => {
    return (
        <Pressable className='border border-crayola border-solid bg-crayola rounded m-4' onPress={onPress} >
            <Text className='text-white text-center p-2.5'>{title}</Text>
        </Pressable>
    );
};

// const styles = StyleSheet.create({
//     button: {
//       borderWidth: 1,
//       borderColor: "#5DB075",
//       borderStyle: "solid",
//       backgroundColor: '#5DB075',
//       borderRadius: 100,
//       margin: 15
//     },
//     text: {
//         color: 'white',
//         textAlign: 'center',
//         padding: 10
//     }
//   });


export default MyButtonComponent;