import { createStackNavigator, createAppContainer } from 'react-navigation'
import StartScreen from '../Containers/StartScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  StartScreen: { screen: StartScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'StartScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
