import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, ScrollView } from 'react-native'
import { styles } from '../styles'
// import { tasksTypes } from '../fakedata/tasksTypes'
import TaskButton from '../components/TaskButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskTypeService } from '../services/TaskTypeService'
import { TaskDoneService } from '../services/TaskDoneService'
import { useIsFocused } from '@react-navigation/native'



export default function HomeScreen ({ navigation }) {
    
    const doThisTask = (task) => {
        TaskDoneService.insertOne(task)
        console.log(`Fiz: ${task.title}`)
        Alert.alert(
            'Fiz!',
            task.title
        )
    }
    const [msgNoTasks, setMsgNoTasks] = useState('')
    const [tasksTypes, setTasksTypes] = useState([])
    const loadTasksTypes = async () => {
        const value = await AsyncStorage.getItem('@tasksTypes')
        if (value) {
            const jsonified = JSON.parse(value)
            setTasksTypes(jsonified)
        }
        
    }
    const isFocused = useIsFocused();
    async function getTasksTypes() {
        const response = await TaskTypeService.getAll()
        setTasksTypes(response)
    }
    useEffect(() => {
        function loadTasks() {
            getTasksTypes()
            if (tasksTypes.length > 0) {
                setMsgNoTasks('O que você fez?');
            }
            else {
                setMsgNoTasks('Você não tem tarefas cadastradas')
            }
        }
        
        loadTasks()
    },[isFocused])

    const deleteAll = () => {
        AsyncStorage.setItem('@tasksTypes', '[]')
    }

        
    
    
    return (
        <ScrollView style={styles.spaced}>
            <Text style={[styles.center, styles.cta]}>{msgNoTasks}</Text>
            <View>
                {tasksTypes.map((e, i) => <TaskButton key={i} taskType={e} doThisTask={doThisTask} /> )}
            </View>
            <Button title="Tarefas" onPress={() => navigation.navigate('Tasks')} />
        </ScrollView>
    )
}