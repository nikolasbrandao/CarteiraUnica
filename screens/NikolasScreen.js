import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Text,
  ActivityIndicator
} from 'react-native';

import CardDespesa from '../components/card/cardDespesa.component';


export default class NikolasScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      listaDeDespesas : [
        {
          nome: 'Nikolas',
          data: '16/10/2019',
          valor: 100,
        },
        {
          nome: 'Layane',
          data: '17/10/2019',
          valor: 200,
        },
        {
          nome: 'Jean',
          data: '14/10/2019',
          valor: 250,
        },
        {
          nome: 'Emanuel',
          data: '12/10/2019',
          valor: 255.2,
        },
      ]
    };
  }

  renderizaItem(item, index) {
    return (
      <CardDespesa nome={item.nome} dataDaDespesa={item.data} dinheiro={item.valor}>
        <Text>Olá mundo.</Text>
        <ActivityIndicator />
      </CardDespesa>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <FlatList
          data={this.state.listaDeDespesas}
          renderItem={({item, index}) => this.renderizaItem(item, index)}
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
