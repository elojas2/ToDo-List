import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import styles from "./style.js"

const Tarefa = (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.mark}>
                <TouchableOpacity style={styles.quadrado}/>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circulo}></View>
        </View>

    )
}

export default Tarefa