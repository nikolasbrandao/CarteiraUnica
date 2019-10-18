import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class CardMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nomeCategoria: '',
            nomeIcon: '',
        };
    }

    render() {
        return (
            <TouchableOpacity style= {{ width: '47.5%' }}>
                <View style={ estilo.e_card }>
                    <Ionicons name={ this.props.nomeIcon } size={32} color="#FF960B" />
                    <Text style={ estilo.card_title }>{ this.props.nomeCategoria }</Text>
                </View>                
            </TouchableOpacity>
        );
    }
}

const estilo = StyleSheet.create({

    e_card: {
        height: 120,
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: 'white',
    },
    card_title: {
        color: '#00232F',
        fontSize: 16,
        fontFamily: 'Montserrat-Medium'
    },
})