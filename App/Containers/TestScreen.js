import React, { Component } from 'react'
import { Text } from 'react-native'

import Layout from '../Components/Layout'
import Header from '../Components/Header'

export default class TestScreen extends Component {
  render (): React.ReactNode {
    const { navigation } = this.props

    return (
      <Layout>
        <Header
          title='Test'
          icon={{
            type: 'cog',
            onPress: () => navigation.openDrawer()
          }}
        />
        <Text>Test!!!</Text>
      </Layout>
    )
  }
}
