import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
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
  FlatList
} from 'react-native';

import { MonoText } from '../components/StyledText';
import CardDespesa from '../components/card/cardDespesa.component';


export default class NikolasScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      estaAtivado: false,
      text: '',
      listaDeDespesas : [
        {
          nome: 'Nikolas',
          data: '16/10/2019'
        },
        {
          nome: 'Layane',
          data: '17/10/2019'
        },
        {
          nome: 'Jean',
          data: '14/10/2019'
        },
        {
          nome: 'Emanuel',
          data: '12/10/2019'
        },
      ]
    };
  }

  renderCardsDespesa(item, index) {
    const {nome, data} = item;
    return (
      <CardDespesa nome={nome} data={data}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.listaDeDespesas}
          renderItem={( {item, index} ) =>  this.renderCardsDespesa(item, index)}
        />
      </View>
    );
  }
}

NikolasScreen.navigationOptions = {
  // title: 'Nikolas',
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00232f',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  textEstilo1: {
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1 , 
    paddingHorizontal: 16, 
    marginVertical: 16, 
    borderRadius: 4, 
    flex: 1,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
