import React, { useState, useEffect } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { styles } from '../styles'
//import { tasksTypes } from '../fakedata/tasksTypes'
import { TaskTypeService } from '../services/TaskTypeService'
import { useIsFocused } from '@react-navigation/native'

const Item = ({ title }) => (
    <View style={styles.taskBox}>
        <Text>{title}</Text>
    </View>
)

export default function TasksScreen ({ navigation }) {
    const [tasksTypes, setTasksTypes] = useState([]);
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    )
    const isFocused = useIsFocused();

    async function getTasksTypes() {
        const response = await TaskTypeService.getAll()
        setTasksTypes(response)
    }

    useEffect(() => {
        getTasksTypes()
    }, [isFocused]);
    return (
        <View style={styles.spaced}>
            <Text style={[styles.center, styles.cta]}>Suas tarefas</Text>
            <FlatList 
                data={tasksTypes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Button style={styles.margined} title="Nova tarefa" onPress={() => navigation.navigate('NewTask')} />
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}