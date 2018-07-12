import React, {Component} from 'react';
import {AsyncStorage, Image} from 'react-native';
import {Header, Left, Right, Body, View, Icon, Text, H1} from 'native-base';

class LogoTitle extends Component {

	constructor(props) {
		super(props)
	}

	_signOutAsync = async () => {
		await AsyncStorage.clear();
		const {logout = () => {}} = this.props;
    logout();
  };

	render() {
		return (
			<Header>
				<Left>
					<Icon type="Entypo" name="menu" style={{fontSize: 27, color: '#333333'}} />
				</Left>
				<Body style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
					<Image style={{
						width: 30,
						height: 30,
					}} source={require('../assets/img/logo-clear.png')}/>
					<H1>aren</H1>
				</Body>
				<Right>
					<Icon type="Entypo" name="log-out" style={{fontSize: 20, color: '#333333'}} onPress={this._signOutAsync.bind(this)} />
				</Right>
			</Header>
		)
	}

}

export {LogoTitle};
