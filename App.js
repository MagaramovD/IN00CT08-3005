import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

const MapComponent = () => {
    // Define state for location
    const [location, setLocation] = useState({
        latitude: 65.0800,
        longitude: 25.4800,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    // Asynchronous function to get user's location
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }

        let { coords } = await Location.getCurrentPositionAsync({});
        setLocation({
            ...location,
            latitude: coords.latitude,
            longitude: coords.longitude,
        });
    };

    // useEffect to get GPS coordinates when Map is displayed
    useEffect(() => {
        (async () => {
            await getLocation();
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: location.latitudeDelta,
                    longitudeDelta: location.longitudeDelta,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapComponent;
