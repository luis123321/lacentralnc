import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import layout from './layout/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  layout,
})
