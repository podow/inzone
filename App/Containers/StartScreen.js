import React, { Component } from 'react'
import { View, Text, Alert, StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Layout from '../Components/Layout'
import Card from '../Components/Card'

import markers from '../Fixtures/markers'

const { width: fullWidth, height: fullHeight } = Dimensions.get('window')

const styles = StyleSheet.create({
  headerWrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2B385A',
    flex: 1
  },
  map: {
    display: 'flex',
    height: fullHeight,
    width: fullWidth
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: 300,
    bottom: 0,
    backgroundColor: '#fff',
    padding: 16,
    display: 'flex',
    flexDirection: 'row'
  },
  sidebar: {
    position: 'absolute',
    height: fullHeight,
    width: fullWidth - 100,
    backgroundColor: '#f26',
    color: '#fff',
    opacity: 0.5,
    right: fullWidth,
    padding: 32
  }
})

export default class StartScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      markers,
      userPosition: {
        coords: {
          accuracy: 5,
          altitude: 0,
          altitudeAccuracy: -1,
          heading: -1,
          latitude: 49.833984,
          longitude: 73.181563,
          speed: -1
        },
        timestamp: 1555821526272.3499
      }
    }
  }

  componentWillMount (): void {
    navigator.geolocation.getCurrentPosition(
      async position => {
        await this.setState({ userPosition: position })
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  render (): React.ReactNode {
    const { userPosition } = this.state

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
            latitude: userPosition.coords.latitude,
            longitude: userPosition.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation
        >
          { this.state.markers && this.state.markers.map(({id, title, coordinates}) => (
            <Marker
              key={id}
              title={title}
              coordinate={coordinates}
            />
          )) }
        </MapView>
        <View style={styles.overlay} >
          { this.state.markers.map(({id, cover, title, category, addr}) => (
            <Card
              key={id}
              cover={cover}
              title={title}
              category={category}
              address={addr}
            />
            )) }
        </View>
        <View style={styles.sidebar}>
          <Text>User</Text>
        </View>
      </Layout>
    )
  }
}
