import { inzoneColors } from '../Themes/Colors'

import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import Drawer from '../Components/Drawer'

import StartScreen from '../Containers/StartScreen'
import TestScreen from '../Containers/TestScreen'

// Manifest of possible screens
const PrimaryNav = createDrawerNavigator({
  StartScreen: {
    screen: StartScreen,
    navigationOptions: {
      drawerLabel: 'Map'
    }
  },
  TestScreen: {
    screen: TestScreen,
    navigationOptions: {
      drawerLabel: 'Test'
    }
  }
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
