import React, { Component } from 'react'
import { Alert } from 'react-native'
import MapView, {
  PROVIDER_GOOGLE,
  Marker
} from 'react-native-maps'

import { icons } from '../Themes/Images'

import Layout from '../Components/Layout'
import Header from '../Components/Header'
import PlacesListSmall from '../Components/PlacesListSmall'

import markers from '../Fixtures/markers'
import I18n from 'react-native-i18n'

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
          title={`Сегодня в Караганде ${I18n.locale}`}
          icon={{
            type: icons.equalizer,
            onPress: () => navigation.openDrawer()
          }}
        />
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
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
        <PlacesListSmall
          items={this.state.markers}
        />
      </Layout>
    )
  }
}
