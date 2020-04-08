import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker, Circle } from "react-google-maps"
import styles from './../assets/mapStyle.json'

class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 40.4929, lng: 15.5553 },
      isMarkerShowing: true,
      selectedPlace: {},
      activeMarker: {}, 
    }
  }

  onMarkerClicked = (marker) => {
    console.log("marker", marker)
    // this.setState({
    //   isMarkerShowing: true,
    //   activeMarker: marker,
    // });
  };

  onCircleClicked = (props) => {
    console.log(props)
  }
  
  render() { 
    console.log(this.props)
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={this.state.center}
        defaultZoom = { 2.25 }
        options = {{
          disableDefaultUI: true,
          styles: styles,
          minZoom: 2,
          maxZoom: 10,
          zoomControl: true
        }}
      >
        {this.props.countries.map((country, i) => (
         <Circle
          // key={i}
          defaultCenter={ country.center}
          radius={100000}
          onClick={ () => this.onMarkerClicked(i)}
          options= {{
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 0,
            fillColor: '#FF0000',
            fillOpacity: 0.3
          }}>
            <InfoWindow
            key={i}
            marker={this.state.activeMarker}
            visible={this.state.isMarkerShowing}
          ></InfoWindow>
           </Circle>
         
        ))}
          
      </GoogleMap>
    ));
    

    return ( <div>
        <GoogleMapExample
          containerElement={ <div id="container" /> }
          mapElement={ <div id="map" /> }
        />
      </div> );
  }
}
 
export default MapContainer;
