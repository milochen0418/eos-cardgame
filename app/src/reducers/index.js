import { combineReducers } from 'redux';
import UserReducer from './UserReducer';

export default combineReducers({
  user: UserReducer,
})

//We will export our UserReducer using a Redux utility called combinedReducers 
//You can add more reducers here if you want to extend the functionality of the game later.


