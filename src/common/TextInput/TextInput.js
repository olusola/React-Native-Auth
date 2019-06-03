import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import { Input } from 'react-native-elements';

const TextInput = ({
  placeholder = '',
  icon,
  handleChangeText
}) => {
  return (
    <Input
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      leftIcon={{ type: 'antdesign', name: icon }}
      leftIconContainerStyle={styles.leftIconContainerStyle}
      inputStyle={styles.inputStyle}
      onChangeText={handleChangeText}
    />
  )
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  leftIcon: PropTypes.string,
  handleChangeText: PropTypes.func
}

const styles = StyleSheet.create({
  leftIconContainerStyle: {
    paddingRight: 10
  },
  containerStyle: {
    paddingBottom: 25
  }
})

export default TextInput