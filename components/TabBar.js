import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

const TabBar = createBottomTabNavigator(
	{
		'Home': HomeScreen,
		'Details': DetailsScreen,
		'Settings': SettingsScreen,
	},
	{

	}
)

export {TabBar};
