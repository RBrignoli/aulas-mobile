import React, {useState} from "react";
import {View, StyleSheet} from 'react-native'
import Botao from "../../components/Botao";
import {soma, diminui, multiplica, divide} from '../../scripts/function'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    buttonRow: {
      width: '20%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center'
    },
    display: {
        width: '80%',
        padding: 20,
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
  });


const Calculadora = function () {
    const [number1, onChangeNumber1] = useState('');
    const [number2, onChangeNumber2] = useState('');
    const [resultado, setResultado] = useState('');
    const [operation, setOperation] = useState('');
    const [isSecondNumber, setIsSecondNumber] = useState(false);


    const handleCalculate = (op) => {
        switch (op) {
            case '+':
                soma(number1, number2, setResultado, onChangeNumber1, onChangeNumber2);
                break;
            case '-':
                diminui(number1, number2, setResultado, onChangeNumber1, onChangeNumber2);
                break;
            case '*':
                multiplica(number1, number2, setResultado, onChangeNumber1, onChangeNumber2);
                break;
            case '/':
                divide(number1, number2, setResultado, onChangeNumber1, onChangeNumber2);
                break;
            default:
                break;
        }
    };
    const handlePress = (value) => {
        if (['+', '-', '*', '/', '='].includes(value)) {
            if (number1 !== '' && !isSecondNumber) {
                setOperation(value);
                setIsSecondNumber(true);
            } else if (number1 !== '' && number2 !== '') {
                handleCalculate(operation);
                setOperation('');
            }
        } else {
            if (isSecondNumber) {
                onChangeNumber2(prev => prev + value);
            } else {
                onChangeNumber1(prev => prev + value);
            }
        }
    };
    const handleReset = () => {
        onChangeNumber1('')
        onChangeNumber2('')
        setResultado('')
        setOperation('')
        setIsSecondNumber(false)
    }

    return (
        <View style={styles.container}>


            <View style={styles.display}>
              {resultado?resultado:(isSecondNumber?number2:number1)}
            </View>
            
            
            
            <View style={styles.buttonRow}>
              <Botao onPress={() => handlePress('7')} title="7" type="number" />
              <Botao onPress={() => handlePress('8')} title="8" type="number" />
              <Botao onPress={() => handlePress('9')} title="9" type="number" />
              <Botao onPress={() => handlePress('/')} title="/" type="operation" />
            </View>
            <View style={styles.buttonRow}>
              <Botao onPress={() => handlePress('4')} title="4" type="number" />
              <Botao onPress={() => handlePress('5')} title="5" type="number" />
              <Botao onPress={() => handlePress('6')} title="6" type="number" />
              <Botao onPress={() => handlePress('*')} title="*" type="operation" />
            </View>
            <View style={styles.buttonRow}>
              <Botao onPress={() => handlePress('1')} title="1" type="number" />
              <Botao onPress={() => handlePress('2')} title="2" type="number" />
              <Botao onPress={() => handlePress('3')} title="3" type="number" />
              <Botao onPress={() => handlePress('-')} title="-" type="operation" />
            </View>
            <View style={styles.buttonRow}>
              <Botao onPress={() => handlePress('=')} title="=" type="number" />
              <Botao onPress={() => handlePress('0')} title="0" type="number" />
              <Botao onPress={() => handlePress(',')} title="," type="number" />
              <Botao onPress={() => handlePress('+')} title="+" type="operation" />
            </View>
            <View style={styles.buttonRow}>
              <Botao onPress={() => handleReset()} title="res" type="number" />
            </View> 
          </View>
        );

    };
    
    export default Calculadora;


    