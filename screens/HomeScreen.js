import React, {Component} from 'react';
import {
  Container,
	Content,
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

class HomeScreen extends Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
    header: <LogoTitle />,
		title: 'Home',
  };

	static navigationProps = {
		header: ({ navigation }) => {
			console.log(navigation)
			return {
				logout: navigation.navigate('Auth')
			}
		}
	}

	render() {
		return (
			<View style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				marginHorizontal: 30,
			}}>
				<Text>Home Page</Text>
					<Button style={{
							marginTop: 30
						}} warning={true} rounded={true} block={true} onPress={() => this.props.navigation.navigate('Details')}>
						<Text>
							Details
						</Text>
					</Button>
					<Button style={{
							marginTop: 30
						}} warning={true} rounded={true} block={true} onPress={() => this.props.navigation.navigate('Tasks')}>
						<Text>
							Tasks
						</Text>
					</Button>
			</View>
		)
	}
}

export {HomeScreen};
