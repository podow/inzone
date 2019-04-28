import React, { Component } from 'react'
import { Text, Button } from 'react-native'

import Layout from '../Components/Layout'
import Header from '../Components/Header'

export default class TestScreen extends Component {
  render (): React.ReactNode {
    const { navigation } = this.props

    return (
      <Layout>
        <Header title='Test' />
        <Text>Test!!!</Text>
        <Button title='Switch to another test' onPress={() => navigation.navigate('SameTestScreen')} />
      </Layout>
    )
  }
}
