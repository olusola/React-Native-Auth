import { ADD_CURRENT_USER } from '../constants'

export const addCurrentUser = user => {
  let action=null
  action =   {
    type: ADD_CURRENT_USER,
    payload: user,
  }
  console.log('action', action)
  return action
};