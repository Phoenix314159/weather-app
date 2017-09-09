import _ from 'lodash';
import React, {Component} from 'react';
import Chart from '../components/Chart';
import Map from '../components/Map';
import Thead from '../components/T-head';
import DeleteRow from '../components/DeleteRow';
import {connect} from 'react-redux';

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.renderHead = this.renderHead.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.state = {
            tableRow: []
        }
    }

    renderHead() {
        if (this.props.weather.length !== 0) {
            return (
                <Thead/>
            )
        }
    }

    renderBody(cityData, index) {

        const deleteRow = i => {
                this.setState({
                    tableRow: this.props.weather.splice(i, 1)
                })
            },
            convert = temp => {
                return ((9 / 5) * (temp - 273) + 32); // convert K to F
            },
            calcAvg = data => {
                return _.round(_.sum(data) / data.length)
            },
            name = cityData.city.name,
            temp = cityData.list.map(weather => weather.main.temp),
            humidity = cityData.list.map(weather => weather.main.humidity),
            pressure = cityData.list.map(weather => weather.main.pressure),
            temps = temp.map(t => convert(t)),
            {lon, lat} = cityData.city.coord;

        return (
            <tr key={name} className="animated zoomIn">
                <td className="mapBox"><Map lon={lon} lat={lat} city={name}/></td>
                <td className="animated fadeIn box"><Chart data={temps} color="orange"
                                                           average={`${calcAvg(temps).toString()}°`}/></td>
                <td className="animated flipInX box4"><Chart data={pressure} color="blue"
                                                             average={`${calcAvg(pressure).toString()}mB`}/></td>
                <td className="animated wobble box5"><Chart data={humidity} color="green"
                                                            average={`${calcAvg(humidity).toString()}%`}/></td>
                <DeleteRow delete={deleteRow} index={index}/>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover" id="table1">
                <thead>
                    {this.renderHead()}
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderBody)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({weather}) => {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);