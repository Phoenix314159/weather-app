import { types } from '../actions/types'

export default (state = [], action) => {
  const {type} = action
  switch (type) {
    case types.FETCH_WEATHER: {
      const {payload: {data}} = action
      return {...state, data}
    }
    case types.DELETE_ROW: {
      const {payload} = action
      return state.filter((item, index) => index !== payload)
    }
    default:
      return state
  }
}

