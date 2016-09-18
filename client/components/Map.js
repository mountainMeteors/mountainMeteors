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
            defaultZoom={15}
            defaultCenter={{ lat: 40.7725833, lng: -73.9736894 }}
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
