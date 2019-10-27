import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {SafeAreaView,
        StyleSheet, 
        ActivityIndicator,
        Text, 
        View, 
        FlatList, } from 'react-native';
import CardTemporalComp from '../components/card/cardTemporal.component';

export default class JeanScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      medicoes: [
        {tipo: require('../assets/png/003-cloud.png'), temperatura_maxima: 35, temperatura_minima: 29, dia_semana: 'Domingo'},
        {tipo: require('../assets/png/049-rain.png'), temperatura_maxima: 27, temperatura_minima: 25, dia_semana: 'Segunda'},
        {tipo: require('../assets/png/004-storm.png'), temperatura_maxima: 22, temperatura_minima: 18, dia_semana: 'Terça'},
        {tipo: require('../assets/png/042-rain.png'), temperatura_maxima: 33, temperatura_minima: 27, dia_semana: 'Quarta'},
        {tipo: require('../assets/png/015-snow.png'), temperatura_maxima: 4, temperatura_minima: 1, dia_semana: 'Quinta'},
        {tipo: require('../assets/png/025-cloudy.png'), temperatura_maxima: 27, temperatura_minima: 22, dia_semana: 'Sexta'},
        {tipo: require('../assets/png/022-sun.png'), temperatura_maxima: 40, temperatura_minima: 36, dia_semana: 'Sábado'},
      ],
      hora: '',
    };
  }
  

  renderizarItem (item, index) {
    return(
      <View style={styles.container}>
          <CardTemporalComp 
          dia = {item.dia_semana}
          icone = {item.tipo}
          tempMax = {item.temperatura_maxima}
          tempMin = {item.temperatura_minima}/>
      </View>
        )
  }

  componentDidMount(){
    const that = this;

    const hour = new Date().getHours();
    const min = new Date().getMinutes();

    that.setState({
      hora: hour + ':' + min,
    });
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignSelf: 'center', backgroundColor: '#D1F4F6',}}>
        <SafeAreaView/>
        <View style={styles.header}>
          <Text style={styles.texto_H1}>São Luis - MA</Text>
          <Text style={styles.texto_H2}>{this.state.hora}</Text>
        </View>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator={false}
          data = {this.state.medicoes}
          keyExtractor={(item, index) => 'key'+index }
          renderItem = {({item, index}) => this.renderizarItem(item, index)}
        />
      </View>
    );
  }
}





JeanScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  texto_H1:{
    fontSize: 18,
    textAlign: 'center',
    color: '#84abc1',
    fontFamily: 'Montserrat-Regular',
  },
  texto_H2:{
      fontSize: 48,
      textAlign: 'center',
      color: '#4d87a1',
      fontFamily: 'Montserrat-SemiBold',
  },
})