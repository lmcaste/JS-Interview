import React, { Component } from 'react';
import {Link} from 'mobx-router';
import views from '../config/views';
import { inject, observer } from "mobx-react"

class Home extends Component {
  submitReview = (e) => {
    e.preventDefault();
		this.props.store.app.userRepositories(this.state.username);
    this.props.store.app.userOrganizations(this.state.username);
	};

  handleChange = event => {
    this.setState({ username: event.target.value });
  };

  render() { 
    const {store} = this.props;
    
    return (
      <div className="App">
        <h2 className="subtitle">Insert user name to get repositories and organizations in GitHub</h2>
        <div className="input-username">
        <input
          placeholder="Insert a username"
          type="text"
          name="username"
          value={store.username}
          onChange={this.handleChange} />
        <Link to={{
          pathname: "./list",
          data: [`${store.username}`]
        }} view={views.userlist} store={store}>
          <button variant="raised" onClick={this.submitReview}> 
              Search
          </button>
        </Link>
        </div>
      </div>
    );
  }
}
export default inject('store')(observer(Home));