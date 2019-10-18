import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, CheckBox, Switch, TextInput, Button, Alert, Vibration, } from 'react-native';


const DURATION = 10000;
const PATTERN = [1000, 2000, 3000, 4000];

export default class JeanScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      estaAtivado: false,
      text: '',
    };
  }

  modificaEstadoToggle(value) {
    this.setState({ estaAtivado: value });
  }

  modificaEstadoInput(value) {
    this.setState({ text: value });
  }


  StartVibrationFunction = () => {
    Vibration.vibrate(DURATION);
  }

  StopVibrationFunction = () => {
    Vibration.cancel();
  }

  render() {
    return (
      <ScrollView>
        <Text>Digite os elementos considerados instruendos: </Text>
        <View>
          <View>
            {Platform.OS === 'ios' ? <Switch onValueChange={(value) => this.modificaEstadoToggle(value)} value={this.state.estaAtivado} /> : <CheckBox onValueChange={(value) => this.modificaEstadoToggle(value)} value={this.state.estaAtivado} />}
          </View>
          <TextInput
            onChangeText={(value) => this.modificaEstadoInput({ value })}
            style={styles.textEstilo1}
            placeholder='Digite aqui'
            value={this.state.text}
          />
        </View>
        <View>
          <View style={styles.c_Button}>
            <Button
              title="Ativar"
              onPress={this.StartVibrationFunction}
            />
          </View>
          <View style={styles.c_Button}>
            <Button
              title="Desativar"
              color="#f194ff"
              onPress={this.StopVibrationFunction}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

JeanScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  estiloTexto: {
    color: 'blue',
    paddingLeft: 16,
    fontSize: 22,
  },
  c_Button: {
    flex: 1,
    padding: 16,
  },
  textEstilo1: {
    color: 'red',
  },
})