import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { styles } from '../styles'
import { tasksTypes } from '../fakedata/tasksTypes'
import TaskButton from '../components/TaskButton'

export default function HomeScreen ({ navigation }) {
    const doThisTask = (task) => {
        Alert.alert(
            'Fiz!',
            task.title
        )
    }
    const [msgNoTasks, setMsgNoTasks] = useState('')
    useEffect(() => {
        function loadTasks() {
            if (tasksTypes.length > 0) {
                setMsgNoTasks('');
            }
            else {
                setMsgNoTasks('Você não tem tarefas cadastradas')
            }
        }
        loadTasks()
    }, [])

    
    
    
    return (
        <View style={styles.spaced}>
            <Text style={[styles.center, styles.cta]}>{msgNoTasks}</Text>
            <View>
                {tasksTypes.map((e, i) => <TaskButton taskType={e} doThisTask={doThisTask} /> )}
            </View>
            <Button title="Tarefas" onPress={() => navigation.navigate('Tasks')} />
        </View>
    )
}