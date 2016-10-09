import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from "react-google-maps";

class GoogMap extends React.Component {
  constructor(props){
    console.log('const props', props);
    super(props);

    this.state = {
      markers: []
    }

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  componentDidMount() {
    console.log('map mounted props', this.props);
    this.setState({
      markers: this.props.listings.map(listing => {
        return {
          position: {
            lat: listing.lat,
            lng: listing.lng
          },
          archived: listing.archived,
          content: 'hello',
          location: listing.location,
          rent: listing.rent,
          showInfo: false
        }
      })
    });
  }

  handleMarkerClick(targetMarker) {
    console.log('######TARGET OPEN MARKER#########', targetMarker)
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
    console.log('######TARGET CLOSE MARKER#########', targetMarker)
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
    // return (<div>{'hi'}</div>)
    return (
      <section style={{height: "100%"}}>
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
            >

              {this.state.markers.map((marker, index) => {
                console.log('marker.archived', marker.archived);
                const onClick = () => {
                  console.log('running onClick');
                  return this.handleMarkerClick(marker);
                }
                const onCloseClick = () => {
                  console.log('running onCloseClick');
                  return this.handleCloseClick(marker);
                }
                if(!marker.archived){
                  return (
                    <Marker
                    key={index}
                    onClick={ onClick }
                    position={marker.position}
                    showInfo={false}
                    >

                    {marker.showInfo && (
                      <InfoWindow onCloseClick={() => {console.log('GRAAAAAAAA')}}>
                        <div>
                          <strong>{marker.location}</strong>
                          <br />
                          ${marker.rent}
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

export default GoogMap;
