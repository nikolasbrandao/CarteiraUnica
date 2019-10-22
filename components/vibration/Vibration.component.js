import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, CheckBox, Switch, TextInput, Button, Alert, Vibration, } from 'react-native';

const DURATION = 100;
const PATTERN = [1000, 2000, 3000, 4000];

export default class VibrationComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      estaAtivado: false,
    };
  }

  StartVibrationFunction = () => {
    Vibration.vibrate(DURATION);
  }

  StopVibrationFunction = () => {
    Vibration.cancel();
  }

  render() {
    return (
        <View>
          <View style={styles.c_Button}>
            <Button
              title="Vibrar 0.1 seg"
              onPress={this.StartVibrationFunction}
            />
          </View>
          {/* <View style={styles.c_Button}>
            <Button
              title="Desativar"
              color="#f194ff"
              onPress={this.StopVibrationFunction}
            />
          </View> */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  c_Button: {
    flex: 1,
    padding: 16,
  },
})