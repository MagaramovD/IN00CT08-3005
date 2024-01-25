import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: false, password: false });

    const validateAndSubmit = () => {
        const newErrors = {
            username: !formData.username,
            password: !formData.password,
        };
        setErrors(newErrors);

        const isValid = !newErrors.username && !newErrors.password;
        if (isValid) {
            console.log("data form", formData);

        }
    };

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Appbar.Header>
                    <Appbar.Content title="Login" />
                </Appbar.Header>
                <TextInput
                    label="Username"
                    value={formData.username}
                    onChangeText={(text) => setFormData({ ...formData, username: text })}
                    error={errors.username}
                    keyboardType="default"
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    value={formData.password}
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                    error={errors.password}
                    secureTextEntry
                    style={styles.input}
                />
                <Button mode="contained" onPress={validateAndSubmit} style={styles.button}>
                    Login
                </Button>
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    input: {
        marginBottom: 8,
    },
    button: {
        marginTop: 8,
    },
});

export default Login;
