import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { styles } from '../styles'


export default function TaskButton(props) {    
    
    return (
        <View key={props.taskType.id} style={styles.taskButton}>
            <Text>{props.taskType.title}</Text>
            <Button title="Fiz!" onPress={() => props.doThisTask(props.taskType)}/>
            
        </View>
    )
}