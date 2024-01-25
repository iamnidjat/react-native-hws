import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInputProps, Alert  } from 'react-native';

interface MyCheckBoxComponentProps{
    label: string;
    onChange?: (isChecked: boolean) => void;
 };


const MyCheckBoxComponent:  React.FC<MyCheckBoxComponentProps> = ({
    label,
    onChange,
  })=> {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
      Alert.alert(
        'Alert Title',
        'This is the alert message.',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} className='flex flex-row items-center'>
      <View className='flex w-5 h-5 border border-black mr-2.5 justify-center items-center'>
        {isChecked && <Text>✓</Text>}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default MyCheckBoxComponent;
