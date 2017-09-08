import React, {Component} from 'react';

export default class Map extends Component {

    componentDidMount() {
        (() => {
            let map = new window.google.maps.Map(document.getElementById('map'), {
                center: {lat: this.props.lat, lng: this.props.lon},
                zoom: 12
            });
            new window.google.maps.Marker(document.getElementById('map'),{
                position: map.center
            });
        })();
    }

    render() {
        return <div id="map"></div>
    }
}
