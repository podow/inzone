import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  card: {
    height: 125,
    width: 200,
    marginRight: 16
  },
  cover: {
    backgroundColor: '#C7CBCD',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    marginBottom: 8
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2B385A',
    marginBottom: 4
  },
  text: {
    fontSize: 14,
    marginBottom: 4
  }
})

export default class Card extends Component {
  static propTypes = {
    cover: PropTypes.object,
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    address: PropTypes.string
  }

  render (): React.ReactNode {
    const { cover, title, category, address } = this.props

    return (
      <View style={styles.card}>
        { cover
          ? <Image source={cover} style={styles.cover} />
          : <View style={styles.cover} />
        }
        <Text style={styles.title}>{title}</Text>
        { category && <Text style={styles.text}>{category}</Text> }
        { address && <Text style={styles.text}>{address}</Text> }
      </View>
    )
  }
}
