import React, { Component } from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  mapStyles,
  Map,
  Wrapper,
  setMap,
  createCustomEqual, 
  isLatLngLiteral,
  GoogleApiWrapper,
} from "@googlemaps/react-wrapper";

let map: google.maps.Map;

const MY_HOME_LOCATION = {
  lat: 40.888149, 
  lng: -73.859930 
}

const mapDiv = document.getElementById('map');

const MapComponent = props => {
  if (!props.loaded) return <div>Loading...</div>;

  return (
    <Map
      centerAroundCurrentLocation
      className="map"
      google={props.google}
      style={{ height: '100%', position: 'relative', width: '100%' }}
      zoom={14}
    />
  );
};

export default MapComponent;