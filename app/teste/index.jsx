import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native';

const App = () => {
  const [saldo, setSaldo] = useState(7320.92);
  const [valor, setValor] = useState('');

  const handleSacar = () => {
    if (parseFloat(valor) <= saldo) {
      setSaldo(saldo - parseFloat(valor));
      setValor('');
    } else {
      // abrir modal de não tem saldo o suficiente
    }
  };

  const handleDepositar = () => {
    setSaldo(saldo + parseFloat(valor));
    setValor('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Santander</Text>
      </View>
      <View style={styles.saldoContainer}>
        <Text style={styles.saldoText}>SALDO ATUAL NA CONTA</Text>
        <Text style={styles.saldovalor}>R$ {saldo.toFixed(2)}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Digite o valor abaixo e escolha uma das operações bancárias:</Text>
        <View style={styles.inputRow}>
          <Text style={styles.currencySymbol}>R$</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleSacar}>
          <Text style={styles.buttonText}>SACAR</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleDeposit}>
          <Text style={styles.buttonText}>DEPOSITAR</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF5733',
  },
  saldoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  saldoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  saldovalor: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputText: {
    fontSize: 14,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  currencySymbol: {
    fontSize: 18,
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF5733',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;