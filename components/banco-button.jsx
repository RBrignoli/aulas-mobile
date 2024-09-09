import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';


const BankButton = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '120%',
    height: '40%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor:'red'
  },
  numberButton: {
    backgroundColor: 'red',
  },
  operationButton: {
    backgroundColor: '#FFD700',
  },
  text: {
    fontSize: 18,
    color: '#000',
    alignItems:'center',

  },
  pressed: {
    opacity: 0.5,
  },
});

export default BankButton;
