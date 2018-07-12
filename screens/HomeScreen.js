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
  };

	static navigationProps = {
		header: ({ logout }) => {
			return {
				logout: this.props.navigation.navigate('Auth')
			}
		}
	}

	render() {
		return (<Content padder style={{backgroundColor: 'red'}}>
			<View style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				marginHorizontal: 30,
			}}>
				<Text>Home</Text>
					<Button style={{
							marginTop: 30
						}} warning={true} rounded={true} block={true} onPress={() => this.props.navigation.navigate('Details')}>
						<Text>
							Details
						</Text>
					</Button>
			</View>
	</Content>)
	}
}

export {HomeScreen};
