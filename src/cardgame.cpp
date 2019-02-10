#include "gameplay.cpp"

void cardgame::login(name username) {
  // Ensure this action is authorized by the player
  require_auth(username);
  
  // Create a record in the table if the player doesn't exist in our app yet
  auto user_iterator = _users.find(username.value);
  if (user_iterator == _users.end()) {
    //If this is the first time that the player has joined our game, 
    //we will create a record for this user in the multi index table.
    user_iterator = _users.emplace(username,  [&](auto& new_user) {
      new_user.username = username;
    });
  } 
}


EOSIO_DISPATCH(cardgame, BOOST_PP_SEQ_NIL)
