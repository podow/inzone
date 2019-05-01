import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import PropTypes from 'prop-types'

export default class Layout extends Component {
  static propTypes = {
    barStyle: PropTypes.string
  }

  render (): React.ReactNode {
    const { children, barStyle } = this.props
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={barStyle || 'default'} />
        { children }
      </SafeAreaView>
    )
  }
}
