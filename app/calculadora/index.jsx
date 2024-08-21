import React, {useState} from "react";
import {Text, View, TextInput, Button, StyleSheet, Pressable} from 'react-native'

const style = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        input:{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        buttonStyle: {
            color:'#123124'
        },
        buttonContainer:{
            flexDirection:'row'
        }

    })

const Calculadora = function () {
    const [number1, onChangeNumber1] = useState('');
    const [number2, onChangeNumber2] = useState('');
    const [resultado, setResultado] = useState('');

    const soma = function (){
        setResultado(Number(number1)+Number(number2))
        onChangeNumber1('')
        onChangeNumber2('')
        return true
    }
    const diminui = function (){
        setResultado(Number(number1)-Number(number2))
        onChangeNumber1('')
        onChangeNumber2('')
        return true
    }
    const multiplica = function (){
        setResultado(Number(number1)*Number(number2))
        onChangeNumber1('')
        onChangeNumber2('')
        return true
    }
    const divide = function (){
        setResultado(Number(number1)/Number(number2))
        onChangeNumber1('')
        onChangeNumber2('')
        return true
    }
    console.log(resultado)

    return <View style={style.container}>
            <Text>Calculadora</Text>
            <TextInput
                onChangeText={onChangeNumber1}
                value={number1}
                placeholder="insira o primeiro"
                keyboardType="numeric"
                style={style.input}
            />
            <TextInput
                onChangeText={onChangeNumber2}
                value={number2}
                placeholder="insira o segundo numero"
                keyboardType="numeric"
                style={style.input}
            />
            <View style={style.buttonContainer}>
            <Button
                    title="+"
                    onPress={() => soma(number1,number2, setResultado,onChangeNumber1,onChangeNumber2)}
                    style={style.buttonStyle}
                    color={style.buttonStyle.color}
                    />
                <Button
                    title="-"
                    onPress={() => diminui()}
                    style={style.buttonStyle}
                    color={style.buttonStyle.color}
                    />
                <Button
                    title="x"
                    onPress={() => multiplica()}
                    style={style.buttonStyle}
                    color={style.buttonStyle.color}
                    />
                <Pressable
                    onPress={() => divide()}
                    style={style.buttonStyle}
                ><Text>/</Text></Pressable>
            </View>
            <Text >Resultado:{resultado}</Text>

        </View>
}

export default Calculadora;