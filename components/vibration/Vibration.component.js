import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, TouchableHighlight, StyleSheet, Text, TouchableOpacity, View, CheckBox, Switch, TextInput, Button, Alert, Vibration, } from 'react-native';

const DURATION = 1000;
const PATTERN = [1000, 2000, 3000, 4000];

export default class VibrationComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      estaAtivado: false,
    };
  }

  StartVibrationFunction = () => {
    Vibration.vibrate(this.props.duracao);
  }

  StopVibrationFunction = () => {
    Vibration.cancel();
  }

  render() {
    return (
      <TouchableOpacity style={{flex: 1}} onPress={() => this.StartVibrationFunction()}>
        <View style={{backgroundColor: this.props.cor}}>
          {this.props.children}
        </View>
      </TouchableOpacity>
    );
  }
}

VibrationComp.defaultProps = {
  cor: 'blue',
  duracao: 1000,
}

const styles = StyleSheet.create({
  c_Button: {
    flex: 1,
    padding: 16,
  },
})