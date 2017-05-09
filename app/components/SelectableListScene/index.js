import React, { Component } from 'react'
import { ListView, Text, TouchableOpacity, StyleSheet, View } from 'react-native'

export default class SelectableListScene extends Component {
  static defaultProps = {
    list: []
  }

  static propTypes = {
    list: React.PropTypes.array.isRequired,
    onPressAction: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2})
    const { list } = props
    this.state = {
      list: ds.cloneWithRows(list)
    }
  }

  renderRow = (rowData) => {
    const { onPressAction } = this.props
    return (
      <TouchableOpacity onPress={() => onPressAction(rowData)}>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>{rowData}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { list } = this.state
    return (
      <ListView
        style={styles.container}
        dataSource={list}
        renderRow={this.renderRow}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#4488A7',
  },
  text: {
    color: '#132d3d',
  }
})