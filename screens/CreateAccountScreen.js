import React, {Component} from 'react';
import {View, Text, Form, Item, Icon, Label, Input, Content, CheckBox, Picker, Header, Left, Right, Body, Title, Button} from 'native-base';
import {Linking} from 'react-native';

class CreateAccountScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			passwordConfirmation: '',
		}
	}

	static navigationOptions = {
    title: 'Create Account',
  };

	handleNextScreenPress = (event) => {
		const {email, password} = this.state;
		this.props.navigation.navigate('CreateAccountTwo', {email, password})
	}

  render() {
		const {email, password, passwordConfirmation} = this.state;
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
					<Item floatingLabel={true}>
						<Label>Re-type password</Label>
						<Input name='passwordConfirmation' type='password' secureTextEntry={true} value={passwordConfirmation} onChangeText={(value) => this.setState({passwordConfirmation: value})}/>
						<Icon name='lock' type='Entypo' size={15} style={{color: '#555555'}} />
					</Item>
				</Form>
				<View style={{ width: '100%', marginVertical: 30}}>
					<Button warning={true} rounded={true} block={true} onPress={this.handleNextScreenPress.bind(this)}>
						<Text>
							Next Screen
						</Text>
					</Button>
				</View>
      </View>
    );
  }
}

export {CreateAccountScreen};
