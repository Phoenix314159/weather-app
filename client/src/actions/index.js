import { types } from './types';
import axios from 'axios';

export async function fetchWeatherData(city) {
    const request = await axios.get(`/api/weather?q=${city}`);
    return {
        type: types.FETCH_WEATHER,
        payload: request
    }
}
