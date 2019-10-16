import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  CheckBox,
  Switch,
  TextInput,
} from 'react-native';

export default class EmannuelScreen extends Component{

  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View>
        <Text>Emannuel Teixeira</Text>
      </View>
    );
  }
}

EmannuelScreen.navigationOptions = {
  title: 'Emannuel Teixeira',
};
