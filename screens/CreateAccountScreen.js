import React, {Component} from 'react';
import {View, Text, Form, Item, Icon, Label, Input, Content, CheckBox, Picker, Header, Left, Right, Body, Title, Button} from 'native-base';
import {Linking} from 'react-native';

class CreateAccountScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			city: '',
			province: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			agreeToTerms: false,
		}
	}

	static navigationOptions = {
    title: 'Create Account',
  };


	handleAgreeToTermsChange = (event) => {
		this.setState({
			agreeToTerms: !this.state.agreeToTerms
		})
	}

	onProvinceValueChange = (value) => {
    this.setState({
      province: value
    });
  }

	signUp = (event) => {

	}

  render() {
		const {firstName, lastName, city, province, email, password, passwordConfirmation, agreeToTerms} = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 30 }}>
				<Form style={{width: '100%'}}>
					<Item floatingLabel={true}>
						<Label>First Name</Label>
						<Input name='firstName' type='text' value={firstName} onChangeText={(value) => this.setState({firstName: value})}/>
						<Icon name='user' type='FontAwesome' size={15} style={{color: '#555555'}} />
					</Item>
					<Item floatingLabel={true}>
						<Label>Last Name</Label>
						<Input name='lastName' type='text' value={lastName} onChangeText={(value) => this.setState({lastName: value})}/>
						<Icon name='user' type='FontAwesome' size={15} style={{color: '#555555'}} />
					</Item>
					<Item floatingLabel={true}>
						<Label>City</Label>
						<Input name='city' type='text' value={city} onChangeText={(value) => this.setState({city: value})}/>
						<Icon name='map-marker' type='FontAwesome' size={15} style={{color: '#555555'}} />
					</Item>

						<Picker
							renderHeader={backAction =>
								<Header>
									<Left>
										<Button transparent onPress={backAction}>
											<Icon name="arrow-back" />
										</Button>
									</Left>
									<Body style={{ flex: 3 }}>
										<Title>Select Province</Title>
									</Body>
									<Right />
								</Header>}
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Select Province..."
              style={{ marginTop: 30, width: '100%' }}
							itemStyle={{
                marginLeft: 30,
								marginRight: 30
              }}
              selectedValue={this.state.province}
              onValueChange={this.onProvinceValueChange.bind(this)}
            >
              <Picker.Item label="AB - Alberta" value="AB" />
              <Picker.Item label="BC - British Columbia" value="BC" />
              <Picker.Item label="MB - Manitoba" value="MB" />
              <Picker.Item label="NB - New Brunswick" value="NB" />
							<Picker.Item label="NL - Newfoundland and Labrador" value="NL" />
							<Picker.Item label="NS - Nova Scotia" value="NS" />
							<Picker.Item label="NT - Northwest Territories" value="NT" />
							<Picker.Item label="NU - Nunavut" value="NU" />
              <Picker.Item label="ON - Ontario" value="ON" />
							<Picker.Item label="PE - Prince Edward Island" value="PE" />
							<Picker.Item label="QC - Quebec" value="QC" />
							<Picker.Item label="SK - Saskatchewan" value="SK" />
							<Picker.Item label="YT - Yukon" value="YT" />
            </Picker>

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
					<Item floatingLabel={true}>
						<Label>Re-type password</Label>
						<Input name='passwordConfirmation' type='password' value={passwordConfirmation} onChangeText={(value) => this.setState({passwordConfirmation: value})}/>
						<Icon name='lock' type='Entypo' size={15} style={{color: '#555555'}} />
					</Item>
				</Form>
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginVertical: 30}}>
					<CheckBox checked={agreeToTerms} onPress={this.handleAgreeToTermsChange.bind(this)} style={{marginHorizontal: 20}} />
					<Text>I agree to <Text style={{textDecorationLine: 'underline'}} onPress={() => this.props.navigation.push('Terms')}>Terms and Conditions</Text></Text>
				</View>
				<Button warning={true} rounded={true} block={true} onPress={
						() => this.createAccount.bind(this)
					}>
					<Text>
						Create Account
					</Text>
				</Button>
      </View>
    );
  }
}

export {CreateAccountScreen};
