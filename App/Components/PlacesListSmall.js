import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Card from '../Components/Card'
import { inzoneColors } from '../Themes/Colors'

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: 250,
    bottom: 0,
    // backgroundColor: inzoneColors.light,
    padding: 16,
    display: 'flex',
    flexDirection: 'row'
  }
})

export default class PlacesListSmall extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render (): React.ReactNode {
    const { items } = this.props

    return (
      <ScrollView
        style={styles.overlay}
        showsHorizontalScrollIndicator={false}
        horizontal>
        { items.map(({id, cover, title, category, addr}) => (
          <Card
            key={id}
            cover={cover}
            title={title}
            category={category}
            address={addr}
          />
        )) }
      </ScrollView>
    )
  }
}
