#include <eosiolib/eosio.hpp>

using namespace std;
using namespace eosio;
class [[eosio::contract]] cardgame : public eosio::contract {

  private:

    //Use multi index table(in-memory database) to tell EOSIO what data we are goin to store in it.
    struct user_info {
      name            username; //name: a type defined in EOSIO which is a class that contains a base32 string encoded as 64-bit unsigned integer as value
      uint16_t        win_count = 0;
      uint16_t        lost_count = 0;
      
      auto primary_key() const { return username.value; } //username is player name. let's use it as our primary key
      //The multi index table looks for a getter function called primary_key(). 
      //This must use the first field in the struct and will be used by the compiler to add the primary key.
    };
    typedef eosio::multi_index<name("users"), user_info> users_table; 
    //use the multi index table template to create a type that refers to a multi index table.
    //users --> Our new type will refer to a table called 'users'.
    //users_table --> To alias our type as 'users_table'
    //The multi index table definition, which takes two arguments:
    //(1) the table name
    //(2) the struct defining what data we intend to store in the multi index table

    //create a varable for the multi index table
    users_table _users;

  public:
    //initialize the variable _users in our smart contract constructor.
    cardgame( name receiver, name code, datastream<const char*> ds ):contract(receiver, code, ds), _users(receiver, receiver.value) {}

    //data in a multi index table is identified by 4 pieces of information: 
    // (1) code, (2) scope, (3) table name , (4) primary key
    //_user(receiver, receiver.value) -->  provide 'code' and 'scope'
    //name("users") --> provide 'table name'
    //primary_key() --> provide the 'primary key'

    [[eosio::action]]
    void login(name username);
};
