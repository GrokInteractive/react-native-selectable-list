import React, { Component } from 'react'
import { AppRegistry, StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import FormScene from '@components/FormScene'
import SelectableListScene from '@components/SelectableListScene'

export default class ReactNativeSelectableList extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="index"
            component={FormScene}
            navigationBarStyle={styles.navBar}
            titleStyle={styles.title}
            title="Grok React"
            initial
          />
          <Scene
            key="selectableList"
            component={SelectableListScene}
            navigationBarStyle={styles.navBar}
            titleStyle={styles.title}
          />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#132D3D',
  },
  title: {
    color: '#F79E31',
    fontWeight: '900'
  }
})

AppRegistry.registerComponent('ReactNativeSelectableList', () => ReactNativeSelectableList)
