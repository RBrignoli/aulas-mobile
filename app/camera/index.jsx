import { CameraView, CameraProps, useCameraPermissions } from "expo-camera";
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [photo, setPhoto] = useState(null);
    const [showThumbnail, setShowThumbnail] = useState(false);
    const cameraRef = useRef(null);


    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }
    console.log(cameraRef.current)

    function toggleCameraFacing() {
        setFacing(facing === 'back' ? 'front' : 'back');
    }
    const tirarFoto = async () => {
        const photo = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        });
        setPhoto(photo);
        setShowThumbnail(true);
    };

    const savePhoto = async () => {
        console.log('salvar foto')
    }

    return (
        <View style={styles.container}>
            {showThumbnail ?
                <View>
                    <Image source={{ uri: photo.uri }} style={{ width: '100%', height: '100%' }} />
                    <View style={styles.saveContainer}>
                        <TouchableOpacity onPress={savePhoto} style={styles.button}>
                            <Text style={styles.text}>Salvar foto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowThumbnail(false)} style={styles.button}>
                            <Text style={styles.text}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                            <Text style={styles.text}>Inverter Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={tirarFoto}>
                            <Text style={styles.text}>tirar Foto</Text>
                        </TouchableOpacity>
                    </View>
                </CameraView>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    saveContainer: {
        position: 'absolute',
        justifyContent:'center'
    }
});
