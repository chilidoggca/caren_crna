import React, {Component} from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import {
	AuthLoadingScreen,
	AuthScreen,
	DetailsScreen,
	SignInScreen,
	ForgotPasswordScreen,
	CreateAccountScreen,
	CreateAccountTwoScreen,
	TermsAndConditionsScreen,
	HomeScreen,
	TasksScreen,
} from './screens';
import { Root } from 'native-base';

const AuthStack = createStackNavigator(
	{
    Auth: AuthScreen,
		SignIn: SignInScreen,
		ForgotPassword: ForgotPasswordScreen,
		CreateAccount: CreateAccountScreen,
		CreateAccountTwo: CreateAccountTwoScreen,
		Terms: TermsAndConditionsScreen,
  },
  {
    initialRouteName: 'Auth',
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

const AppStack = createStackNavigator(
	{
		Home: HomeScreen,
		Details: DetailsScreen,
		Tasks: TasksScreen,
	},
	{
    initialRouteName: 'Home',
		navigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
		cardStyle : { backgroundColor : '#ffffff' },
  }
)

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default class App extends Component {
  render() {
    return (
			<Root>
				<RootStack />
			</Root>
		)
  }
}
