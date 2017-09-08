import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import Map from '../components/Map';

class WeatherList extends Component {
    renderWeather(cityData) {
        let convert = (temp) => {
            return ((9/5)*(temp - 273) + 32); // convert K to F
        }
        let calcAvg = data => {
            return _.round(_.sum(data) / data.length)
        }
        const name = cityData.city.name,
            temp = cityData.list.map(weather => weather.main.temp),
            humidity = cityData.list.map(weather => weather.main.humidity),
            pressure = cityData.list.map(weather => weather.main.pressure),
            temps = temp.map(t => convert(t)),
            {lon, lat} = cityData.city.coord;


        return (
            <tr key={name}>
                <td><Map lon={lon} lat={lat} city={name}/></td>
                <td><Chart data={temps} color="orange" average={`${calcAvg(temps).toString()}°`} /></td>
                <td><Chart data={pressure} color="blue" average={`${calcAvg(pressure).toString()}mB`} /></td>
                <td><Chart data={humidity} color="red" average={`${calcAvg(humidity).toString()}%`} /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr className="rowFont">
                        <th>City</th>
                        <th>Temperature (°)</th>
                        <th>Pressure (mBar)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);