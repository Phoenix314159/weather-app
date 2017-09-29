import {types} from '../actions/types';
const weatherReducer = (state = [], action) => {

    switch (action.type) {
        case types.FETCH_WEATHER:
            return [action.payload.data, ...state];
        case types.DELETE_ROW:
            return state.filter((item, index) => index !== action.payload);
        default:
            return state;
    }
}

export default weatherReducer;
