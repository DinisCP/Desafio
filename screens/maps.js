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
  ref={mapRef}
  style={styles.map}
  initialRegion={mapRegion}
  onRegionChangeComplete={(region) => setRegion(region)}
>
  <Marker coordinate={mapRegion} />
  {/*marker to a nearby location */}
  <Marker
    coordinate={{
      latitude: 41.53351,
      longitude: -8.61599,
    }}
  />
</MapView>;
    </View>
  );
};
export default maps;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});