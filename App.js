import React, {Component} from 'react';
import {Platform, KeyboardAvoidingView} from 'react-native';

import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import AppNavigator from './src/route/AppNavigator'

Amplify.configure(awsmobile)

class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        enabled
        style={{ flex: 1 }}
        >
        <AppNavigator/>
      </KeyboardAvoidingView>
    );
  }
}

export default App