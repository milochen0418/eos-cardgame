import { ActionTypes } from 'const';

//A reducer specifies how the Redux store should handle an action.  
/*
  We define the default initialState, and a case statement in the reducer function. 
  When the SET_USER action type is detected it will create a copy of the current state with updated 
  or default values using Object.assign(). The function will then return a new object for each user 
  which is added to the store. You should never mutate the Redux store directly.
*/
const initialState = {
  name: "",
  win_count: 0,
  lost_count: 0,
  game: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_USER: {
      return Object.assign({}, state, {
        // If the name is not specified, do not change it
        // The places that will change the name is login
        // In that cases, the `win_count`, `lost_count`, `game` will be reset
        name: typeof action.name === "undefined" ? state.name : action.name,
        win_count: action.win_count || initialState.win_count,
        lost_count: action.lost_count || initialState.lost_count,
        game: action.game || initialState.game,
      });
    }
    default:
      return state;
  }
}