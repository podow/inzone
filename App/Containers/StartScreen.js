import React, { Component } from 'react'
import { View, Alert, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import { inzoneColors } from '../Themes/Colors'

import Layout from '../Components/Layout'
import Header from '../Components/Header'
import Card from '../Components/Card'

import markers from '../Fixtures/markers'

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  overlay: {
    position: 'absolute',
    height: 250,
    bottom: 0,
    backgroundColor: inzoneColors.light,
    padding: 16,
    display: 'flex',
    flexDirection: 'row'
  }
})

export default class StartScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
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
      },
      markers
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
    const { navigation } = this.props
    const { userPosition } = this.state

    return (
      <Layout>
        <Header
          title='Сегодня в Караганде'
          icon={{
            type: 'cog',
            onPress: () => navigation.openDrawer()
          }}
        />
        <MapView
          provider={PROVIDER_GOOGLE}
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
      </Layout>
    )
  }
}
