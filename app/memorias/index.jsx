import { View, Text, Image, FlatList, StyleSheet, Pressable } from 'react-native';
import Header from '../../components/header';
import { Link } from 'expo-router'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';




const getStoredMemories = async () => {
    try {
      const value = await AsyncStorage.getItem('lista_memorias');
      if (value !== null) {
        return value
      }
      console.log('memorias vazias')
      return []
    } catch (e) {
    console.log('erro encontrando memorias', e)
      return []
    }
  };

const TelaViagens = () => {
  const [memorias, setMemorias] = useState([])

  useEffect(() => {
    let result = getStoredMemories()
    if (result){
        setMemorias(JSON.stringify(result))
    }
}, [])


  return (
    <View style={styles.container}>
      <Header title="Memorias" voltarPara="/memorias" />
      <Link href='/memorias/add-memoria'>
        <Text>Adicionar uma nova memória</Text>
      </Link>
        <FlatList
          data={memorias}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.title}>{item.desc}</Text>
              <Text style={styles.title}>{item.local} - {item.year}</Text>
            </View>
          )}
        />
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

export default TelaViagens;