import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import testReducer from './src/redux/reducers/RootReducers'
import AppNavigator from './src/route/AppNavigator'

Amplify.configure(awsmobile);
const store = createStore(testReducer);

class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        enabled
        style={{flex: 1 }}
        >
          <Provider store={store}>
            <AppNavigator/>
          </Provider>
      </KeyboardAvoidingView>
    );
  }
}

export default App