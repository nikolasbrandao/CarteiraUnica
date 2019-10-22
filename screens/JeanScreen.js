import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {PanResponder, Animated, Easing, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, CheckBox, Switch, TextInput, Button, Alert, Vibration, } from 'react-native';
import GestureComp from '../components/Gesture/Gesture.component';

export default class JeanScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <GestureComp></GestureComp>
      </View>
    );
  }
}

JeanScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})