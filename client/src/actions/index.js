import { types } from './types';
import axios from 'axios';

export function fetchWeatherData(city) {
    const request = axios.get(`/api/weather?q=${city}`);
    return {
        type: types.FETCH_WEATHER,
        payload: request
    }
}


