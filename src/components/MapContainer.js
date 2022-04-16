
// function initMap() {
//     // The location of my house
//     var home = {lat: 40.888149, lng: -73.859930};
//     // The map centered at my home
//     var map = new google.maps.Map(
//         document.getElementById("map"), {zoom: 13, center: home});
//     // The marker, positioned at my home
//     var marker = new google.maps.Marker({position: home, map: map,
//         icon: "/home/emmanuel/Desktop/my_portfolio/frontend/src/images/findMeLogoExstracted.png"});
// }
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "@googlemaps/react-wrapper";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { useLoadScript } from '@react-google-maps/api';

// export class MapContainer extends Component {
//     render() {
//         return (
//             <Map
//                 google={this.props.google}
//                 zoom= {13}
//                 center= {{lat: 40.888149, lng: -73.859930}}
//                 // style={mapStyles}
//                 initialCenter={
//                     {
//                         lat: 40.888149, 
//                         lng: -73.859930
//                     }
//                 }
//             />
//         )
//     }
// }
export class MapContainer extends Component {
    render() {
      return (
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
           <div>
            <h1>Test</h1>
           </div>
          </InfoWindow>
      </Map>
     );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyCW3JMlDWByx0k-DAU8Tv3lyxJaSS7MXyI"
})(MapContainer);