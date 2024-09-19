import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


const Header = ({ title, voltarPara }) => {
  return (
    <View style={styles.header}>
        <Link href={voltarPara}>
      <Text style={styles.headerText}>{title}</Text>
        </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#1976D2',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;