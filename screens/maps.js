import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const maps = () => {
  const [mapRegion] = useState({
    latitude: 41.5315,
    longitude: -8.61896,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker' />
      </MapView>
    </View>
  );
};
export default maps;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});