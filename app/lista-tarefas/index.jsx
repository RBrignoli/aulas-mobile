import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TextInput, Pressable } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  titleContainer: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',

  },
  titleText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
  },
  taskContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  taskText: {
    fontSize: 18,
    color: '#333',
  },
  doneTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  add_task: {
    flexDirection: 'row'
  },
  addButton: {
    backgroundColor: 'red'
  }
})

const tasks = [
  { id: 1, nome: 'tarefa1', feito: false, created_at: '15/08/2024' },
  { id: 2, nome: 'tarefa2', feito: true, created_at: '15/06/2024' },
  { id: 3, nome: 'tarefa3', feito: true, created_at: '01/07/2024' },
  { id: 4, nome: 'tarefa4', feito: false, created_at: '08/08/2024' }
]

export default listaTarefas = function () {
  const [tarefas, setTarefas] = useState(tasks)
  const [newTarefa, setNewTarefa] = useState('')

  const handleClick = (id) => {
    const tarefa = tarefas.find((task) => task.id == id)
    if (tarefa) {
      tarefa.feito = !tarefa.feito
    }
    setTarefas([...tarefas]);
  };
  const handleAddNewTask = () => {
    console.log(newTarefa)
  }

  return <View style={styles.container}>
    <View style={styles.titleContainer}>LISTA DE TAREFAS</View>
    <FlatList
      style={styles.listContainer}
      data={tarefas}
      renderItem={({ item }) => <View
        style={styles.taskContainer}>
        <Text
          onPress={() => { handleClick(item.id); }}
          style={[item.feito ? styles.doneTask : styles.taskText]}>{item.nome}
        </Text>
      </View>
      }
    />
    <View style={styles.add_task}>
      <TextInput
        style={styles.input}
        onChangeText={setNewTarefa}
        value={newTarefa}
        placeholder='Criar uma nova tarefa'
      />
      <Pressable style={styles.addButton} onPress={() => { handleAddNewTask() }}>
        <Text>Add</Text>
      </Pressable>
    </View>
  </View>
}