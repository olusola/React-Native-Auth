import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Auth } from 'aws-amplify';

import SignupAuth from '../../components/SignupAuth/SignupAuth'
import LoginAuth from '../../components/LoginAuth/LoginAuth'

class AuthContainer extends Component {
  constructor() {
    super()
    this.state = {
      authFormSelected: 'login'
    }
  }

  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      if (user) {
        console.log('current user', this.props)
        this.props.navigation.navigate('Discover')
      } else {
        console.log('no current user', user)
        this.props.navigation.navigate('Authentication')
      }
    } catch (error) {
      console.log(error)
      this.props.navigation.navigate('Authentication')
    }
  }

  switchAuthType = (authSelected) => {
    this.setState({
      authFormSelected: authSelected
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.introA}>
        <Icon
          name='smile-o' 
          size={40} />
        </View>
        <View style={styles.introB}>
          <View style={styles.loginHeader}>
            <View style={styles.loginHeaderSignin}>
            <Button
                title='Login'
                type='clear'
                onPress={() => this.switchAuthType('login')}
              />
            </View>
            <View style={styles.loginHeaderSignup}>
              <Button
                title="SignUp"
                type='clear'
                onPress={() => this.switchAuthType('signup')}
              />
            </View>
          </View>
          <View style={styles.authFormWrapper}>
            {
              this.state.authFormSelected === 'login' ? <LoginAuth/> : <SignupAuth/>
            }
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  introA: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  introB: {
    flex: 5,
  },
  loginHeader: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  loginHeaderSignin: {
    paddingHorizontal: 20,
  },
  loginHeaderSignup: {
    paddingHorizontal: 20
  },
  loginForm: {
    paddingHorizontal: 20
  },
  containerStyle: {
    paddingBottom: 25
  },
  authFormWrapper: {
    backgroundColor: '#ecf0f1',
    padding: 20
  }
})


export default AuthContainer