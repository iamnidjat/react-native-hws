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
    <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer}>
      <View style={styles.checkbox}>
        {isChecked && <Text>✓</Text>}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyCheckBoxComponent;