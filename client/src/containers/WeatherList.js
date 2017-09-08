import _ from 'lodash';
import React, {Component} from 'react';
import Chart from '../components/Chart';
import Map from '../components/Map';
import DeleteRow from './DeleteRow';


class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.renderWeather = this.renderWeather.bind(this);
        this.state = {
            something: []
        }
    }

    renderWeather(cityData, index) {

        let deleteRow = (i) => {
                if (i === 0) {
                    this.setState({
                        something: this.props.weather.splice(0, i + 1)
                    })
                    return;
                }
                this.setState({
                    something: this.props.weather.splice(0, i)
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
            <tr key={name}>
                <td><Map lon={lon} lat={lat} city={name}/></td>
                <td><Chart data={temps} color="orange" average={`${calcAvg(temps).toString()}°`}/></td>
                <td><Chart data={pressure} color="blue" average={`${calcAvg(pressure).toString()}mB`}/></td>
                <td><Chart data={humidity} color="green" average={`${calcAvg(humidity).toString()}%`}/></td>
                <DeleteRow delete={deleteRow} index={index}/>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover" id="table1">
                <thead>
                    <tr className="rowFont">
                        <th>City</th>
                        <th>Temperature (°)</th>
                        <th>Pressure (mBar)</th>
                        <th>Humidity (%)</th>
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

export default mapStateToProps;