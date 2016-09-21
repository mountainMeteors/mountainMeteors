import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class GoogMap extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <section style={{height: "120%"}}>
        <GoogleMapLoader
          containerElement={
            <div
              {...this.props.containerElementProps}
              style={{
                height: "100%",
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={15}
              defaultCenter={this.props.origin}
              onClick={this.props.onMapClick}
            >
              {this.props.markers.map((marker, index) => {
                return (
                  <Marker
                    {...marker}
                    onRightclick={() => this.props.onMarkerRightclick(index)} />
                );
              })}
            </GoogleMap>
          }
        />
      </section>
    );
  }
}

export default GoogMap;
