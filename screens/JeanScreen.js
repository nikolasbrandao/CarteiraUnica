import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {PanResponder,
        SafeAreaView,
        ScrollView, 
        StyleSheet, 
        ActivityIndicator,
        Text, 
        TouchableOpacity, 
        View, 
        Vibration, } from 'react-native';
import GestureComp from '../components/Gesture/Gesture.component';
import VibrationComp from '../components/vibration/Vibration.component';

export default class JeanScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <VibrationComp cor={'red'} duracao={3000}>
          <View>
            <Text>Hello World</Text>
            <ActivityIndicator/>
          </View>
        </VibrationComp>

        <VibrationComp cor={'green'} duracao={5000}>
          <View>
            <Text>Hello World</Text>
            <ActivityIndicator/>
            <Text>Hello World</Text>
          </View>
        </VibrationComp>

        <VibrationComp>
          <View>
            <Text>Hello World</Text>
          </View>
        </VibrationComp>
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