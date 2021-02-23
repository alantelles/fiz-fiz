import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { styles } from '../styles'
import { tasksTypes } from '../fakedata/tasksTypes'
import TaskButton from '../components/TaskButton'
import { openDatabase } from 'react-native-sqlite-storage'


export default function HomeScreen ({ navigation }) {
    const [tasksTypes, setTasksTypes] = useState([])
    const doThisTask = (task) => {
        console.log(`Fiz: ${task.title}`)
        Alert.alert(
            'Fiz!',
            task.title
        )
    }
    const [msgNoTasks, setMsgNoTasks] = useState('')
    useEffect(() => {
        function loadTasks() {
            var db = openDatabase({name: 'db.sqlite3'})
            db.transaction(function(txn){
                txn.executeSql(
                    'SELECT * FROM tasks',
                    [],
                    function(tx, res) {
                        const temp = [];
                        res.rows.each(function(e, i) {
                            temp.push(e)
                        })
                        setTasksTypes(temp)
                    }
                )
            }) 
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