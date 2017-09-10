import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/animate.css/animate.min.css';
import '../styles/css/App.css';
import React, {Component} from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList'

export default class App extends Component {

    render() {
        return (
            <div className="animated slideInUp container background">
                <h1 className="animated slideInLeft header">Weather Forecast</h1>
                <h4 className="animated slideInRight header2">Find forecast statistics for the next five days</h4>
                <SearchBar />
                <WeatherList />
            </div>
        )
    }
}


