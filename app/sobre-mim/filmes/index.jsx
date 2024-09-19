import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Header from '../../../components/header';

const filmes = [
  { title: 'Teste filme 1', year: 2000, image: 'https://avatars.githubusercontent.com/u/68694403?v=4' },
  { title: 'AFAFASfasfdasd', year: 2024, image: 'https://avatars.githubusercontent.com/u/68694403?v=4' },
  { title: 'AFAFASfasfdasd', year: 2024, image: 'https://avatars.githubusercontent.com/u/68694403?v=4' },
  { title: 'AFAFASfasfdasd', year: 2024, image: 'https://avatars.githubusercontent.com/u/68694403?v=4' },
  { title: 'AFAFASfasfdasd', year: 2024, image: 'https://avatars.githubusercontent.com/u/68694403?v=4' },
  { title: 'AFAFASfasfdasd', year: 2024, image: 'https://avatars.githubusercontent.com/u/68694403?v=4' },
  { title: 'AFAFASfasfdasd', year: 2024, image: 'https://avatars.githubusercontent.com/u/68694403?v=4' },
  { title: 'AFAFASfasfdasd', year: 2024, image: 'https://avatars.githubusercontent.com/u/68694403?v=4' },
];

const TelaFilmes = () => {
  return (
    <View style={styles.container}>
      <Header title="<- Filmes" voltarPara="/sobre-mim" />
      <ScrollView>
        {filmes.map((filme, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: filme.image }} style={styles.image} />
            <Text style={styles.title}>{filme.title}</Text>
            <Text>{filme.year}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default TelaFilmes;