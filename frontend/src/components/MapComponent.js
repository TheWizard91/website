// import ReactDOM from 'react-dom';
// import React, {Component} from "react";
// import withGoogleMap from "react-google-maps";
// import { Map, GoogleMap,
// useJsApiLoader, GoogleApiWrapper, InfoWindow,
// Marker,isLatLngLiteral,MarkerClusterer,createCustomEqual,
// Wrapper, Status, useState, useEffect} from "@googlemaps/react-wrapper";
import React, { Component, useState, useEffect } from "react";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
    mapStyles,
    Map,
} from "@googlemaps/react-wrapper";


// const google = window.google;

// const MapWithAMarker = withGoogleMap(props => {
//   const [myValues, setMyValues] = useState(props.hover);
//   const [loc, setMyLoc] = useState(props.loc);
//   const [pos, setMyPos] = useState(props.pos);

//   useEffect(() => {
//     setMyValues(props.hover);
//     setMyLoc(props.loc);
//     setMyPos(props.pos);
//   }, [props.hover, props.loc, props.pos]);
//   return (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//       {myValues ? (
//         <InfoWindow position={loc[pos]}>
//           <h1>hai</h1>
//         </InfoWindow>
//       ) : (
//         <Marker position={{ lat: 0, lng: 0 }} />
//       )}
//       {myValues ? "true" : "false"}
//     </GoogleMap>
//   );
// });


// class MapComponent extends Component {
//     constructor() {
//         super();
//         this.state = {
//             hover: false,
//             pos: -1,
//             loc: [
//                 { lat: -34.797, lng: 150.644 },
//                 { lat: -34.397, lng: 150.744 },
//                 { lat: -34.397, lng: 150.844 }
//             ]
//         };
//     }
//     mousehover = event => {
//         console.log(event.target.id);
//         this.setState({ hover: true, pos: event.target.id });
//     };
//     mousegone = () => {
//         console.log("leave");
//         this.setState({ hover: false, pos: -1 });
//     };
//     render() {
        
//         return(
//             <MapWithAMarker
//                 containerElement={<div style={{ height: `400px` }} />}
//                 mapElement={<div style={{ height: `100%` }} />}
//                 hover={this.state.hover}
//                 loc={this.state.loc}
//                 pos={this.state.pos}
//             />
//         )
//     }
// };
// export default MapComponent;

class MapComponent extends Component () {
    constructor(props) {
    super(props);

    this.state = {
    stores: [
        {lat: 47.49855629475769, lng: -122.14184416996333},
        {latitude: 47.359423, longitude: -122.021071},
        {latitude: 47.2052192687988, longitude: -121.988426208496},
        {latitude: 47.6307081, longitude: -122.1434325},
        {latitude: 47.3084488, longitude: -122.2140121},
        {latitude: 47.5524695, longitude: -122.0425407}
            ]
        }
    }
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}
export default MapComponent;
