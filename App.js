import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import {
	HomeScreen,
	DetailsScreen,
	SignInScreen,
	CreateAccountScreen,
	TermsAndConditionsScreen,
} from './screens';

const RootStack = createStackNavigator(
	{
    Home: HomeScreen,
    Details: DetailsScreen,
		SignIn: SignInScreen,
		CreateAccount: CreateAccountScreen,
		Terms: TermsAndConditionsScreen,
  },
  {
    initialRouteName: 'Home',
		navigationOptions: {
      headerStyle: {
        backgroundColor: '#f0ad4e',
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
		cardStyle : { backgroundColor : '#ffffff' },
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
