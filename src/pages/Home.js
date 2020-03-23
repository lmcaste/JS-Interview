import React, { Component } from 'react';
import {Link} from 'mobx-router';
import views from '../config/views';
import { inject, observer } from "mobx-react"


class Home extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     username: ''
  //   }
  // }

  submitReview = (e) => {
    e.preventDefault();
    console.log(this);
    this.props.store.app.setTitle('pepe');
		this.props.store.app.userRepositories(this.state.username);
		this.props.store.app.userOrganizations(this.state.username);
	};

  handleChange = event => {
    this.setState({ username: event.target.value });
  };

  render() { 
    const {store} = this.props;
    const {router: {goTo}} = store;
    return (
      <div className="App">
        <h2>Insert user name to get repositories and organizations in GitHub</h2>
        <Link view={views.userlist} store={store}> Go to gallery </Link>
        <input
          placeholder="Insert a username"
          type="text"
          name="username"
          value={store.username}
          onChange={this.handleChange} />
        <Link to={{
          pathname: "./list",
          data: [`${store.username}`] // your data array of objects
        }} view={views.userlist} store={store}>
          <button variant="raised" onClick={this.submitReview}> 
              Search
          </button>
        </Link>
      </div>
    );
  }
}
export default inject('store')(observer(Home));