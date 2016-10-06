import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from "react-google-maps";

class GoogMap extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  componentWillReceiveProps(props) {

  }

  handleMarkerClick(targetMarker) {
    console.log('######TARGET MARKER#########', targetMarker)
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleCloseClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
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
              ref={(map) => console.log('map',map)}
              defaultZoom={15}
              defaultCenter={this.props.origin}
              onClick={this.props.onMapClick}
            >
              {this.props.listings.map((marker, index) => {
                const onClick = () => this.handleMarkerClick(marker);
                const onCloseClick = () => this.handleCloseClick(marker);
                if(!marker.archived){
                  return (
                    <Marker
                    key={index}
                    onClick={ onClick }
                    position={ {lat: marker.lat, lng: marker.lng}} >

                      <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
                        <div>{marker.rent}</div>
                      </InfoWindow>
                    </Marker>
                  );
                }
              })}
            </GoogleMap>
          }
        />
      </section>
    );
  }
}

export default GoogMap;
