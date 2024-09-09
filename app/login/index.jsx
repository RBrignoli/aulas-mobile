import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', justifyContent: 'center' },
    textInput: { paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center', justifyContent: 'center' },
    Input: { height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, borderRadius: 10, justifyContent: 'center', backgroundColor: 'lightgray' },
    text: { fontSize: 24, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center' },
    text2: { fontSize: 16, marginTop: 10, alignItems: 'center', justifyContent: 'center' },
    button: {
        borderRadius: 10,
        backgroundColor: 'midnightblue',
        alignItems: 'center',
        fontWeight: "bold",
        width: '80%'
    },
    textButton: { fontSize: 16, marginTop: 10, color:'white' },

})

export default Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [Message, setMessage] = useState(null);

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.password) {
            setMessage('Todos os campos devem ser preenchidos')
            return;
        }
        try {
            const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            console.log(response)
            if (response.status === 200) {
                setMessage('Signup successfully!');
            } else if (response.status === 409) {
                setMessage('Email already exists');
            } else {
                setMessage('An error occurred, try again');
            }
        } catch (error) {
            setMessage('Error during signup. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.textInput}>
                <Text style={styles.text}>
                    Task Hub
                </Text>
                <Text style={styles.text2}>
                    Crie seu usuario enviando Nome, email e password
                </Text>
                <Text style={styles.text}>
                    Sign Up
                </Text>
                <TextInput
                    style={styles.Input}
                    placeholder="Name"
                    value={formData.name}
                    onChangeText={(text) => setFormData({ ...formData, name: text })}
                    required
                />
                <TextInput
                    style={styles.Input}
                    placeholder="Email"
                    value={formData.email}
                    onChangeText={(text) => setFormData({ ...formData, email: text })}
                    required
                />
                <TextInput
                    style={styles.Input}
                    placeholder="Password"
                    value={formData.password}
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                    secureTextEntry={!showPassword}
                    required
                />
                <Pressable onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.textButton}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
};

