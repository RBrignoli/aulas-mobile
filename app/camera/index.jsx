import { useState, useRef } from 'react'
import { View, StyleSheet, Text, Image, Button } from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as Linking from 'expo-linking'



export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [lado, setLado] = useState('back')
    const [code, setCode] = useState(null);
    const [modo, setModo] = useState('picture')


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
        setLado(lado == 'back' ? 'front' : 'back')
    }
    const trocaModo = () => {
        setModo(lado == 'picture' ? 'record' : 'picture')
    }
    const salvarFoto = async () => {
        if (permissionResponse.status !== 'granted') {
            await requestPermission();
        }
        MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null)

    }
    const navegarQR = async (data) => {
        console.log(data)
        if (Linking.canOpenURL(data)) {
            console.log('url')
            Linking.openURL(data)
        } else {
            alert('nao é uma URL')
        }
    }


    return (
        <View style={styles.container}>
            {foto ?
                <View>
                    <Image source={{ uri: foto.uri }} style={styles.foto} />
                    <Button title='Descartar foto' onPress={() => setFoto(null)} />
                    <Button title='Salvar Foto' onPress={salvarFoto} />
                </View> :
                <CameraView
                    facing={lado}
                    mode={modo}
                    style={styles.camera}
                    ref={cameraRef}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr"],
                    }}
                    onBarcodeScanned={(data) => setCode(data)}
                >
                    {
                    code?
                    <View style={styles.icon}>
                        <Ionicons name="qr-code" size={32} color="white" onPress={navegarQR} style={styles.iconQR} />
                    </View>:
                    <></>
                }
                <View style={styles.icon}>
                        <Ionicons name="camera" size={64} color="white" onPress={salvarFoto} style={styles.iconCamera} />
                </View>
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
        flex: 1,
        justifyContent:'flex-end'
    },
    foto: {
        width: '100%',
        height: '80%'
    },
    iconCamera:{
        alignSelf:'center',
        paddingBottom:64
    },
    iconView:{
        
    },
    iconQR:{
        alignSelf:'flex-end',
        margin:32
    }

})