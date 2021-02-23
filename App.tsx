import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppTitle from './src/components/AppTitle'
import HomeScreen from './src/components/HomeScreen'
import TasksScreen from './src/components/TasksScreen'
import NewTaskScreen from './src/components/NewTaskScreen'
import { styles } from './src/styles';
 
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <AppTitle />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen options={{title: 'Tarefas'}} name="Tasks"  component={TasksScreen} />
          <Stack.Screen options={{title: 'Nova tarefa'}} name="NewTask"  component={NewTaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

