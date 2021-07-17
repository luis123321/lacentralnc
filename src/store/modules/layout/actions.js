import { COLOR_MODE } from './types'

export const setColorMode = (result) => {
  return dispatch => {
    dispatch({
      type: COLOR_MODE,
      mode: result,
    })
  }
}
