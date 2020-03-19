import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import UserList from './pages/UserList';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={'./list'}>
          <button variant="raised">
              Go to List
          </button>
        </Link>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={UserList}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
