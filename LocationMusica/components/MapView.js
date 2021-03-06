import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GeocodeView from './GeocodeView';

export default function MapView(props) {
    return (
        <View style={styles.container}>
            <Text>
                {props.latitude + ' ' + props.longitude}
            </Text>
            <GeocodeView latitude={props.latitude} longitude={props.longitude} > </GeocodeView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
