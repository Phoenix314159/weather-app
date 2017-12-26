import React, {Component} from 'react';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeatherData} from '../actions';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {term: ''};
    }

    onInputChange = event => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = event => {
      const {fetchWeatherData} = this.props
      const {term} = this.state
        event.preventDefault();
        fetchWeatherData(term);
        this.setState({term: ''});
    }

    render() {
        const {term} = this.state
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Enter a city name"
                    className="form-control centerInput"
                    value={term}
                    onChange={this.onInputChange}
                />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({fetchWeatherData}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);