import React, { useState } from 'react'
import { View, StyleSheet, Pressable, Image, Modal, TextInput, Text } from 'react-native'
import BankButton from '../../components/banco-button'

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 35,
        alignItems: 'flex-start',
        margin: 40
    },
    saldoText: {
        fontSize: 18,
        alignItems: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold'

    },
    inputText: {
        fontSize: 14,
        alignItems: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    saldoNumber: {
        margin: 20,
        fontSize: 28,
    },
    input: {
        alignContent: 'center',
        margin: 20,
        backgroundColor: 'lightgray'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        backgroundColor: 'red'
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        alignSelf: 'flex-end',
        backgroundColor: 'lightgray'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    }
})
export default App = function () {
    const logoIst = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqauTZz_W6scTRBOiVbkdn-lGhKLHdyh8LA&s'
    const [saldo, setSaldo] = useState(7320.92)
    const [number1, onChangeNumber1] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [saldoPotencial, setSaldoPotencial] = useState(0)

    const handlePress = (type) => {
        handleCalculate(type)
        setIsModalOpen(true)
        return
    }
    const handleCalculate = (type) => {
        if (type == 'S') {
            let result = saldo - Number(number1)
            setSaldoPotencial(result - (result * 0.025))
            return
        }
        let result = saldo + Number(number1) + (Number(number1) * 0.01)
        setSaldoPotencial(result)
        return
    }
    const handleFinalize = () => {
        setSaldo(saldoPotencial)
        setIsModalOpen(!isModalOpen)
        return
    }


    return <View style={style.container}>
        <View style={style.container}>
            <Image
                style={style.logo}
                source={{
                    uri: logoIst,
                }}
            />
        </View>
        <View style={style.container}>
            <Text style={style.saldoText}>Saldo Atual na Conta:</Text>
            <View style={style.saldoNumber}>R$ {saldo.toFixed(2)}</View>
        </View>
        <View style={style.container}>
            <Text style={style.inputText}>Digite o valor abaixo e selecione a operação</Text>
            <TextInput
                onChangeText={onChangeNumber1}
                value={number1}
                placeholder="0,00"
                keyboardType="numeric"
                style={style.input}
            />
        </View>
        <View style={style.container}>
            <BankButton
                onPress={() => handlePress('S')}
                title="SACAR"
            />
            <BankButton
                onPress={() => handlePress('D')}
                title="DEPOSITAR"
            />
        </View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalOpen}
            onRequestClose={() => {
                setIsModalOpen(!isModalOpen);
            }}>
            <View style={style.centeredView}>
                <View style={style.modalView}>
                    <Pressable
                        style={style.buttonClose}
                        onPress={() => setIsModalOpen(!isModalOpen)}>
                        <Text style={style.textStyle}>x</Text>
                    </Pressable>
                    <Text style={style.modalText}>Tem certeza que quer realizar esta operação?</Text>
                    <Text style={style.modalText}>Saldo Atual: {saldo}</Text>
                    <Text style={style.modalText}>Saldo Final: {saldoPotencial}</Text>
                    <Pressable
                        style={style.button}
                        onPress={() => handleFinalize()}>
                        <Text style={style.textStyle}>Confirmar transação</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    </View>
}

