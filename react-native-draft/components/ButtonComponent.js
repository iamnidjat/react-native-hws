import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const ButtonComponent = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    height: 60,
    width: 100,
    backgroundColor: 'red'
});

export default ButtonComponent;