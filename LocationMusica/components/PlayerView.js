import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactPlayer from 'react-player';

export default function PlayerView(props) {
    return (
        // Render a YouTube video player
        <ReactPlayer 
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            />
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
