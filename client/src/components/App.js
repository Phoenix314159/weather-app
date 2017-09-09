import React, { Component } from 'react';
import '../styles/css/App.css';
import '../styles/css/animate.min.css';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList'

export default class App extends Component {

    render() {
    return (
     <div className="animated slideInUp container background">
         <h1 className="animated slideInLeft header">5-Day Weather Forecast</h1>
         <h4 className="animated slideInRight header">Find forecast statistics for the next five days</h4>
         <SearchBar />
         <WeatherList />
     </div>
    );
  }
}


