import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Button } from 'react-native-elements';
import TextInput from '../../common/TextInput/TextInput'
import { withNavigation } from 'react-navigation'
import { Auth } from 'aws-amplify';

class LoginAuth extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    username: '',
    password: '',
    user: {},
    authenticationCode: '',
    showConfirmationForm: false
  }

  handleChangeText = (key, value) => {
    this.setState({[key]: value })
  }

  signIn = async () => {
    const { username, password } = this.state
    try {
       const user = await Auth.signIn(username, password)
       console.log('user successfully signed in!', user)
       this.setState({ user, showConfirmationForm: true })
       await this.props.navigation.navigate('Profile')
    } catch (err) {
      console.log('error:', err)
      await this.props.navigation.navigate('Authentication')
    }
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder='Email'
          icon='user'
          handleChangeText={val => this.handleChangeText('username', val)}
        />
        <TextInput
          placeholder='Password'
          icon='lock'
          secureTextEntry={true}
          handleChangeText={val => this.handleChangeText('password', val)}
        />
        <Button
          title="Log In"
          containerStyle={styles.buttonContainerStyle}
          onPress={this.signIn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    marginTop: 20
  }
})

export default withNavigation(LoginAuth)