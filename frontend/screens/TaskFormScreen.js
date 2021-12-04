import React, { useState, useEffect } from 'react'
import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import Layout from '../components/Layout'
import { saveTask, getTask, updateTask } from '../api'

const TaskFormScreen = ({ navigation, route }) => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const [editing, setEditing] = useState(false)
    const handleChange = (name, value) => setTask({ ...task, [name]: value })

    const handleSubmit = async () => {
        try {
            if (!editing) {
                await saveTask(task);
            } else {
                await updateTask(route.params.id, task)
            }
            navigation.navigate('HomeScreen')
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (route.params && route.params.id) {
            navigation.setOptions({ headerTitle: 'Update Task' });
            setEditing(true);
            (async () => {
                const task = await getTask(route.params.id)
                setTask({ title: task.title, description: task.description })
            })();
        }
    }, [])

    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Write a Title" placeholderTextColor='#bcc1a4'
                onChangeText={(text) => handleChange('title', text)}
                value={task.title}
            />
            <TextInput
                style={styles.input}
                placeholder="Write a Description" placeholderTextColor='#bcc1a4'
                onChangeText={(text) => handleChange('description', text)}
                value={task.description}
            />

            {
                !editing ? (
                    <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Save Task</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Update Task</Text>
                    </TouchableOpacity>
                )
            }

        </Layout>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        padding: 10,
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#466594',
        borderRadius: 10,
        height: 40,
        color: '#000',
        textAlign: 'center'
    },
    buttonSave: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 3,
        backgroundColor: '#466594'
    },
    buttonText: {
        color: '#f9f9f9',
        textAlign: 'center'
    },

    buttonUpdate: {
        padding: 10,
        marginBottom: 3,
        borderRadius: 10,
        backgroundColor: "#e58e26",
    }
})

export default TaskFormScreen
