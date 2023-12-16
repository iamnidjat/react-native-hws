import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const MyButtonComponent = ({title, marginBottom}) => {
    const dynamicStyles = { marginBottom: marginBottom };

    return (
        <Pressable style={[styles.button, dynamicStyles]}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#30A6AE',
        width: 320,
        height: 52,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        margin: 50
    },
    text: {
        fontFamily: 'Poppins',
        color: '#DEEAE8',
        fontSize: 20,
        fontWeight: 600
    }
});

export default MyButtonComponent;