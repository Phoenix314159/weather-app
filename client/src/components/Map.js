import React, {Component} from 'react';
import apiKey from '../config';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        const style = {
            height: '220px',
            width: '275px',
            border: '2px solid black',
            borderRadius: '8pt'
        };
        const {lat, lon, google} = this.props
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
        );
    }
}

export default GoogleApiWrapper({
    apiKey
})(MapContainer)

