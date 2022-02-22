
import { StyleSheet, Text, View } from 'react-native';
import Tarefa from './components/Tarefas/tarefas.js';
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
        
        <View style={styles.task}>
            <Text style={styles.titulo}> Today's tasks </Text>
          
          <View style={styles.item}>
            <Tarefa text = {'Tarefa 1'}/>
            <Tarefa text = {'Tarefa 1'}/>
          </View>


        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  task:{
    paddingTop:80,
    paddingHorizontal: 20,
  },
  titulo:{
    fontSize: 24,
    fontWeight:'bold'
  },
  item:{

  },
});
