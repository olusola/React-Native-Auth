import React from 'react';
import TextInput from './TextInput'
import { shallow } from 'enzyme';

describe('TextInput', () => {
  let initProps = {}

  describe('when no props is provided', () => {
    it('renders component ', () => {
      const component = shallow(<TextInput/>)
      expect(component.exists()).toBe(true)
    });
  })

  describe('props are provided', () => {
    initProps = {
      ...initProps,
      placeholder: 'username',
      handleChangeText: jest.fn()
    }

    it('render with placeholder', () => {
      const component = shallow(<TextInput { ...initProps }/>)
      expect(component.props().placeholder).toEqual('username')
    })
  })
});