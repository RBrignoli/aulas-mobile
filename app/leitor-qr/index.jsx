import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';



export default function App() {
    const [permission, requestPermission] = useCameraPermissions();
    const [code, setCode] = useState(null);

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
    

    return (
        <View style={styles.container}>
                <CameraView
                    style={styles.camera}
                    facing='back'
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr"],
                    }}
                    onBarcodeScanned={(data) => setCode(data)}>
                
                </CameraView>

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
        justifyContent: 'center'
    },
    icon:{

    }
});
