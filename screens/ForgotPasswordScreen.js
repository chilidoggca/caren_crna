import React, {Component} from 'react';
import {View, Text, Form, Item, Label, Input, Icon, Button} from 'native-base';

class ForgotPasswordScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			emailConfirm: ''
		}
	}

	static navigationOptions = {
    title: 'Forgot Password?',
  };

  render() {
		const {email, emailConfirm} = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 30 }}>
				<Text>Confirm your email so we can send you a link to reset your account password.</Text>
				<Form style={{width: '100%'}}>
					<Item floatingLabel={true}>
						<Label>Email</Label>
						<Input name='email' type='email' value={email} onChangeText={(value) => this.setState({email: value})}/>
						<Icon name='at' type='FontAwesome' size={15} style={{color: '#555555'}} />
					</Item>
					<Item floatingLabel={true}>
						<Label>Confirm Email</Label>
						<Input name='emailConfirm' type='email' value={email} onChangeText={(value) => this.setState({emailConfirm: value})}/>
						<Icon name='at' type='FontAwesome' size={15} style={{color: '#555555'}} />
					</Item>
				</Form>
				<Button style={{
						marginVertical: 30
					}} warning={true} block={true} rounded={true}>
					<Text>
						Reset Password
					</Text>
				</Button>
      </View>
    );
  }
}

export {ForgotPasswordScreen};
