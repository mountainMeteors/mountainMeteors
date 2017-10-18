import React from 'react'
import ReactDOM from 'react-dom'

import  { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react'


export class Container extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }

    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }


  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose() {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    const listMarkers = this.props.markers.map((mark, index) => {
      return (
        <Marker
            key = {index}
            onClick={ this.onMarkerClick }
            name={ mark.rent }
            position={ {lat: mark.lat, lng: mark.lng} } />
      )
    })

    return (
        <Map google={ this.props.google }
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={12}
          onClick={ this.onMapClicked }>
          {listMarkers}


        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(Container)
