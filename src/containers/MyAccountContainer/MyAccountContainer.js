import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { Auth } from 'aws-amplify';

class MyAccountContainer extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    title: 'My Account',
  }

  componentDidMount() {
    console.log(this.props)
  }

  handleSignOut = () => {
    Auth.signOut()
    .then(() => this.props.navigation.navigate('Authentication'))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <SafeAreaView>
        <Button
        title="Sign Out"
        onPress={this.handleSignOut}
      />
      </SafeAreaView>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    ...state
  }
}

const mapsDispatchToProps = (dispatch) => (
  bindActionCreators({
    dispatch})
)

export default connect(mapsStateToProps, mapsDispatchToProps)(MyAccountContainer)