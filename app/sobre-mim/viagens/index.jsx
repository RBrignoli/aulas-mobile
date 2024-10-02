import { View, Text, Image, FlatList, StyleSheet, Pressable } from 'react-native';
import Header from '../../../components/header';
import { Link } from 'expo-router'
import { AppContext } from '../../../scripts/appContext';
import { useContext } from 'react';

const viagens = [
  { detalhe: 'Buenos Aires é a capital cosmopolita da Argentina. Seu centro é a Praça de Maio, com imponentes edifícios do século 19, como a Casa Rosada, o emblemático palácio presidencial com sacadas. Outras importantes atrações são o Teatro Colón, uma casa de ópera inaugurada em 1908 com cerca de 2.500 lugares, e o moderno museu MALBA, com sua coleção de arte latino-americana.', id: '1', title: 'Buenos Aires', year: 2023, image: 'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/argentinalead.jpg?w=1600&h=900' },
  { detalhe: 'O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo.', id: '2', title: 'Rio de janeiro', year: 2022, image: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/03/1-cristo-redentor.jpg' },
  { detalhe: 'Florianópolis, a capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento. É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha. A sua Lagoa da Conceição, uma lagoa de água salgada, é popular para a prática de windsurf e para excursões de barco. A Ponte Pedro Ivo Campos faz a ligação entre a ilha e a zona comercial continental.', id: '3', title: 'Floripa', year: 2014, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaxINyZZ5c-GLlNrU787MrAPaJsT2k34SMw&s' },
];

const TelaViagens = () => {
  const { detail, setDetail } = useContext(AppContext)

  return (
    <View style={styles.container}>
      <Header title="<- Viagens" voltarPara="/sobre-mim" />
        <FlatList
          data={viagens}
          renderItem={({ item }) => (
            <View style={styles.card}>
              {/* <Link href={{pathname:`/sobre-mim/detalhe/${item.id}`, params:{'item': JSON.stringify(item)}}}> */}
              <Link href={{pathname:`/sobre-mim/detalhe/${item.id}`}}>
                  <Image source={{ uri: item.image }} style={styles.image} onPress={setDetail(item)} />
              </Link>
              <Text style={styles.title}>{item.title} - {item.year}</Text>
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