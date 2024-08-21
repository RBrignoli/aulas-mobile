import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
const style = StyleSheet.create({
    container:{
        alignItems:'center',
    }
})
export default App = function () {

    const contar = function () {
        setContador(contador + 1)
        return true
    }
    return <View style={style.container}>
        {contador}
        <Button onPress={contar}>
        </Button>
    </View>
}

