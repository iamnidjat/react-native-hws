import React from 'react';
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView } from 'react-native';
import MyButtonComponent from '../components/customComponents/MyButtonComponent';
import NotificationIcon from '../components/icons/NotificationIcon';
import ShapeIcon from '../components/icons/ShapeIcon';
import MyInputComponent from '../components/customComponents/MyInputComponent';

const RegistrationScreen = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.container}>
                <ShapeIcon/>
                <NotificationIcon style={styles.notification}/>
                <Text style={styles.text1}>Welcome Onboard</Text>
                <Text style={styles.text2}>Let's help you meet up your tasks.</Text>
                <MyInputComponent placeholder='Enter your full name'/>
                <MyInputComponent placeholder='Enter your email'/>
                <MyInputComponent placeholder='Enter your password'/>
                <MyInputComponent placeholder='Confirm your password'/>
                <MyButtonComponent marginBottom={10} title='Registration'/>
                <Text style={styles.text3}>Already have an account ?
                    <Text style={styles.text4}> Sign in.</Text>
                </Text>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DEEAE8'
    },
    notification: {
        marginLeft: 50,
        marginTop: -150
    },
    text1: {
        marginTop: 180,
        marginLeft: 120,
        marginBottom: 30,
        fontFamily: 'Poppins',
        color: 'black',
        fontSize: 22,
        fontWeight: 700
    },
    text2: {
        marginLeft: 100,
        marginBottom: 60,
        fontFamily: 'Poppins',
        color: 'black',
        fontSize: 16,
        fontWeight: 600
    },
    text3: {
        marginTop: 10,
        marginBottom: 22,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins',
        color: 'black',
        fontSize: 13,
        fontWeight: 500
    },
    text4: {
        fontFamily: 'Poppins',
        color: '#009A9A',
        fontSize: 13,
        fontWeight: 500
    }
});

export default RegistrationScreen;