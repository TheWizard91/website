import React, { Component, useState, useEffect } from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import MapComponent from "/home/emmanuel/Desktop/my_portfolio/frontend/src/components/MapComponent.js";
// import React, { Component, useState, useEffect } from "react";
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
} from "@googlemaps/react-wrapper";

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
                        <tr id="contactList">
                            <td id="add">
                                <p>
                                    Bronx, New York 10466
                                </p>
                            </td>
                            <td id="phoneNumber">
                                <address>
                                    <b>TEL:</b> +1 (929)303-8986
                                </address>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="map">
                    <div >
                        {/* <Wrapper apiKey={"AIzaSyALnWsyf1IDj5fCl7qGFI3Sx_-3JYOT9xA"} > */}
                            <MapComponent />
                        {/* </Wrapper> */}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Contacts;