import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const TaskItem = ({ task, handleDelete }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen', {id: task.id})}>
                <Text style={styles.itemTitle}>{task.title}</Text>
                <Text style={styles.itemTitle}>{task.description}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{backgroundColor: "#992034", padding: 7, borderRadius: 10}}
                onPress= {() => handleDelete(task.id)}>
                <Text style={{color: '#fff'}}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#466594',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle: {
        color: '#efefe1'
    }
})

export default TaskItem
