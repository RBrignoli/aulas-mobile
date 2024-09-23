import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import {Link} from 'expo-router'
import Header from '../../../components/header';
import { AppContext } from '../../../scripts/appContext';
import { useContext } from 'react';

const filmes = [
  { 
    detalhe: 'Um grupo de super-heróis se une para combater uma ameaça global, liderados por Nick Fury. Eles precisam superar suas diferenças para salvar o mundo.', 
    id: '1', 
    title: 'Vingadores', 
    year: 2012, 
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disneyplus.com%2Fpt-br%2Fmovies%2Fos-vingadores%2F2h6PcHFDbsPy&psig=AOvVaw1Rx2-OUEXyiYl3_2_uUrXU&ust=1727177858412000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiS_Yr92IgDFQAAAAAdAAAAABAE' 
  },
  { 
    detalhe: 'Um retrato sombrio da origem de Arthur Fleck, um homem em dificuldades que se transforma no icônico vilão Coringa, refletindo sobre a sociedade e a saúde mental.', 
    id: '2', 
    title: 'Coringa', 
    year: 2019, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlIvrVdkfEfF6LP4Rsdx_wlG1L1ysoDi-WA&s' 
  },
  { 
    detalhe: 'Um thriller de desastres que mostra as consequências catastróficas de mudanças climáticas extremas, enquanto um pai luta para salvar seu filho em meio a um novo gelo.', 
    id: '3', 
    title: 'O Dia Depois de Amanhã', 
    year: 2004, 
    image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EAD34F033A653628AB4EB8AB4B990469B5D783E0C1183DF6A8984FD198F337F6/scale?width=1200&aspectRatio=1.78&format=webp' 
  },
  { 
    detalhe: 'Em uma busca épica por um novo lar, um grupo de astronautas viaja por um buraco de minhoca em busca de planetas habitáveis, explorando o amor e o sacrifício.', 
    id: '4', 
    title: 'Interestelar', 
    year: 2014, 
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg' 
  },
  { 
    detalhe: 'A jornada de um jovem bruxo, Harry Potter, que descobre seu legado mágico e enfrenta o poderoso Voldemort, enquanto faz amigos e aprende sobre coragem e lealdade.', 
    id: '5', 
    title: 'Harry Potter', 
    year: 2001, 
    image: 'https://flowgames.gg/wp-content/uploads/2023/04/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max.jpg' 
  },
];


const TelaFilmes = () => {
  const { detail, setDetail } = useContext(AppContext)

  return (
    <View style={styles.container}>
      <Header title="<- Filmes" voltarPara="/sobre-mim" />
      <ScrollView>
        {filmes.map((filme, index) => (
          <View key={index} style={styles.card}>
            <Link href={{pathname:`/sobre-mim/detalhe/${filme.id}`}}>
              <Image source={{ uri: filme.image }} style={styles.image} onPress={setDetail(filme)} />
            </Link>
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