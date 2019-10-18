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
        };
    }

    render() {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 16 }}>
                <View style={ estilo.e_card }>
                    <Ionicons name="md-briefcase" size={32} color="#FF960B" />
                    <Text style={ estilo.card_title }>Maleta</Text>
                </View>
                <View style={ estilo.e_card }>
                    <Ionicons name="md-briefcase" size={32} color="#FF960B" />
                    <Text style={ estilo.card_title }>Maleta</Text>
                </View>
                <View style={ estilo.e_card }>
                    <Ionicons name="md-briefcase" size={32} color="#FF960B" />
                    <Text style={ estilo.card_title }>Maleta</Text>
                </View>
                
            </TouchableOpacity>
        );
    }
}

const estilo = StyleSheet.create({

    e_card: {
        backgroundColor: 'white',
        height: 120,
        padding: 16,
        elevation: 3,
        borderRadius: 8,
    },
    card_title: {
        color: '#00232F',
        fontSize: 16,
        fontFamily: 'Montserrat-Medium'
    },
})