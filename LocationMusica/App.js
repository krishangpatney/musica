import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationView from './components/LocationView';
import PlayerView from './components/PlayerView';
import Child from './components/Child'; 

export default function App() {


  return (
    <View style={styles.container}>
      <LocationView></LocationView>
      <PlayerView></PlayerView>
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
