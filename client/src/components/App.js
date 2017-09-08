import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList'

export default class App extends Component {

    render() {
    return (
     <div className="container background">
         <h1 className="header1">5-Day Weather Forecast</h1>
         <SearchBar />
         <WeatherList />
     </div>
    );
  }
}


