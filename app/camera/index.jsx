import { useState, useRef } from 'react'
import { View, StyleSheet, Text, Image, Button } from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [lado, setLado] = useState('back')

    if (!permissao) {
        return <View></View>
    }
    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textoPermissao}>Voce precisa pedir a permissao para usar a camera</Text>
                <Button title='Pedir Permissao' onPress={pedirPermissao} />
            </View>
        )
    }
    const tirarFoto = async () => {
        const foto_base64 = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        })
        setFoto(foto_base64)
    }
    const trocaCamera = () => {
        setLado(lado == 'back' ? 'front' : 'back' )
    }
    const salvarFoto = async () => {
        if(permissionResponse.status !== 'granted'){
            await requestPermission();
        }
        MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null)
        
    }


    return (
        <View style={styles.container}>
            {foto ?
                <View>
                    <Image source={{ uri: foto.uri }} style={styles.foto} />
                    <Button title='Descartar foto' onPress={() => setFoto(null)}/>
                    <Button title='Salvar Foto' onPress={salvarFoto}/>
                </View> :
                <CameraView facing={lado} style={styles.camera} ref={cameraRef}>
                    <Button title='Tirar Foto' onPress={tirarFoto} />
                    <Button title='Troca camera' onPress={trocaCamera} />
                </CameraView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textoPermissao: {
        textAlign: 'center',
    },
    camera: {
        flex: 1
    },
    foto:{
        width:'100%',
        height:'80%'
    }

})