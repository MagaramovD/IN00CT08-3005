
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const Home = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
            <Text style={styles.text}>Home Screen</Text>
            <Button title="Toggle Theme" onPress={toggleDarkMode} />
        </View>
    );
};

const styles = StyleSheet.create({
    lightContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkContainer: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
    },
});

export default Home;
