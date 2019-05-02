import React, { Component } from 'react'
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
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
      type: PropTypes.any,
      onPress: PropTypes.func
    })
  }

  render (): React.ReactNode {
    const { title, icon } = this.props

    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>{title}</Text>
        { icon &&
          <TouchableOpacity onPress={icon.onPress}>
            <Image source={icon.type} />
          </TouchableOpacity>
        }
      </View>
    )
  }
}
