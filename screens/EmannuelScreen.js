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
      <ScrollView style={{ flex: 1, backgroundColor: '#F8F8F8', marginTop: 8}}>
        <CardDespesa nome ='Jean' data= '22/11/2019'/>
        <CardMenu/>
      </ScrollView>
    );
  }
}

EmannuelScreen.navigationOptions = {
  title: 'Minha Tela',
  //header: null,  
};
