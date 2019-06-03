import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import { Button } from 'react-native-elements';

import { Auth } from 'aws-amplify';
class Dummy extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {

  }

  handleSignOut = () => {
    Auth.signOut()
    .then(() => this.props.navigation.navigate('Authentication'))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <SafeAreaView>
        <Text h1>login</Text>
        <Button
        title="Sign Out"
        onPress={this.handleSignOut}
      />
      </SafeAreaView>
    );
  }
}

export default Dummy