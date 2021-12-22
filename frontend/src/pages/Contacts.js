import React, { Component } from "react";
import { Wrapper, Status, Map, GoogleMap, useJsApiLoader,  GoogleApiWrapper, InfoWindow, Marker, isLatLngLiteral, createCustomEqual } from "@googlemaps/react-wrapper";


const render = (status: Status) => {
return <h1>{status}</h1>;
};

const Contacts: React.VFC = () => {
    const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = React.useState(3); // initial zoom
    const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
        lat: 0,
        lng: 0,
    });

    const onClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng]);
        };

        const onIdle = (m: google.maps.Map) => {
        console.log("onIdle");
        setZoom(m.getZoom());
        setCenter(m.getCenter().toJSON());
        };

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
                        <Wrapper apiKey={"AIzaSyCW3JMlDWByx0k-DAU8Tv3lyxJaSS7MXyI"} >
                            <Map
                                center={center}
                                onClick={onClick}
                                onIdle={onIdle}
                                zoom={zoom}
                                style={{ flexGrow: "1", height: "100%" }}
                                >
                                {clicks.map((latLng, i) => (
                                    <Marker key={i} position={latLng} />
                                ))}
                            </Map>
                        </Wrapper>
                    </div>
                </div>
            </main>
        </div>
    );
}

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
  }
  
  const Map: React.FC<MapProps> = ({
    onClick,
    onIdle,
    children,
    style,
    ...options
  }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();
  
    React.useEffect(() => {
      if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {}));
      }
    }, [ref, map]);
  
    // because React does not do deep comparisons, a custom hook is used
    // see discussion in https://github.com/googlemaps/js-samples/issues/946
    useDeepCompareEffectForMaps(() => {
      if (map) {
        map.setOptions(options);
      }
    }, [map, options]);
  
    React.useEffect(() => {
      if (map) {
        ["click", "idle"].forEach((eventName) =>
          google.maps.event.clearListeners(map, eventName)
        );
  
        if (onClick) {
          map.addListener("click", onClick);
        }
  
        if (onIdle) {
          map.addListener("idle", () => onIdle(map));
        }
      }
    }, [map, onClick, onIdle]);
  
    return (
      <>
        <div ref={ref} style={style} />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // set the map prop on the child component
            return React.cloneElement(child, { map });
          }
        })}
      </>
    );
  };
  
  const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
    const [marker, setMarker] = React.useState<google.maps.Marker>();
  
    React.useEffect(() => {
      if (!marker) {
        setMarker(new google.maps.Marker());
      }
  
      // remove marker from map on unmount
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);
  
    React.useEffect(() => {
      if (marker) {
        marker.setOptions(options);
      }
    }, [marker, options]);
  
    return null;
  };
  
  const deepCompareEqualsForMaps = createCustomEqual(
    (deepEqual) => (a: any, b: any) => {
      if (
        isLatLngLiteral(a) ||
        a instanceof google.maps.LatLng ||
        isLatLngLiteral(b) ||
        b instanceof google.maps.LatLng
      ) {
        return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
      }
  
      // TODO extend to other types
  
      // use fast-equals for other objects
      return deepEqual(a, b);
    }
  );
  
  function useDeepCompareMemoize(value: any) {
    const ref = React.useRef();
  
    if (!deepCompareEqualsForMaps(value, ref.current)) {
      ref.current = value;
    }
  
    return ref.current;
  }
  
  function useDeepCompareEffectForMaps(
    callback: React.EffectCallback,
    dependencies: any[]
  ) {
    React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    ReactDom.render(<App />, document.getElementById("root"));
  });
export default Contacts;