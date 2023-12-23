import React from 'react';
import { View, Text } from 'react-native';
import ToDoComponent from '../components/Todo/ToDoComponent';

const todoScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ToDoComponent/>
        </View>
      );
};

export default todoScreen;