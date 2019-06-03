import React, {Component, Fragment} from 'react';
import {StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import TextInput from '../../common/TextInput/TextInput'
import { withNavigation } from 'react-navigation'

import { Auth } from 'aws-amplify';

initialState = {
  email: '',
  password: '',
  c_password: '',
  user: {},
  authenticationCode: '',
  showConfirmationForm: false
}

class SignupAuth extends Component {
  state = initialState

  componentDidMount() {
    console.log(this.state)
  }

  handleChangeText = (key, value) => {
    this.setState({[key]: value })
  }

  SignUp = async () => {
    const { username, password, c_password, email } = this.state
    if (password === c_password) {
      try {
        const success = await Auth.signUp({ username, password, attributes: { email }})
        console.log('user successfully signed up!: ', success)
        this.setState({ showConfirmationForm: true })
      } catch (err) {
        console.log('error signing up: ', err)
      }
    } else {
      alert('Passwords do not match.')
    }

  }

  confirmSignUp = async () => {
    const { username, authenticationCode } = this.state
    try {
      await Auth.confirmSignUp(username, authenticationCode)
      console.log('successully signed up!')
      this.setState({ ...initialState })
      await this.props.navigation.navigate('Profile')
    } catch (err) {
      console.log('error confirming signing up: ', err)
    }
  }

  render() {
    return (
      <Fragment>
        {
          !this.state.showConfirmationForm && (
            <Fragment>
              <TextInput
                placeholder='Username'
                icon='user'
                handleChangeText={val => this.handleChangeText('username', val)}
              />
              <TextInput
                placeholder='Email'
                icon='mail'
                handleChangeText={val => this.handleChangeText('email', val)}
              />
              <TextInput
                placeholder='Password'
                icon='lock'
                handleChangeText={val => this.handleChangeText('password', val)}
              />
              <TextInput
                placeholder='Confirm Password'
                icon='lock'
                handleChangeText={val => this.handleChangeText('c_password', val)}
              />
              <Button
                title="Sign Up"
                containerStyle={styles.buttonContainerStyle}
                onPress={this.SignUp}
              />
            </Fragment>
          )
        }
        {
          this.state.showConfirmationForm && (
            <Fragment>
              <TextInput
                placeholder='Authentication code'
                icon='key'
                handleChangeText={val => this.handleChangeText('authenticationCode', val)}
              />
              <Button
                title='Confirm Sign Up'
                onPress={this.confirmSignUp}
              />
            </Fragment>
          )
        }
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    marginTop: 25
  }
})

export default withNavigation(SignupAuth)