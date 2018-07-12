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

class AuthScreen extends Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
	    header: null,
  };


	render() {
		return (<Container>
			<View style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				marginHorizontal: 30
			}}>
				<View style={{
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'flex-end'
				}}>
					<Image style={{
						width: 60,
						height: 60,
						marginRight: 10
					}} source={require('../assets/img/logo-clear.png')}/>
					<H1>Welcome to Caren</H1>
				</View>
			<Button style={{
				backgroundColor: '#3B5998',
				marginVertical: 15,
				marginTop: 30
			}} iconLeft="iconLeft" rounded={true} block={true}>
				<Icon name="facebook" type="FontAwesome" size={15}/>
				<Text>
					Continue with Facebook
				</Text>
			</Button>
			<Button style={{
				backgroundColor: '#DB3236',
				marginVertical: 0,
				marginBottom: 30
			}} iconLeft="iconLeft" rounded={true} block={true}>
				<Icon name="google" type="FontAwesome" size={12}/>
				<Text>
					Continue with Google
				</Text>
			</Button>
			<Button style={{
					marginVertical: 15
				}} warning={true} rounded={true} block={true} onPress={
					() => this.props.navigation.navigate('SignIn')
				}>
				<Text>
					Sign In
				</Text>
			</Button>
			<Button style={{
					marginVertical: 0
				}} warning={true} bordered={true} rounded={true} block={true} onPress={
					() => this.props.navigation.navigate('CreateAccount')
				}>
				<Text>
					Create Account
				</Text>
			</Button>
		</View>
	</Container>)
	}
}

export {AuthScreen};
