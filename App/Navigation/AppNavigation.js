import React from 'react'
import { inzoneColors } from '../Themes/Colors'

import {
  SafeAreaView,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation'

import Header from '../Components/Header'
import Drawer from '../Components/Drawer'

import { icons } from '../Themes/Images'

import StartScreen from '../Containers/StartScreen'
import TestScreen from '../Containers/TestScreen'
import SameTestScreen from '../Containers/SameTestScreen'

const SettingsNav = createStackNavigator({
  TestScreen: {
    screen: TestScreen,
    navigationOptions: {
      header: ({ navigation }) => (
        <SafeAreaView>
          <Header
            title='Asd'
            icon={{
              type: icons.equalizer,
              onPress: () => navigation.goBack()
            }}
          />
        </SafeAreaView>
      )
    }
  },
  SameTestScreen: {
    screen: SameTestScreen,
    // navigationOptions: {
    //   header: ({ navigation }) => (
    //     <SafeAreaView>
    //       <Header
    //         title='Asd'
    //         icon={{
    //           type: icons.equalizer,
    //           onPress: () => navigation.openDrawer()
    //         }}
    //       />
    //     </SafeAreaView>
    //   )
    // }
  }
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
  drawerType: 'back',
  contentComponent: Drawer,
  contentOptions: {
    activeTintColor: inzoneColors.main
  }
})

export default createAppContainer(PrimaryNav)
