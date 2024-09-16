import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Pressable, Modal } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 400
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
        margin: 10,
    },
    selectText: {
        fontSize: 8
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto'
    },
    pokeImage: {
        width: 200,
        height: 200,
    },
    pokeImage1: {
        width: 100,
        height: 100,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: 40
    },
    pokeImage2: {
        width: 100,
        height: 100,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        margin: 40
    },
    battleBt: {
        backgroundColor: 'red'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
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

})

export default Pokemon = () => {
    const [pokemon, setPokemon] = useState('')
    const [type, setType] = useState('')
    const [listaTypes, setListaTypes] = useState([])
    const [listaPokemons, setListaPokemons] = useState([])
    const [pokeImg, setPokeImg] = useState('')
    const [opponent, setOpponent] = useState('')
    const [opponentImg, setOpponentImg] = useState('')
    const [isModalOpen, setIsModalOpen] = useState('')

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
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then(resposta => resposta.json())
                .then(dados => setPokeImg(dados.sprites.back_default))
                .catch(error => console.log('erro pegando os pokemons', error))
        }
        if (opponent) {
            console.log(1, opponent)
            fetch(opponent.url)
                .then(resposta => resposta.json())
                .then(dados => setOpponentImg(dados.sprites.front_default))
                .catch(error => console.log('erro pegando os pokemons', error))
        }
    }, [pokemon, opponent])

    const handleBattle = () => {
        const oponente = listaPokemons[Math.floor(Math.random() * listaPokemons.length)]
        console.log(oponente)
        setOpponent(oponente.pokemon)
        setIsModalOpen(!isModalOpen)
        console.log(isModalOpen)
        return true
    }
    return (
        <ImageBackground
            source={{ uri: 'https://preview.redd.it/pok%C3%A9mon-starting-screen-mockup-aseprite-490x270-mouse-v0-3y9gp6yxiita1.png?auto=webp&s=20c48fb65cc2c9e2e1a71d495343e108eaec294f' }}
            style={styles.image}
        >
            <View style={styles.container}>
                {pokemon ? <Pressable onPress={handleBattle} style={styles.battleBt}>Batalha</Pressable> : ''}
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
                <Picker
                    style={styles.pickerInput}
                    selectedValue={pokemon.name}
                    onValueChange={(item) => setPokemon(item)}
                >
                    <Picker.Item label={'Selecione um Pokemon'} />
                    {listaPokemons.map((item, index) => (
                        <Picker.Item key={index} label={item.pokemon.name} value={item.pokemon.name} />
                    ))}
                </Picker>
            </View>
            <Image
                style={styles.pokeImage}
                source={{
                    uri: pokeImg,
                }}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalOpen}
                onRequestClose={() => {
                    setIsModalOpen(!isModalOpen);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ImageBackground
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMa5RdrtT7eR9-JxRW7S-hCXUYCDhoGeCZA&s' }}
                            style={styles.image}>
                            <View style={styles.pokeImage1}>
                                <Image
                                    style={styles.pokeImage}
                                    source={{
                                        uri: opponentImg,
                                    }}
                                />
                            </View>

                            <Text>Versus</Text>
                            <View style={styles.pokeImage2}>
                                <Image
                                    style={styles.pokeImage}
                                    source={{
                                        uri: pokeImg,
                                    }}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    )
}