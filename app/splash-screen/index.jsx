import React, {useState} from "react";
import {View, StyleSheet, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:200,
        height:200
    }
})
const splashScreen = function () {
    const logoIst = 'https://tacabrasilfa.com.br/wp-content/uploads/2022/10/icone-istepos-futebol-americano-400x403.png'
    return <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 0, y: 1}} 
                colors={['black', 'grey']} 
                style={style.container}>
            <Image
                style={style.logo}
                source={{
                    uri: logoIst,
                }}
            />
        </LinearGradient>
}

export default splashScreen;