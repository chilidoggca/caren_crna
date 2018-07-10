import React, {Component} from 'react';
import {View, Text} from 'react-native';

class TermsAndConditionsScreen extends Component {

	static navigationOptions = {
    title: 'Terms & Conditions',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Terms And Conditions</Text>
      </View>
    );
  }
}

export {TermsAndConditionsScreen};
