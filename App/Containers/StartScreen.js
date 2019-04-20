import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Layout from '../Components/Layout'
import Card from '../Components/Card'

import markers from '../Fixtures/markers'

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
    height: '100%',
    width: '100%'
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
  }
})

export default class StartScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      markers
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
