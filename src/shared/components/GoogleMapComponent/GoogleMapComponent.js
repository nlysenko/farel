/**
 *
 * GoogleMapComponent
 *
 */

import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const GoogleMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDiUlLQkA5o0x4I4NBN2Mtpp_ycHHTSvjo',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: 50.47417, lng: 30.500109 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 50.47417, lng: 30.500109 }} />
    )}
  </GoogleMap>
))

export default GoogleMapComponent
