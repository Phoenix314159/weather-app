import React, {Component} from 'react';
import api_key from '../config';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        const style = {
            height: '220px',
            width: '275px',
            border: '2px solid black',
            borderRadius: '8pt'
        }
        return (
            <Map google={this.props.google}
                 zoom={12}
                 className="animated lightSpeedIn"
                 style={style}
                 initialCenter={{
                     lat: this.props.lat,
                     lng: this.props.lon
                 }}
            >
                <Marker
                    position={{lat: this.props.lat, lng: this.props.lon}}/>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: api_key
})(MapContainer)

