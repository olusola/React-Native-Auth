import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Button } from 'react-native-elements';
import TextInput from '../../common/TextInput/TextInput';
import { withNavigation } from 'react-navigation';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import { addCurrentUser } from '../../redux/actions/authActions'
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

  componentDidMount() {
    console.log(this.props)
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
       this.props.addCurrentUser(user)
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

const mapsStateToProps = (state) => {
  return {
    allData: state
  }
}

const mapsDispatchToProps = (dispatch) => (
  bindActionCreators({
    addCurrentUser
  }, dispatch)
)
export default connect(mapsStateToProps, mapsDispatchToProps)(withNavigation(LoginAuth))
export { LoginAuth }