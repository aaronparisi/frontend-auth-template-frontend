import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer'

export default combineReducers({
  // entities: entitiesReducer,
  session: sessionReducer
});
