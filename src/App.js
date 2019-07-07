import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './screens/login/loginScreen';
import HomeScreen from './screens/home/homeScreen';


const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
},
  {
    initialRouteName: "Home",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}