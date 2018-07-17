import React, {Component} from 'react';
import {View, Text, Form, Item, Icon, Label, Input, Content, CheckBox, Button} from 'native-base';
import {AsyncStorage} from 'react-native';

class SignInScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			rememberMe: false
		}
	}

	static navigationOptions = {
    title: 'Sign In',
  };

	handleRememberMe = (event) => {
		this.setState({
			rememberMe: !this.state.rememberMe
		})
	}

	_signInAsync = async () => {
		await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
	}

// UI design: use content padder vs. view with marginHorizontal?
  render() {
		const {email, password, rememberMe} = this.state;
    return (
	      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 30 }}>
					<Form style={{width: '100%'}}>
						<Item floatingLabel={true}>
							<Label>Email</Label>
							<Input name='email' type='email' value={email} onChangeText={(value) => this.setState({email: value})}/>
							<Icon name='at' type='FontAwesome' size={15} style={{color: '#555555'}} />
						</Item>
						<Item floatingLabel={true}>
							<Label>Password</Label>
							<Input name='password' type='password' value={password} secureTextEntry={true} onChangeText={(value) => this.setState({password: value})}/>
							<Icon name='lock' type='Entypo' size={15} style={{color: '#555555'}} />
						</Item>
					</Form>
					{/*
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginTop: 30}}>
						<CheckBox checked={rememberMe} onPress={this.handleRememberMe.bind(this)} style={{marginHorizontal: 20}} />
						<Text>Remember me</Text>
						</View>
					*/}
					<Button style={{
							marginVertical: 30
						}} warning={true} rounded={true} block={true} onPress={this._signInAsync}>
						<Text>
							Sign In
						</Text>
					</Button>
					<Text style={{textDecorationLine: 'underline'}} onPress={()=>this.props.navigation.navigate('ForgotPassword')}>Forgot password?</Text>
	      </View>
    );
  }
}

export {SignInScreen};
