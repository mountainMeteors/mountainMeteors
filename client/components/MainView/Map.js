import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function GoogMap (props) {
  return (
    <section style={{height: "120%"}}>
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
            defaultCenter={props.origin}
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
