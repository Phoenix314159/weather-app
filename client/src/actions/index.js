import { types } from './types';
import axios from 'axios';

export async function fetchWeatherData(city) {
    const request = await axios.get(`/api/weather?q=${city}`);
    console.log(request);
    return {
        type: types.FETCH_WEATHER,
        payload: request
    }
}
