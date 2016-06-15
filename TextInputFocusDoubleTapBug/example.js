import React from "react";
import {View, Text, TextInput, TouchableHighlight, ScrollView} from "react-native";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example1Count: 0,
      example2Count: 0
    }
  }

  example1() {
    this.setState({example1Count: this.state.example1Count + 1});
  }

  example2() {
    this.setState({example2Count: this.state.example2Count + 1});
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: 'white'}}>

        <Text>Example 1:</Text>
        <Text>This works as expected:</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
          <TextInput style={{height: 40, width: 100, borderWidth: 1, marginRight: 8, padding: 4}} placeholder="focus me"/>

          <TouchableHighlight onPress={this.example1.bind(this)} style={{borderWidth: 1, backgroundColor: 'black', marginRight: 8}}>
            <Text style={{color: 'white'}}>Press me</Text>
          </TouchableHighlight>

          <Text>Count: {this.state.example1Count}</Text>
        </View>

        <Text>Example 2 (inside a scroll view):</Text>
        <Text>This works as above for android, but IOS requires 2 taps:</Text>
        <ScrollView>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextInput style={{height: 40, width: 100, borderWidth: 1, marginRight: 8, padding: 4}} placeholder="focus me"/>

            <TouchableHighlight onPress={this.example2.bind(this)} style={{borderWidth: 1, backgroundColor: 'black', marginRight: 8}}>
              <Text style={{color: 'white'}}>Press me</Text>
            </TouchableHighlight>

            <Text>Count: {this.state.example2Count}</Text>
          </View>
        </ScrollView>

      </View>
    )
  }
}