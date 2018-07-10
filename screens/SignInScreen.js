import React, {Component} from 'react';
import {View, Text, Form, Item, Icon, Label, Input, Content, CheckBox, Button} from 'native-base';
import {Linking} from 'react-native';

class SignInScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		}
	}

	static navigationOptions = {
    title: 'Sign In',
  };

	signIn = (event) => {

	}

  render() {
		const {email, password, agreeToTerms} = this.state;
    return (
			<Content>
	      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 30 }}>
					<Form style={{width: '100%'}}>
						<Item floatingLabel={true}>
							<Label>Email</Label>
							<Input name='email' type='email' value={email} onChangeText={(value) => this.setState({email: value})}/>
							<Icon name='at' type='FontAwesome' size={15} style={{color: '#555555'}} />
						</Item>
						<Item floatingLabel={true}>
							<Label>Password</Label>
							<Input name='password' type='password' value={password} onChangeText={(value) => this.setState({password: value})}/>
							<Icon name='lock' type='Entypo' size={15} style={{color: '#555555'}} />
						</Item>
					</Form>
					<Button style={{
							marginVertical: 30
						}} warning={true} rounded={true} block={true} onPress={
							() => this.signIn.bind(this)
						}>
						<Text>
							Sign In
						</Text>
					</Button>
	      </View>
			</Content>
    );
  }
}

export {SignInScreen};
