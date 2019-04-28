import { inzoneColors } from '../Themes/Colors'

import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation'

import Drawer from '../Components/Drawer'

import StartScreen from '../Containers/StartScreen'
import TestScreen from '../Containers/TestScreen'
import SameTestScreen from '../Containers/SameTestScreen'

const SettingsNav = createStackNavigator({
  TestScreen: { screen: TestScreen },
  SameTestScreen: { screen: SameTestScreen }
})

const PrimaryNav = createDrawerNavigator({
  StartScreen: {
    screen: StartScreen,
    navigationOptions: {
      drawerLabel: 'Map'
    }
  },
  Test: { screen: SettingsNav }
}, {
  // Settings of drawer navigation
  initialRouteName: 'StartScreen',
  drawerPosition: 'right',
  contentComponent: Drawer,
  contentOptions: {
    activeTintColor: inzoneColors.main
  }
})

export default createAppContainer(PrimaryNav)
