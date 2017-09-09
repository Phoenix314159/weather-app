import _ from 'lodash';
import React, {Component} from 'react';
import Chart from '../components/Chart';
import Map from '../components/Map';
import DeleteRow from '../components/DeleteRow';
import {connect} from 'react-redux';


class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.renderWeather = this.renderWeather.bind(this);
        this.state = {
            tableRow: []
        }
    }

    renderWeather(cityData, index) {

        let deleteRow = (i) => {
                this.setState({
                    tableRow: this.props.weather.splice(i, 1)
                })
            },
            convert = (temp) => {
                return ((9 / 5) * (temp - 273) + 32); // convert K to F
            },
            calcAvg = data => {
                return _.round(_.sum(data) / data.length)
            };
        const
            name = cityData.city.name,
            temp = cityData.list.map(weather => weather.main.temp),
            humidity = cityData.list.map(weather => weather.main.humidity),
            pressure = cityData.list.map(weather => weather.main.pressure),
            temps = temp.map(t => convert(t)),
            {lon, lat} = cityData.city.coord;

        return (
            <tr key={name} className="animated zoomIn">
                <td><Map lon={lon} lat={lat} city={name}/></td>
                <td className="animated fadeIn box"><Chart data={temps} color="orange" average={`${calcAvg(temps).toString()}°`}/></td>
                <td className="animated flipInX box4"><Chart data={pressure} color="blue" average={`${calcAvg(pressure).toString()}mB`}/></td>
                <td className="animated wobble box5"><Chart data={humidity} color="green" average={`${calcAvg(humidity).toString()}%`}/></td>
                <DeleteRow delete={deleteRow} index={index}/>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover" id="table1">
                <thead>
                    <tr className="rowFont">
                        <th className="animated slideInLeft">City</th>
                        <th className="animated slideInLeft">Temperature (°)</th>
                        <th className="animated slideInRight">Pressure (mBar)</th>
                        <th className="animated slideInRight">Humidity (%)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({weather}) => {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);