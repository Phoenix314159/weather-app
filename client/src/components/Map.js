import React, {Component} from 'react';

export default class Map extends Component {

    componentDidMount() {
        (() => {
            let map = new window.google.maps.Map(document.getElementById('map'), {
                center: {lat: this.props.lat, lng: this.props.lon},
                zoom: 12
            });
            // new window.google.InfoWindow({
            //     content: `${this.props.city}`,
            // })
            new window.google.maps.Marker({
                position: map.center,
                map: map,
            });
            // marker.addListener('click', () => {
            //     infoWindow.open(map, marker);
            // });

        })();
    }

    render() {
        return <div id="map"></div>
    }
}
