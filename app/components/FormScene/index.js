import React, { Component } from 'react'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native'

import { Actions } from 'react-native-router-flux'

export default class FormScene extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      selectableList: ['React is awesome', 'React is easy', 'React is the best'],
      selectedItem: props.selectedItem || null,
    }
  }

  render() {
    const { name, selectableList, selectedItem } = this.state
    return (
      <ScrollView style={{ marginTop: 64, paddingHorizontal: 10 }}>
        <StatusBar barStyle="light-content" />
        <View style={styles.formField}>
          <TextInput style={styles.inputField} placeholder="Your name" value={name} onChangeText={(text) => this.setState({name: text})}/>
        </View>
        <TouchableOpacity
          onPress={() => Actions.selectableList({
            list: selectableList,
            onPressAction: (selectedItem) => { this.setState({ selectedItem }); Actions.pop() },
            title: "How do you feel about react?"
          })}
        >
          <View style={[styles.formField, { flexDirection: 'row', justifyContent: 'space-between' }]} >
            <Text style={{ color: selectedItem ? 'black' : 'rgb(193, 193, 200)' , fontSize: 15,}}>{ selectedItem || 'How do you feel about react?' }</Text>
            <Text style={{ color: 'black', fontSize: 15,}}>></Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  formField: {
    alignItems: 'center',
    minHeight: 40,
    borderBottomWidth: 0.5
  },
  inputField: {
    height: 40,
  }
})