import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Header from '../../components/header';
import { AppContext } from '../../scripts/appContext';
import { useContext } from 'react';

const TelaInicio = () => {

    const { teste, setTeste } = useContext(AppContext)
    setTeste('abcde')

    return (
        <View style={styles.container}>
            <Header title="Sobre Mim" voltarPara="./" />
            <View style={styles.content}>
                <Image
                    source={{ uri: 'https://avatars.githubusercontent.com/u/68694403?v=4' }}
                    style={styles.profileImage}
                />
                <Text style={styles.welcomeText}>Bem-vindo ao meu app</Text>
                <Text style={styles.descriptionText}>
                    Eu sou um professor/engenheiro/atleta
                </Text>
                <Link href="/sobre-mim/filmes" asChild>
                    <Button title="VEJA OS FILMES QUE ASSISTI" />
                </Link>
                <Link href="/sobre-mim/viagens" asChild>
                    <Button title="VEJA MINHAS VIAGENS" />
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 50
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    descriptionText: {
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default TelaInicio;