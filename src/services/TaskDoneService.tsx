import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskDoneService = {
    getAll: async function() {
        const value = await AsyncStorage.getItem('@tasksDone')
        if (value) {
            const jsonified = JSON.parse(value)
            return jsonified
        }
    },
    insertOne: async function(taskType) {
        const tasksDone = JSON.parse(TaskDoneService.getAll())
        tasksDone.push({id:tasksDone.length, taskTypeId: taskType.id})
        await AsyncStorage.setItem('@tasksDone', JSON.stringify(tasksDone))
    }
}