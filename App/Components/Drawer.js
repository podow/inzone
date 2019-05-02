import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native'
import {
  DrawerItems,
  SafeAreaView
} from 'react-navigation'
import { images } from '../Themes/Images'

const styles = StyleSheet.create({
  drawerHeader: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  drawerFooter: {
    flex: 1,
    padding: 16
  }
})

const Drawer = props => (
  <SafeAreaView>
    <ScrollView>
      <View style={styles.drawerHeader}>
        <Image width='100%' source={images.logo} />
      </View>
      <DrawerItems {...props} />
      <View style={styles.drawerFooter}>
        <Text>Custom Footer</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
)

export default Drawer
