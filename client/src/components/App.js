import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList'

export default class App extends Component {

    render() {
    return (
     <div className="container background">
         <h1 className="header">5-Day Weather Forecast</h1>
         <h4 className="header">Find forecast statistics for the next five days</h4>
         <SearchBar />
         <WeatherList />
     </div>
    );
  }
}


