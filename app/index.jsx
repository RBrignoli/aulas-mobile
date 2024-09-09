import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:150
    },
    pickerInput: {
        width: '80%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        padding: 10,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    selectText: {
        fontSize: 8
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height:'auto'
    },

})

export default Pokemon = () => {
    const [pokemon, setPokemon] = useState('')
    const [type, setType] = useState('')
    const [listaTypes, setListaTypes] = useState([])
    const [listaPokemons, setListaPokemons] = useState([])
    const [pokeImg, setPokeImg] = useState('')

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type?limit=100')
            .then(resposta => resposta.json())
            .then(dados => setListaTypes(dados.results))
            .catch(error => console.log('erro pegando os tipos', error))
    }, [])

    useEffect(() => {
        if (type) {
            fetch(`https://pokeapi.co/api/v2/type/${type}`)
                .then(resposta => resposta.json())
                .then(dados => setListaPokemons(dados.pokemon))
                .catch(error => console.log('erro pegando os pokemons', error))
        }
    }, [type])

    useEffect(() => {
        if (pokemon) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                .then(resposta => resposta.json())
                .then(dados => console.log(dados))
                .catch(error => console.log('erro pegando os pokemons', error))
        }
    }, [pokemon])

    return (
        <ImageBackground
            source={{ uri: 'https://preview.redd.it/pok%C3%A9mon-starting-screen-mockup-aseprite-490x270-mouse-v0-3y9gp6yxiita1.png?auto=webp&s=20c48fb65cc2c9e2e1a71d495343e108eaec294f' }}
            style={styles.image}
        >
            <View style={styles.container}>
                <Picker
                    style={styles.pickerInput}
                    selectedValue={type}
                    onValueChange={(item) => setType(item)}
                >
                    <Picker.Item label={'Selecione um tipo'} />
                    {listaTypes.map((item, index) => (
                        <Picker.Item key={index} label={item.name} value={item.name} />
                    ))}
                </Picker>
                {type ? <Text style={styles.selectText}>voce selecionou {type}</Text> : ''}
                <Picker
                    style={styles.pickerInput}
                    selectedValue={pokemon.name}
                    onValueChange={(item) => setPokemon(item)}
                >
                    <Picker.Item label={'Selecione um Pokemon'} />
                    {listaPokemons.map((item, index) => (
                        <Picker.Item key={index} label={item.pokemon.name} value={item.pokemon} />
                    ))}
                </Picker>
                {pokemon ? <Text style={styles.selectText}>voce selecionou {pokemon.name}, que é do tipo {type}</Text> : ''}
            </View>
        </ImageBackground>
    )
}