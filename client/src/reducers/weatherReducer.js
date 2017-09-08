import { types } from '../actions/types';
export default function (state = [], action) {

    switch(action.type) {
        case types.FETCH_WEATHER:
            return [ action.payload.data, ...state ];
        case types.DELETE_ROW:
            return (() => { state.filter(element => element !== action.payload)});
        default:
            return state;
    }
}
