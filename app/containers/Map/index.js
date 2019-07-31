import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from '../../../react-native-maps-directions';

import styles from './styles';

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyD1pP3PKiIMbiY4WHFuZA3DzXieI7B-xqM';

class Map extends Component {
  initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.initialRegion}
          loadingEnabled
        >
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
          />
        </MapView>
      </View>
    );
  }
}

export default Map;
