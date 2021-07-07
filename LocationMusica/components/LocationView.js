import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MapView from './MapView';

import * as Location from 'expo-location';


export default function LocationView() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Constants.isDevice) {
                setErrorMsg(
                    'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
                );
                return;
            }
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    let long = '';
    let lat = '';
    
    // { "coords": { "latitude": 25.2747985, "longitude": 55.3685112, "altitude": null, "accuracy": 25, 
    //      "altitudeAccuracy": null, "heading": null, "speed": null }, "timestamp": 1625357922586 }

    if (errorMsg) {
        text = errorMsg;
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>{text}</Text>
            </View>
        );
    } else if (location) {
        lat = location.coords.latitude;
        long = location.coords.longitude;
    }

    return (
        <View style={styles.container}>
            <MapView latitude={lat} longitude={long}></MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
});
