import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
        <NavBar />

      <Switch>
         <HomePage />
      </Switch>
      </div>
<<<<<<< HEAD
    )
=======
      </Router>
    );
>>>>>>> c648b929f28dae6452896ceafa858fbbf114f5ec
  }
}

export default App;
