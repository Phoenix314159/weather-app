import { types } from './types';
import axios from 'axios';

export const fetchWeatherData = city => async dispatch => {
    const request = await axios.get(`/api/weather?q=${city}`);
    return dispatch({
        type: types.FETCH_WEATHER,
        payload: request
    })
}

export const deleteRow = index => dispatch => {
    return dispatch({
        type: types.DELETE_ROW,
        payload: index
    })
}



