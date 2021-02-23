import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles'

export default function AppTitle () {
    return (
        <View>
            <Text style={styles.headerText}>Fiz? Fiz!</Text>
            <Text style={styles.subHeaderText}>Anote suas ações em um clique!</Text>
        </View>
    )
}