import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class CardDespesa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: 'nomeFornecedor',
            data: '00/00/0000',
        };
    }

    render() {
        return (
            <TouchableOpacity>
                <View style={ estilo.e_card }>
                    <Text style={ estilo.card_title }>
                        <Ionicons name="ios-folder" size={16} color="#FF960B" />
                        { this.props.nome }
                    </Text>
                    <Text style={ estilo.card_subTitle }>{ this.props.data }</Text>
                    <Text style={ estilo.card_desc }>R$ 000.000.000,00</Text>
                    <Text style={ estilo.card_subTitle }>11 - Mateus Supermercados - Cid Operária</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const estilo = StyleSheet.create({
    card_title: {
        color: '#00232F',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },
    card_subTitle: {
        color: '#BFC8CB',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },
    card_desc: {
        color: '#606668',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
    },
    e_card: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 8,
        elevation: 3,
    }
})