import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


//Key not hidden because necessary to be revealed for displaying map
const GOOGLE_MAPS_API_KEY = "AIzaSyAwa4KMEkZnwuFvCjiGFV7XZjK-uO6C_jY";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    center={{ lat: props.lat, lng: props.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
  </GoogleMap>
));


class MapPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: props.coordinates.latitude,
      lng: props.coordinates.longitude
    };
  }

  //Checks if old coordinates have been updated yet
  componentDidUpdate(oldProps) {
    const newProps = this.props;
      if(oldProps.coordinates !== newProps.coordinates) {
        this.setState({
          lat: newProps.coordinates.latitude,
          lng: newProps.coordinates.longitude
        });
    }
  }

  render(){
    const {
      lat,
      lng
    } = this.state;

    return(
      <MyMapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `40vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        lat={lat}
        lng={lng}
      />
    )
  }
}


export default MapPanel;
