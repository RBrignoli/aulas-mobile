
import { View, Text, StyleSheet, Image, Button } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';
import { AppContext } from '../../../scripts/appContext';
import { useContext } from 'react';

export default Detalhe = () => {
  // const { id, item } = useLocalSearchParams()
  // detail = JSON.parse(item)
  const {teste, setTeste} = useContext(AppContext)
  const {detail, setDetail} = useContext(AppContext)
  console.log(detail)


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{detail.title}</Text>
      <Image
        source={{ uri: detail.image }}
        style={styles.image}
      />
      <Text style={styles.detalhe}>{detail.detalhe}</Text>
      <Text style={styles.year}>{detail.year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  detalhe: {
    fontSize: 18,
    marginTop: 10,
  },
  year: {
    fontSize: 16,
    color: 'gray',
  },

});