import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
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
  Button,
} from 'react-native';
import CardDespesa from '../components/card/cardDespesa.component';
import CardMenu from '../components/card/cardMenu.component';

export default class EmannuelScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#F8F8F8', padding: 16 }}>
        
        <CardDespesa nome ='Jean' data= '22/11/2019'/>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <CardMenu nomeIcon = 'ios-folder-open' nomeCategoria= 'Meus arquivos'/>
          <CardMenu nomeIcon = 'ios-image' nomeCategoria= 'Imagens'/>
          <CardMenu nomeIcon = 'ios-musical-notes' nomeCategoria= 'Músicas'/>
          <CardMenu nomeIcon = 'ios-settings' nomeCategoria= 'Configurações'/>
        </View>

      </ScrollView>
    );
  }
}

EmannuelScreen.navigationOptions = {
  title: 'Minha Tela',
  //header: null,  
};
