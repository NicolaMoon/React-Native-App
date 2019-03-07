import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import { SignIn, SplashScreen } from './app/index';

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: SplashScreen,
    // App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));