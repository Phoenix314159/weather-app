import React, {Component} from 'react';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeatherData} from '../actions';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeatherData(this.state.term);
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