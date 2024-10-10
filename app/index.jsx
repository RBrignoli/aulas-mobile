import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function TelaInicio() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Link href='/banco'>
                <Text style={styles.link}>Exercicio banco</Text>
            </Link>
            <Link href='/calculadora'>
                <Text style={styles.link}>Exercicio calculadora</Text>
            </Link>
            <Link href='/calculadora-atualizada'>
                <Text style={styles.link}>Exercicio calculadora estilizada</Text>
            </Link>
            <Link href='/lista-tarefas'>
                <Text style={styles.link}>Exercicio lista-tarefas</Text>
            </Link>
            <Link href='/login'>
                <Text style={styles.link}>Exercicio login</Text>
            </Link>
            <Link href='/pokemon'>
                <Text style={styles.link}>Exercicio pokemon</Text>
            </Link>
            <Link href='/sobre-mim'>
                <Text style={styles.link}>Exercicio App sobre mim</Text>
            </Link>
            <Link href='/fotografia'>
                <Text style={styles.link}>Exercicio sobre Hardware: Galeria</Text>
            </Link>
            <Link href='/camera'>
                <Text style={styles.link}>Exercicio sobre Hardware: Camera</Text>
            </Link>
            <Link href='/leitor-qr'>
                <Text style={styles.link}>Exercicio sobre Hardware: LeitorQR</Text>
            </Link>
            <Link href='/memorias'>
                <Text style={styles.link}>Memorias</Text>
            </Link>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    link: {
        margin: 20, 
        fontSize: 18, 
    },
});
