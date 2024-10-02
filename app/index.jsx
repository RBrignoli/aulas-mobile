import { Text, View } from 'react-native'
import { Link } from 'expo-router'
export default telaInicio = () => {
    return (
        <View>
            <Link href='/banco'>
                <Text>Exercicio banco</Text>
            </Link>
            <Link href='/calculadora'>
                <Text>Exercicio calculadora</Text>
            </Link>
            <Link href='/calculadora-atualizada'>
                <Text>Exercicio calculadora estilizada</Text>
            </Link>
            <Link href='/lista-tarefas'>
                <Text>Exercicio lista-tarefas</Text>
            </Link>
            <Link href='/login'>
                <Text>Exercicio login</Text>
            </Link>
            <Link href='/pokemon'>
                <Text>Exercicio pokemon</Text>
            </Link>
            <Link href='/sobre-mim'>
                <Text>Exercicio App sobre mim</Text>
            </Link>
            <Link href='/fotografia'>
                <Text>Exercicio sobre Hardware: Galeria</Text>
            </Link>
            <Link href='/camera'>
                <Text>Exercicio sobre Hardware: Camera</Text>
            </Link>
            
            <Link href='/leitor-qr'>
                <Text>Exercicio sobre Hardware: LeitorQR</Text>
            </Link>
        </View>
    )
}