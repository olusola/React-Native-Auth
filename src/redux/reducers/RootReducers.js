import { combineReducers } from 'redux';
import { ADD_CURRENT_USER } from '../constants'

const INITIAL_STATE = {}

const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_CURRENT_USER:
      return {
        user: action.payload
      }
    default:
      return state;
  }
}

export default combineReducers({
  currentUser: authReducer
});