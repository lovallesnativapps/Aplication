import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const buttonsName = [
  'c', '+/-', '%', 'D', '7',
  '8', '9', '/', '4', '5', '6',
  'X', '1', '2', '3', '-', '0',
  ',', '=', '+',
];

export default class App extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false,
    displayFormula: 0,
  };

  clearValues = () => {
    this.setState({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false,
      displayFormula: 0,
    })
  }
  _onInputClick(digit) {
    const {displayValue, operator} = this.state;
    if (this.state.waitingForOperand) {
      this.setState({
         displayValue: `${digit}`,
         waitingForOperand: false
      })
     }
    this.setState({
      displayValue: displayValue === '0' ? `${digit}` : displayValue + digit,
      displayFormula: `${displayValue} ${operator} ${digit}`,
    })
   }

   _onOperationClick(operation) {
    console.log('hola');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calculatorHeader}>
          <Text style={styles.formula}>hola</Text>
          <Text style={styles.result}>Result</Text>
        </View>
        <View style={styles.calculatorBody}>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={this.clearAll}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.buttonText, styles.buttonRed]}>del</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={this._onInputClick(7)}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onInputClick(8)}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onInputClick(9)}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onOperationClick('/')}>
              <Text style={[styles.buttonText, styles.buttonRed]}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={this._onInputClick(4)}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onInputClick(5)}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onInputClick(6)}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onOperationClick('*')}>
              <Text style={[styles.buttonText, styles.buttonRed]}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={this._onInputClick(1)}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onInputClick(2)}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onInputClick(3)}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onOperationClick('-')}>
              <Text style={[styles.buttonText, styles.buttonRed]}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={this._onInputClick(0)}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onOperationClick('=')}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onOperationClick('+')}>
              <Text style={[styles.buttonText, styles.buttonRed]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculatorHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculatorBody: {
    flex: 2,
    backgroundColor: '#000',
  },
  result: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  formula: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    opacity: 0.5,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    width: 64,
    height: 64,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRed: {
    flex: 1,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    paddingVertical: 23,
    paddingHorizontal: 24,
    fontSize: 30,
  },
});
