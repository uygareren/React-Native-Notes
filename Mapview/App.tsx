import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import map from "./map-json/map"

export default function App() {

  const [markerLocations, setMarkerLocations] = useState([
    {
      title: "Marker 1",
      latitude: 38.43836136551846,   
      longitude: 27.14146126063123, 
    },
    {
      title: "Marker 2",
      latitude: 38.43809839144103,   
      longitude: 27.141644500578657, 
    }
  ]);

  const addMarker = (e:any) => {
    const newMarker = {
      title: `Marker ${markerLocations.length + 1}`,
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    };
    setMarkerLocations([...markerLocations, newMarker]);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        customMapStyle={map}
        onPress={addMarker} 
        initialRegion={{
          latitude: 38.438318837045315,   
          longitude: 27.141681318984315, 
          latitudeDelta: 0.0922, 
          longitudeDelta: 0.0421 
        }}
      >
        {markerLocations.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
