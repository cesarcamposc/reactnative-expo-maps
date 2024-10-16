import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, { Callout, Circle, Marker, Polyline } from 'react-native-maps'

const carImage = require('../assets/images/car2.png')

export default function index() {
    const [origin, setOrigin] = useState(
        {
            latitude: -12.046478970636288,
            longitude: -77.03014743701888,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }
    );

    const [destination, setDestination] = useState(
        {
            latitude: -12.051728463629457, 
            longitude: -77.03444839053337,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }
    );
  return (
    <View style = {styles.container}>
        <MapView 
        style = {styles.map}
        initialRegion={origin}
        showsUserLocation = {true}
        >
            <Marker
            coordinate={origin}
            // icon={carImage}
            image={carImage}
            pinColor='purple'
            draggable = {true}
            >
                <Callout>
                    <Text>Esto es un callout</Text>
                </Callout>
            </Marker>

            <Marker
            coordinate={destination}
            // icon={carImage}
            image={carImage}
            pinColor='red'
            draggable = {true}
            >

            </Marker>


            <Circle
            center={origin}
            radius={100} 
             />

            <Polyline
            coordinates={[origin,destination]}
            strokeColor='purple'
            strokeWidth={10}

            />

        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    map: {
        width: '100%',
        height: '100%',
    }

})