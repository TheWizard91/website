import React, { Component, useState, useEffect,
    LoadScript } from "react";

import MapComponent from "/home/emmanuel/Desktop/my_portfolio/frontend/src/components/MapComponent.js"

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

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

// const MAP_STYLE = {
//   width: '100%',
//   height: '100%',
// };

const MY_HOME_LOCATION = {
  lat: 40.888149, 
  lng: -73.859930 
}

// const lib = ["places"];
const GOOGLE_MAPS_API_KEY = "AIzaSyALnWsyf1IDj5fCl7qGFI3Sx_-3JYOT9xA"; // PUT GMAP API KEY HERE

function Contacts () {
    return (
        <div id="mainContainer">
            <main class="main_container">
                <h1>Contacts</h1>
                <div class="fix_block" id="fix_contacts">
                    <table>
                        <tr id="contactAdrress">
                            <td id="address">
                                <p>
                                    3988 White Plains Road, 
                                </p>
                            </td>
                            <td id="e-mail">
                                <address>
                                    <b>E:</b>
                                    <a href="Agiapong@gmail.com">
                                        Agiapong@gmail.com
                                    </a>
                                </address>
                            </td>
                        </tr>
                    </table>
                </div>
                <Wrapper apiKey = { GOOGLE_MAPS_API_KEY } id="m">
                    <MapComponent />
                </Wrapper>
            </main>
        </div>
    );
}

export default Contacts;