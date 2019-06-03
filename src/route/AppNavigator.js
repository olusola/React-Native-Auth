import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import AuthContainer from '../containers/AuthContainer/AuthContainer'
import Dummy from '../components/Dummy'

const rootStack = createBottomTabNavigator({
  Flash: {
    screen: Dummy,
  },
  Profile : {
    screen: Dummy,
  },
  Discover: {
    screen: Dummy,
  }
},{
  headerMode: 'none',
  order: ['Profile', 'Discover', 'Flash']
})

const AppNavigator = createStackNavigator({
  Authentication: {
    screen: AuthContainer
  },
  App: rootStack
},{
  headerMode: 'none',
  initialRouteName: 'Authentication',
})

export default createAppContainer (AppNavigator)