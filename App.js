/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Top from './Components/Top';
import Icon from './Components/Icon';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
      super(props);

      this.state = {
          userChoice: '',
          computerChoice: '',
          winner: ''
      };
  }

  computerChoice() {
      const randomNumber = Math.floor(Math.random() * 3);
      let computerChoice = '';

      switch (randomNumber) {
          case 0: computerChoice = 'Pedra'; break;
          case 1: computerChoice = 'Papel'; break;
          case 2: computerChoice = 'Tesoura'; break;
          default: computerChoice = 'Desisto'; break;
      }

      this.setState({ computerChoice });
  }

  gameWinner() {
      const {
          userChoice,
          computerChoice
      } = this.state;
      let winner;

      switch (computerChoice) {
          case 'Pedra':
            switch (userChoice) {
                case 'Pedra': winner = 'Empate'; break;
                case 'Papel': winner = 'Você ganhou'; break;
                case 'Tesoura': winner = 'Você perdeu'; break;
                default: winner = 'Empate'; break;
            }
          break;

          case 'Papel':
            switch (userChoice) {
                case 'Papel': winner = 'Empate'; break;
                case 'Tesoura': winner = 'Você ganhou'; break;
                case 'Pedra': winner = 'Você perdeu'; break;
                default: winner = 'Empate'; break;
            }
          break;

          case 'Tesoura':
            switch (userChoice) {
                case 'Tesoura': winner = 'Empate'; break;
                case 'Pedra': winner = 'Você ganhou'; break;
                case 'Papel': winner = 'Você perdeu'; break;
                default: winner = 'Empate'; break;
            }
          break;
          default: this.setState({ winner: 'Ocorreu um erro' }); break;
      }

      this.setState({ winner });
  }

  makeMyChoice(userChoice) {
      this.setState({ userChoice });
      this.computerChoice();
      this.gameWinner();
  }

  render() {
    const {
        userChoice,
        computerChoice,
        winner
    } = this.state;
    return (
      <View>

           <Top></Top>

           <View style={styles.PanelActions}>

             <View style={styles.btnChoice}>
               <Button title="Pedra" onPress={ () => { this.makeMyChoice('Pedra')}} />
             </View>

             <View style={styles.btnChoice}>
               <Button title="Papel" onPress={ () => { this.makeMyChoice('Papel')}} />
             </View>

             <View style={styles.btnChoice}>
               <Button title="Tesoura" onPress={ () => { this.makeMyChoice('Tesoura')}} />
             </View>

           </View>

           <View
              style={styles.stage}>
              <Text style={styles.winner}>{winner}</Text>


             <Icon
                style={styles.stage}
                player={'Escolha do computador: ' + computerChoice}
                choice={computerChoice}
              ></Icon>

              <Icon
                  style={styles.stage}
                  player={'Sua escolha: ' + userChoice}
                  choice={userChoice}
               ></Icon>

           </View>

       </View>
    );
  }
}

const styles = StyleSheet.create({
  btnChoice: {
    width: 90
  },
  PanelActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  stage: {
    alignItems: 'center',
    marginTop: 10
  },
  winner: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});
