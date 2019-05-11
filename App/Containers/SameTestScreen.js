import React, { Component } from 'react'
import { Text } from 'react-native'

import Layout from '../Components/Layout'
import SwipeUpDown from '../Components/SwipeUpDown'
import PlacesListSmall from '../Components/PlacesListSmall'

import markers from '../Fixtures/markers'

export default class SameTestScreen extends Component {
  render (): React.ReactNode {
    return (
      <Layout>
        <SwipeUpDown
          itemMini={<PlacesListSmall items={markers} />}
          itemFull={<Text>Full</Text>}
        />
      </Layout>
    )
  }
}
