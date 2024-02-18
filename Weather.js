import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Weather({ latitude, longitude }) {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY = '3629d588f79a0e4418ec1b18b1db4229';

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(json => setWeather(json))
            .catch(e => {
                console.error(e);
                setError('Failed to load weather data');
            });
    }, [latitude, longitude]);

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.error}>{error}</Text>
            ) : (
                <View>
                    <Text style={styles.temp}>
                        {weather ? `${weather.main.temp}°C` : 'Loading...'}
                    </Text>
                    <Text style={styles.description}>
                        {weather ? weather.weather[0].description : ''}
                    </Text>
                    {weather && (
                        <Image
                            style={styles.icon}
                            source={{
                                uri: `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
                            }}
                        />
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 32,
    },
    description: {
        fontSize: 20,
    },
    icon: {
        width: 50,
        height: 50,
    },
    error: {
        color: 'red',
        fontSize: 18,
    },
});
