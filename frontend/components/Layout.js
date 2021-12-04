import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#212b59'/>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefe2',
        padding: 20,
        flex: 1,
        alignItems: 'center'
    }
})

export default Layout
