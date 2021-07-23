import { COLOR_MODE } from './types'

const initialState = {
  darkMode: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COLOR_MODE:
      return {
        ...state,
        darkMode: action.mode,
      }
    default:
      return state
  }
}
