import _ from 'lodash'
import React, { Component } from 'react'
import Chart from '../components/Chart'
import Map from '../components/Map'
import Thead from '../components/T-head'
import DeleteRow from '../components/DeleteRow'
import { connect } from 'react-redux'
import { deleteRow } from '../actions'

class WeatherList extends Component {
  constructor (props) {
    super(props)
    this.renderHead = this.renderHead.bind(this)
    this.renderBody = this.renderBody.bind(this)
  }

  renderHead () {
    const {weather} = this.props
    if (weather.length !== 0) {
      return (
        <Thead/>
      )
    }
  }

  renderBody (cityData, index) {

    const deleteRow = index => {
        this.props.deleteRow(index)
      },
      convert = temp => {
        return ((9 / 5) * (temp - 273) + 32) // convert K to F
      },
      calcAvg = data => {
        return _.round(_.sum(data) / data.length)
      },
      name = cityData.city.name,
      temp = cityData.list.map(weather => weather.main.temp),
      humidity = cityData.list.map(weather => weather.main.humidity),
      pressure = cityData.list.map(weather => weather.main.pressure),
      temps = temp.map(t => convert(t)),
      {lon, lat} = cityData.city.coord

    return (
      <tr key={name} className="animated zoomIn">
        <td className="mapBox"><Map lon={lon} lat={lat} city={name}/></td>
        <td className="animated fadeIn box1"><Chart data={temps} color="orange"
                                                    average={`${calcAvg(temps).toString()}°`}/></td>
        <td className="animated flipInX box2"><Chart data={pressure} color="blue"
                                                     average={`${calcAvg(pressure).toString()}mB`}/></td>
        <td className="animated flipInY box3"><Chart data={humidity} color="green"
                                                     average={`${calcAvg(humidity).toString()}%`}/></td>
        <DeleteRow deleteRow={deleteRow} index={index}/>
      </tr>
    )
  }

  render () {
    const {weather} = this.props
    return (
      <table className="table table-hover" id="table1">
        <thead>
        {this.renderHead()}
        </thead>
        <tbody>
        {weather.map(this.renderBody)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({weather}) => {
  return {weather}
}
const mapDispatchToProps = dispatch => {
  return {
    deleteRow: index => dispatch(deleteRow(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList)