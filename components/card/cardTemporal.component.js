import React, { Component } from 'react';
import {SafeAreaView,
        StyleSheet, 
        ActivityIndicator,
        Text, 
        View,
        Image,
        Animated,
        Vibration,
        TouchableWithoutFeedback,
        FlatList, } from 'react-native';

export default class CardTemporalComp extends Component{

    state = {
        animatedPress: new Animated.Value(1),
    }

    StartVibrationFunction = () => {
        Vibration.vibrate(this.props.duracao);
    }

    animateIn(){
        Animated.spring(this.state.animatedPress,{
            toValue: 0.8,
            duration: 200,
        }).start()
    }

    animateOut(){
        Animated.spring(this.state.animatedPress,{
            toValue: 1,
            duration: 200,
        }).start()
    }

    render(){
        return(
            <TouchableWithoutFeedback
                onPressIn ={() => {this.animateIn(), this.StartVibrationFunction()}}
                onPressOut = {() => this.animateOut()}
            >
                <Animated.View style={[styles.container, {transform:[{ scale: this.state.animatedPress}]} ]}>
                    <Text style={styles.texto_H1}>{this.props.dia}</Text>
                    <View style={styles.container_icon}>
                        <Image style={{width: 150, height: 150}} source={this.props.icone}/>
                    </View>
                    <View style={styles.container_temp}>
                        <View style={styles.container_tempOrg}>
                            <Text style={styles.texto_H2}>{this.props.tempMin}°</Text>
                            <Text style={styles.texto_H3}>Min</Text>
                        </View>
                        <View style={styles.container_tempOrg}>
                            <Text style={styles.texto_H2}>{this.props.tempMax}°</Text>
                            <Text style={styles.texto_H3}>Max</Text>
                        </View>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

CardTemporalComp.defaultProps = {
    dia: 'Domingo',
    icone: require('../../assets/png/022-sun.png'),
    tempMax: 32,
    tempMin: 21,
    duracao: 50,
}

const styles = StyleSheet.create({
    container: {
      width: 280,
      height: '70%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 16,
      justifyContent: 'space-around',
    },
    container_icon:{
        alignItems:'center',
    },
    container_temp:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container_tempOrg:{
        flexDirection: 'column',
        alignItems: 'center'
    },
    texto_H1:{
        fontSize: 28,
        textAlign: 'center',
        color: '#EDC79A',
        fontFamily: 'Montserrat-SemiBold',
    },
    texto_H2:{
        fontSize: 48,
        textAlign: 'center',
        color: '#7E8C9E',
        fontFamily: 'Montserrat-SemiBold',
    },
    texto_H3:{
        fontSize: 18,
        textAlign: 'center',
        color: '#B4CAD4',
        fontFamily: 'Montserrat-Regular',
        textTransform: 'uppercase',
    }
  })