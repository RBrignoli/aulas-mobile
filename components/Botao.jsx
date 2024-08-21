import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';


const Botao = ({ onPress, title, type }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        type === 'number' ? styles.numberButton : styles.operationButton,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '60%',
    height: '60%',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  numberButton: {
    backgroundColor: '#D3D3D3',
  },
  operationButton: {
    backgroundColor: '#FFD700',
  },
  text: {
    fontSize: 24,
    color: '#000',
    alignItems:'center',

  },
  pressed: {
    opacity: 0.5,
  },
});

export default Botao;
