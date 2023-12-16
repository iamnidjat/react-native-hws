import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const MyInputComponent = ({placeholder}) => {
    return (
        <TextInput style={styles.textInput} placeholder={placeholder}>

        </TextInput>
    );
};

const styles = StyleSheet.create({
    textInput: {
        margin: 30,
        marginBottom: 5,
        backgroundColor: 'white',
        width: 360,
        height: 50,
        borderColor: 'transparent',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 100,
        color: 'black',
        padding: 20
    },
});


export default MyInputComponent;