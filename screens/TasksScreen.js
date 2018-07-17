import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../tasks/store'; //Import the store
import Tasks from '../tasks/Tasks' //Import the component file

class TasksScreen extends Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
    title: 'Tasks',
  };

  render() {
    return (
      <Provider store={store}>
        <Tasks />
      </Provider>
    );
  }
}

export {TasksScreen};
