import { types } from '../actions/types';
export default function (state = [], action) {

    switch(action.type) {
        case types.FETCH_WEATHER:
            return [ action.payload.data, ...state ];
        default:
            return state;
    }
}
