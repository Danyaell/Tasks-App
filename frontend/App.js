import React from "react";
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import TaskFormScreen from './screens/TaskFormScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={({navigation}) => ({
            title: 'Tasks App',
            headerStyle: { backgroundColor: '#212b59' },
            headerTitleStyle: { color: '#f9f9f9' },
            headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate("TaskFormScreen") }>
              <Text style={{ fontSize: 30, color: '#f9f9f9', marginRight: 5 }}>+</Text>
            </TouchableOpacity>)
          })}/>

        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen}
          options={{
            title: 'Create a new Task',
            headerStyle: {
              backgroundColor: '#212b59',
            },
            headerTitleStyle: { color: '#f9f9f9' },
            headerTintColor: '#f9f9f9',
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App