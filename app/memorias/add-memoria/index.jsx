import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';
import Header from '../../../components/header';

const styles = StyleSheet.create({
    container: { flex: 1},
    textInput: { paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center', justifyContent: 'center' },
    Input: { height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, borderRadius: 10, justifyContent: 'center', backgroundColor: 'lightgray' },
    text: { fontSize: 24, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center' },
    text2: { fontSize: 16, marginTop: 10, alignItems: 'center', justifyContent: 'center' },
    button: {
        borderRadius: 10,
        backgroundColor: 'midnightblue',
        alignItems: 'center',
        fontWeight: "bold",
        width: '80%',
    },
    textButton: { fontSize: 16, marginTop: 10, color: 'white' },

})


export default Signup = () => {
    const [formData, setFormData] = useState({
        title: '',
        where: '',
        when: '',
        desc: '',
        image: ''
    });

    const handleSubmit = async () => {
        if (!formData.title || !formData.where || !formData.when || !formData.desc || !formData.image) {
            alert('Todos os campos devem ser preenchidos')
            return;
        }
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('lista_memorias', jsonValue);
        } catch (error) {
            alert('Error criando memoria. Please try again.');
        }
    };

    return (
            <View style={styles.container}>
            <Header title="<- Adicione sua memória" voltarPara="/memorias" />
                <View style={styles.textInput}>
                    <TextInput
                        style={styles.Input}
                        placeholder="Titulo"
                        value={formData.title}
                        onChangeText={(text) => setFormData({ ...formData, title: text })}
                        required
                    />
                    <TextInput
                        style={styles.Input}
                        placeholder="Onde?"
                        value={formData.where}
                        onChangeText={(text) => setFormData({ ...formData, where: text })}
                        required
                    />
                    <TextInput
                        style={styles.Input}
                        placeholder="Quando?"
                        value={formData.when}
                        onChangeText={(text) => setFormData({ ...formData, when: text })}
                        required
                    />
                    <TextInput
                        style={styles.Input}
                        placeholder="Conte sobre sua memória?"
                        value={formData.desc}
                        onChangeText={(text) => setFormData({ ...formData, desc: text })}
                        required
                    />
                    <TextInput
                        style={styles.Input}
                        placeholder="image url"
                        value={formData.image}
                        onChangeText={(text) => setFormData({ ...formData, image: text })}
                        required
                    />
                    <Pressable onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.textButton}>ADICIONAR</Text>
                    </Pressable>
                </View>
            </View>
    );
};

