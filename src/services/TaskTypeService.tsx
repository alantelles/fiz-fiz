import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskTypeService = {
    getAll: async function() {
        const value = await AsyncStorage.getItem('@tasksTypes')
        if (value) {
            const jsonified = JSON.parse(value)
            return jsonified
        }
    },
    getById: async function(id) {
        const tasksTypes = JSON.parse(TaskTypeService.getAll())
        const result = tasksTypes.filter(e => e.id == id)
        return result
    },
    insertOne: async function(taskType) {
        const tasksTypes = JSON.parse(TaskTypeService.getAll())
        tasksTypes.push(taskType)
        await AsyncStorage.setItem('@tasksTypes', JSON.stringify(tasksTypes))
    }
}