import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Layout from '../Components/Layout'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

const styles = StyleSheet.create({
  headerWrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2B385A',
    flex: 1
  },
  map: {
    display: 'flex',
    height: '85%',
    width: '100%'
  }
})

export default class StartScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      markers: [
        { coordinates: { latitude: 49.833984, longitude: 73.181563 }, title: 'Hello 1', desc: 'Hello world!' },
        { coordinates: { latitude: 49.833904, longitude: 73.181463 }, title: 'Hello 2', desc: 'Hello world!' },
        { coordinates: { latitude: 49.833884, longitude: 73.181363 }, title: 'Hello 3', desc: 'Hello world!' },
        { coordinates: { latitude: 49.833784, longitude: 73.181263 }, title: 'Hello 4', desc: 'Hello world!' },
        { coordinates: { latitude: 49.833684, longitude: 73.181163 }, title: 'Hello 5', desc: 'Hello world!' }
      ]
    }
  }

  render (): React.ReactNode {
    return (
      <Layout>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Сегодня в Караганде</Text>
          <Icon.Button
            name='cog'
            color='#212121'
            backgroundColor='transparent'
            onPress={() => Alert.alert('You pressed cog')}
          />
        </View>
        <MapView
          style={styles.map}
          region={{
            latitude: 49.833984,
            longitude: 73.181563,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation
        >
          { this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />
          )) }
        </MapView>
        <DevscreensButton />
      </Layout>
    )
  }
}
