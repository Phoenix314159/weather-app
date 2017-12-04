import React from 'react'
import apiKey from '../config'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const MapContainer = ({lat, lon, google}) => {

  const style = {
    height: '220px',
    width: '275px',
    border: '2px solid black',
    borderRadius: '8pt'
  }
  return (
    <Map google={google}
         zoom={12}
         className="animated lightSpeedIn"
         style={style}
         initialCenter={{
           lat,
           lng: lon
         }}
         clickableIcons={false}>
      <Marker position={{lat, lng: lon}}/>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey
})(MapContainer)

