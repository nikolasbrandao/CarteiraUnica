import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {PanResponder, Animated, Easing, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, CheckBox, Switch, TextInput, Button, Alert, Vibration, } from 'react-native';

export default class GestureComp extends Component {

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
        <Animated.View style={[styles.animationView,styles.animationImageCont,
          {transform: [
            {translateX: this.state.pan.x},
            {translateY: this.state.pan.y},
            {scale: this.state.scale},
            ]}]} {...this._panResponder.panHandlers}>

          <Image style={styles.animationImage} source = {{uri:'https://images.unsplash.com/photo-1544442540-68589bbc2b5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}}/>        
       
        </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  animationView: {
    height: 100,
    width: 100,
    backgroundColor: 'skyblue',
    borderRadius: 50,
    position: 'absolute'
  },
  animationImageCont:{
    width:200,
    height: 200,
    borderRadius: 50*2,
    borderWidth: 4,
    overflow: 'hidden',
    borderColor: 'skyblue',
  },
  animationImage: {
    flex: 1,
    height: null,
    width: null,
  }
})