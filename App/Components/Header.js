import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'

import { inzoneColors } from '../Themes/Colors'

const styles = StyleSheet.create({
  headerWrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: inzoneColors.light
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: inzoneColors.title,
    flex: 1
  },
  headerButton: {
    color: inzoneColors.text,
    marginRight: 0
  }
})

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      type: PropTypes.string,
      onPress: PropTypes.func
    })
  }

  render (): React.ReactNode {
    const { title, icon } = this.props

    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>{title}</Text>
        { icon &&
          <Icon.Button
            name={icon.type}
            backgroundColor='transparent'
            onPress={icon.onPress}
            iconStyle={styles.headerButton}
          />
        }
      </View>
    )
  }
}
