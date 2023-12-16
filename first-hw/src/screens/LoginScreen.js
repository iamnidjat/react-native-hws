import React from 'react';
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView } from 'react-native';
import MyButtonComponent from '../components/customComponents/MyButtonComponent';
import NotificationIcon from '../components/icons/NotificationIcon';
import ShapeIcon from '../components/icons/ShapeIcon';
import Image2Icon from '../components/icons/Image2Icon';
import MyInputComponent from '../components/customComponents/MyInputComponent';

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.container}>
                <ShapeIcon/>
                <NotificationIcon style={styles.notification}/>
                <Text style={styles.text1}>Welcome back !</Text>
                <Image2Icon style={styles.icon}/>
                <MyInputComponent placeholder='Enter your email'/>
                <MyInputComponent placeholder='Enter your password'/>
                <Text style={styles.text2}>Forgot Password</Text>
                <MyButtonComponent marginBottom={10} title='Login'/>
                <Text style={styles.text3}>Don't have an account ?
                    <Text style={styles.text4}> Sign up.</Text>
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
        marginTop: 150,
        marginLeft: 140,
        marginBottom: 10,
        fontFamily: 'Poppins',
        color: 'black',
        fontSize: 22,
        fontWeight: 700
    },
    text2: {
        marginTop: 10,
        marginLeft: 160,
        marginBottom: -30,
        fontFamily: 'Poppins',
        color: '#0E6565',
        fontSize: 13,
        fontWeight: 400
    },
    text3: {
        marginTop: 10,
        marginBottom: 40,
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
    },
    icon: {
        marginLeft: 50,
        marginBottom: -20
    }
});

export default LoginScreen;