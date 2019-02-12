import { ActionTypes } from 'const';


/*
In Redux the action is usually a plain JavaScript object used to trigger a data change
 in the Redux store. In this game we only need to define one action
  called SET_USER in app/src/actions/UserAction.js, 
  which will mirror the multi index table in the smart contract.
 */
class UserAction {

  static setUser({ name, win_count, lost_count, game }) {
    return {
      type: ActionTypes.SET_USER,
      name,      // User name
      win_count, // Users win count
      lost_count,// Users lost count
      game,      // Users current Gamestate
    }
  }
}

export default UserAction;