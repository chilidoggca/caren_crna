import React, {Component} from 'react';
import {
  Container,
  View,
  Icon,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  H1
} from 'native-base';
import {Image} from 'react-native';
import {LogoTitle} from '../components/LogoTitle';

class SettingsScreen extends Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
	    title: 'Settings',
  };


	render() {
		return (<Container>
			<View style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				marginHorizontal: 30,
			}}>
				<Text>Settings</Text>
			</View>
	</Container>)
	}
}

export {SettingsScreen};
