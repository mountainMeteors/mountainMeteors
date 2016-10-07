import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from "react-google-maps";

class GoogMap extends React.Component {
  constructor(props){
    super(props);

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({markers: props.markers})
  }

  handleMarkerClick(targetMarker) {
    console.log('######TARGET MARKER#########', targetMarker)
    this.setState({//this === component
      markers: this.state.markers.map(marker => { //this === component
        if (marker === targetMarker) {
          console.log('found marker to open', ...marker);
          console.log('details', marker);
          console.log('returning', {...marker, showInfo: true});
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
          console.log('found marker to close');
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
              ref={(map) => console.log(map)}
              defaultZoom={15}
              defaultCenter={this.props.origin}
            >
              {this.props.markers.map((marker, index) => {
                const onClick = () => this.handleMarkerClick(marker);
                const onCloseClick = () => this.handleCloseClick(marker);
                if(!marker.archived){
                  return (
                    <Marker
                    key={index}
                    onClick={ onClick }
                    position={ {lat: marker.lat, lng: marker.lng}}
                    showInfo={false}
                    >

                    {marker.showInfo && (
                      <InfoWindow onCloseClick={onCloseClick}>
                        <div>
                          <strong>{marker.content}</strong>
                          <br />
                          <em>Display rent</em>
                        </div>
                      </InfoWindow>
                    )}

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


                      // <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
                      //   <div>{marker.rent}</div>
                      // </InfoWindow>

export default GoogMap;
