import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import AuthContainer from '../containers/AuthContainer/AuthContainer'
import MyAccountContainer from '../containers/MyAccountContainer/MyAccountContainer';
import DiscoverContainer from '../containers/DiscoverContainer/DiscoverContainer';
import FlashContainer from '../containers/FlashContainer/FlashContainer';
import Dummy from '../components/Dummy'

const myAccountStack = createStackNavigator({
  MyAccount: MyAccountContainer
},{
 
});

const discoverStack = createStackNavigator({
  Discover: DiscoverContainer
},{
 
});

const flashStack = createStackNavigator({
  Flash: FlashContainer
},{
 
});

const rootStack = createBottomTabNavigator({
  Flash: {
    screen: flashStack
  },
  MyAccount : {
    screen: myAccountStack
  },
  Discover: {
    screen: discoverStack
  }
},{
  headerMode: 'none',
  order: ['MyAccount', 'Discover', 'Flash'],
  tabBarOptions: {
    showLabel: false,
    activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Discover') {
        iconName = `star${focused ? '' : ''}`;
      } else if (routeName === 'MyAccount') {
        iconName = iconName = `user${focused ? '' : ''}`;
      } else if (routeName === 'Flash') {
        iconName = iconName = `gift${focused ? '' : ''}`;
      }


      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  })
})

const AppNavigator = createStackNavigator({
  Authentication: {
    screen: AuthContainer
  },
  App: rootStack
},{
  headerMode: 'none',
  initialRouteName: 'Authentication'
})

export default createAppContainer (AppNavigator)