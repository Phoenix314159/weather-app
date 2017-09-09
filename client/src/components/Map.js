import React, {Component} from 'react';

export default class Map extends Component {

    componentDidMount() {
        (() => {
            let map = new window.google.maps.Map(document.getElementById('map'), {
                center: {lat: this.props.lat, lng: this.props.lon},
                zoom: 12
            });
            new window.google.maps.Marker({
                position: map.center
            });
        })();
    }

    render() {
        return <div id="map" className="animated lightSpeedIn box3"></div>
    }
}
