import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { styles } from '../styles'
import { tasksTypes } from '../fakedata/tasksTypes'

const Item = ({ title }) => (
    <View style={styles.taskBox}>
        <Text>{title}</Text>
    </View>
)

export default function TasksScreen ({ navigation }) {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    )
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