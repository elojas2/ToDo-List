import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Tarefa from './components/Tarefas/tarefas.js';
import React from 'react'


export default function App() {

  const [tarefa, setTarefa] = useState()
  const [tarefaItem, setTarefaItem] = useState([])
  const handleAddTarefa = () =>{
    Keyboard.dismiss()
    setTarefaItem([...tarefaItem, tarefa])
    setTarefa(null)

  }

  const tarefaCompleta = (index) =>{
    let copiaItem = [...tarefaItem]
    copiaItem.splice(index,1)
    setTarefaItem(copiaItem)
  }


  return (
    <View style={styles.container}>
        
        <View style={styles.task}>
            <Text style={styles.titulo}> Today's tasks </Text>
          
          <View style={styles.item}>
            {
              tarefaItem.map((item, index) =>{
                return (
                  <TouchableOpacity onPress={() => tarefaCompleta(index)}>
                      <Tarefa key={index}text={item}/>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.escreveTask}
      >
      
      <TextInput style={styles.input} placeholder={"Escreva sua tarefa"} value={tarefa} onChangeText = {text => setTarefa(text)}/>

      <TouchableOpacity onPress={() => handleAddTarefa()}>
        <View style={styles.addWrapper}>
            <Text style={styles.addText}> + </Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    
  },
  task:{
    paddingTop:80,
    paddingHorizontal: 20,
  },
  titulo:{
    fontSize: 24,
    fontWeight:'bold',

  },
  item:{
    marginTop: 30,
  },

  escreveTask:{
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  input:{
    paddingVertical: 18 ,
    paddingHorizontal: 15,
    backgroundColor:"#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,

  },

  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },

  addText:{
    
  },
});
