import React, {Component} from 'react';
import {View, Text} from 'react-native';

class DetailsScreen extends Component {
	
	static navigationOptions = {
    title: 'Details',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export {DetailsScreen};
