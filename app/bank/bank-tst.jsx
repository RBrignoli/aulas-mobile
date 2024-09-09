import React, { useState } from 'react'
import { Modal, View, StyleSheet, Text, TextInput, Pressable, Image } from 'react-native'

const style = StyleSheet.create({
    estiloLogo: {
        width: 200,
        height: 100
    },
    container: {
        alignItems: 'center'
    },
    botao:{
        backgroundColor:'#ff55ff'
    },
    inputBox:{
        backgroundColor:'gray'
    },
    modalContainer:{
        alignItems:'center',
        backgroundColor:'white',
        marginTop: 120
    }
})

export default BankScreen = () => {
    const [saldo, setSaldo] = useState(7320.92)
    const [valor, setValor] = useState()
    const [modalEstaAberta, setModalEstaAberta] = useState(false)
    const logoIst = 'https://tacabrasilfa.com.br/wp-content/uploads/2022/10/icone-istepos-futebol-americano-400x403.png'


    const depositar = function () {
        // verificações
        setSaldo(saldo + valor)
    }

    const sacar = () => {
        // verificações
        setModalEstaAberta(true)
        setSaldo(saldo - valor)
    }


    return <View style={style.container}>
        <View>
            <Image
                style={style.estiloLogo}
                source={{
                    uri: logoIst
                }}
            />
        </View>
        <View>
            <Text>Saldo atual na conta:</Text>
            {saldo}
        </View>
        <View>
            <TextInput
                onChangeText={setValor}
                value={valor}
                placeholder='Insira o valor aqui'
                keyboardType='numeric'
                style={style.inputBox}
            
            />
        </View>
        <View>
            <Text>Inserir os botões aqui</Text>
            <Pressable
                onPress={sacar}
                style={style.botao}
            >
                <Text>SAQUE</Text>
            </Pressable>
        </View>
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalEstaAberta}
            onRequestClose={() => setModalEstaAberta(false)}
        >
            <View style={style.modalContainer}>
                TEXTO SIMPLES
                DA MODAL
            </View>
            
        </Modal>
    
    </View>
}


