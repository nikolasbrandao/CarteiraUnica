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
                <View style={estilo.e_card}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight: 8 }}>
                            <Ionicons name="ios-paper" size={16} color="#FFE44D" />
                        </View>
                        <Text style={estilo.card_title}>{this.props.nome}</Text>
                    </View>
                    <Text style={estilo.card_subTitle}>{this.props.dataDaDespesa}</Text>
                    <Text style={estilo.card_desc}>R$ {this.props.dinheiro}</Text>
                    {this.props.children}
                </View>
            </TouchableOpacity>
        );
    }
}

CardDespesa.defaultProps = {
    dinheiro: 0.00,
};

const estilo = StyleSheet.create({
    card_title: {
        color: '#606668',
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
        padding: 16,
        borderRadius: 8,
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: 2,
        marginBottom: 16
    }
})