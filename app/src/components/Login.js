import React, { Component } from 'react';
// Components
//import { Button } from 'components';
import { Button } from 'react-bootstrap';

class Login extends Component {

  constructor(props) {
    // Inherit constructor
    super(props);
    // State for form data and error message
    this.state = {
      form: {
        username: '',
        key: '',
        error: ''
      },
    }

    // Bind functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Runs on every keystroke to update the React state
  handleChange(event) {
    const { name, value } = event.target;
    const { form } = this.state;

    this.setState({
      form: {
        ...form,
        [name]: value,
        error: ''
      },
    });
  }

  // Handle form submission to call api
  handleSubmit(event) {
    // Stop the default form submit browser behaviour
    event.preventDefault();
    console.log("handleSubmit  !! ");
    // TODO: submit transactions to smart contract

    // Extract `form` state
    const { form } = this.state;
    // Extract `setUser` of `UserAction` and `user.name` of UserReducer from redux
    const { setUser } = this.props;
    // Send a login transaction to the blockchain by calling the ApiService,
    // If it successes, save the username to redux store
    // Otherwise, save the error state for displaying the message
    return ApiService.login(form)
      .then(() => {
        setUser({ name: form.username });
      })
      .catch(err => {
        this.setState({ error: err.toString() });
      });

    /*
      You can see we have implemented handleSubmit() function in Login.jsx. 
      The sequence of events after a user has clicked the “CONFIRM” button in the form are:

      When a player presses the “CONFIRM” button, it will trigger the form submission and 
      the handleSubmit() function will be invoked. Inside handleSubmit(), we will invoke 
      the ApiService.login() function which will call the login action of the smart contract.
      
      If the login is successful:
      We will fire the SET_USER action.
      The UserReducer will receive the action and update the Redux store, 
      storing the name attribute for the current user. All other values in that object stay the same.

      If the login failed:
      We will store the blockchain error message in the Login Form state variable error.
    
    */


  }

  render() {
    // Extract data from state
    const { form, error } = this.state;

    return (
      <div className="Login">
        <div className="title">Elemental Battles - powered by EOSIO</div>
        <div className="description">Please use the Account Name and Private Key generated in the previous page to log into the game.</div>
        <form name="form" onSubmit={ this.handleSubmit }>
          <div className="field">
            <label>Account name</label>
            <input
              type="text"
              name="username"
              value={ form.username }
              placeholder="All small letters, a-z, 1-5 or dot, max 12 characters"
              onChange={ this.handleChange }
              pattern="[\.a-z1-5]{2,12}"
              required
            />
          </div>
          <div className="field">
            <label>Private key</label>
            <input
              type="password"
              name="key"
              value={ form.key }
              onChange={ this.handleChange }
              pattern="^.{51,}$"
              required
            />
          </div>

          <div className="field form-error">
            { error && <span className="error">{ error }</span> }
          </div>

          <div className="bottom">
            <Button type="submit" className="green">
              { "CONFIRM" }
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;