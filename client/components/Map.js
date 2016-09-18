import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

// var markers = [{
//   position: {
//     lat: 25.0112183,
//     lng: 121.52067570000001,
//   },
//   key: `Taiwan`,
//   defaultAnimation: 2,
// }]

export default function GoogMap (props) {
  return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            {...props.containerElementProps}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            onClick={props.onMapClick}
          >
            {props.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={() => props.onMarkerRightclick(index)} />
              );
            })}
          </GoogleMap>
        }
      />
    </section>
  );
}
