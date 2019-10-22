import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {PanResponder, Animated, Easing, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, CheckBox, Switch, TextInput, Button, Alert, Vibration, } from 'react-native';

export default class JeanScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value
        });
        this.state.pan.setValue({x: 0, y: 0})
        Animated.spring(this.state.scale,{
          toValue: 1.3,
          friction: 3
        }).start();
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.pan.x, dy: this.state.pan.y}
      ]),
      onPanResponderRelease: (evt, gestureState) => {
        this.state.pan.flattenOffset();
        Animated.spring(this.state.scale,{
          toValue: 1,
          friction: 3,
        }).start();
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.animationView,
        {transform: [
          {translateX: this.state.pan.x},
          {translateY: this.state.pan.y},
          {scale: this.state.scale},
          ]}]} {...this._panResponder.panHandlers}>
          <Image></Image>
        </Animated.View>
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
  animationView: {
    height: 100,
    width: 100,
    backgroundColor: 'skyblue',
    borderRadius: 50,
    position: 'absolute'
  },
})