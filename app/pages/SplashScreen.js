import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { AsyncStorage, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? '' : 'Auth');
  };

  render() {
    return(
      <View />
    );
  }
}