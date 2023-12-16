import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButtonComponent from '../components/customComponents/MyButtonComponent';
import Image1Icon from '../components/icons/Image1Icon';
import NotificationIcon from '../components/icons/NotificationIcon';
import ShapeIcon from '../components/icons/ShapeIcon';

const FrontPageScreen = () => {
    return (
        <View style={styles.container}>
            <ShapeIcon/>
            <NotificationIcon style={styles.notification}/>
            <Image1Icon style={styles.icon}/>
            <Text style={styles.text1}>Gets things done with to do</Text>
            <View style={styles.container2}>
                <Text style={styles.text2}>Lorem ipsum dolor sit amet consectetur. Enim.</Text>
            </View>
            <MyButtonComponent marginBottom={90} title='Get Started'/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DEEAE8'
    },
    container2: {
        width: 250,
        marginLeft: 120,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification: {
        marginLeft: 50,
        marginTop: -150
    },
    text1: {
        marginTop: 70,
        marginLeft: 80,
        marginBottom: 50,
        fontFamily: 'Poppins',
        color: 'black',
        fontSize: 22,
        fontWeight: 700
    },
    text2: {
        fontFamily: 'Poppins',
        color: 'black',
        fontSize: 16,
        fontWeight: 600,
        marginBottom: 50,
    },
    icon: {
        marginLeft: 80,
        marginTop: 150
    }
});

export default FrontPageScreen;