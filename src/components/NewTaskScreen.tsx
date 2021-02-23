import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import { styles } from '../styles'

export default function NewTaskScreen () {
    const [taskName, setTaskName] = useState('')
    return(
        <View style={styles.spaced} >
            <Text style={[styles.center, styles.cta]} >Nova tarefa</Text>
            <View style={styles.formBox}>
                <Text>Nome da tarefa</Text>
                <TextInput 
                    style={styles.inputText} 
                    onChangeText={(text) => setTaskName(text)}
                />
                <Button title="Salvar" onPress={() => Alert.alert('Salvo', taskName)} />
            </View>
        </View>
    )
}