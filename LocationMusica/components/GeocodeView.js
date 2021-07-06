import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';


export default function GeocodeView(props) {
    let [hash, setHash] = React.useState('');

    const url = "https://locus-prod-backend.herokuapp.com/geocode/";
    // let hash = '';
    let lat= props.latitude;
    let long= props.longitude;
    
    axios.get(url, {
        params: {
            lat: lat,
            long: long
        },
    })
    .then(response => {
      setHash(response.data);
    })
    .catch(err => {
      console.log(err);
    });

    return (

        <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}> {hash} </Text>

    );
};


