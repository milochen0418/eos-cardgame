/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

*/
// React core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
//import { Login } from './';
import Login from './components/Login';
import Game from './components/Game/Game';
class App extends Component {

  render() {
    // Extract data from state and props ('user' is from redux)
    const { user: { name } } = this.props;

    // If the username is set in redux, display the Game component
    // If the username is NOT set in redux, display the Login component

    return (
      <div className="App">
        { name && <Game /> }
        { !name && <Login /> }
      </div>
    );
  }
}

//export default App;

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;
// Export a redux connected component
export default connect(mapStateToProps)(App);