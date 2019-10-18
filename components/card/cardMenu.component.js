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
            colorIcon: '',
        };
    }

    render() {
        return (
            <TouchableOpacity style = {{ width: '47.5%' }}>
                <View style={ estilo.e_card }>
                    <View style = {{ backgroundColor: '#F8F8F8', borderRadius: 100, width: 46, height: 46, alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name = { this.props.nomeIcon } size = {26} color = { this.props.colorIcon } />
                    </View>
                    <Text style = { estilo.card_title }>{ this.props.nomeCategoria }</Text>
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
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: 2,
        backgroundColor: 'white',
    },
    card_title: {
        color: '#606668',
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },
})