import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import { styles } from '../styles'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function NewTaskScreen ({ navigation }) {
    const [taskName, setTaskName] = useState('')
    const [tasksTypes, setTasksTypes] = useState([])
    const loadTasksTypes = async () => {
        const value = await AsyncStorage.getItem('@tasksTypes')
        if (value) {
            setTasksTypes(JSON.parse(value))
        }
        
    }
    useEffect(() => {
        
        loadTasksTypes()
    }, [])
    const saveTask = async () => {
        const temp = tasksTypes
        temp.push({id: tasksTypes.length, title: taskName})
        loadTasksTypes()   
        try{
            await AsyncStorage.setItem('@tasksTypes', JSON.stringify(temp))
            
            Alert.alert('Salvo', taskName)
            console.log(`Saved: ${taskName}`)
        }
        catch (e) {

        }
            
    }
    return(
        <View style={styles.spaced} >
            <Text style={[styles.center, styles.cta]} >Nova tarefa</Text>
            <View style={styles.formBox}>
                <Text>Nome da tarefa</Text>
                <TextInput 
                    style={styles.inputText} 
                    onChangeText={(text) => setTaskName(text)}
                />
                <Button title="Salvar" onPress={saveTask} />
                <Button title="Home" onPress={() => navigation.navigate('Home')} />
            </View>            
        </View>
    )
}