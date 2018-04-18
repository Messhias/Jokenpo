import React, { Component } from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';

export default class Icon extends Component {

    render() {
        const {
            choice,
            player
        } = this.props;
        let image = '';

        switch (choice) {
            case 'Pedra':
                image = require('./../img/pedra.png');
            break;

            case 'Papel':
                image = require('./../img/papel.png');
            break;

            case 'Tesoura':
                image = require('./../img/tesoura.png');
            break;

            default:
                image = '';
            break;
        }

        return (
            <View>
                <Text>{player}</Text>
                <Image source={image} />
            </View>
        );
    }
}
