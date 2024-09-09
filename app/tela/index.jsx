import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
const style = StyleSheet.create({
    container:{
        backgroundColor:'red'
    }
})

export default Registro =()=>{
    return (
        <View style={style.container}>
            <View>Registre-se</View>
            <View>
                inputs 
                <TextInput></TextInput>
            </View>
            <View>Botao</View> 
        </View>
    )
}
