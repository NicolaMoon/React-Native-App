import React, {Component} from 'react';
import {View, Text, StatusBar } from 'react-native';

export default class extends Component {
  static navigationOptions = {
    title: 'Sign In',
    headerStyle: {
      backgroundColor: '#1890ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 36,
    },
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="#1890ff" />
        <Text>Welcome To SignIn!</Text>
      </View>
    );
  }
}