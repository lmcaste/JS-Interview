import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    }
  }

  handleChange = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>JS Interview Project</h1>
        <h2>Insert user name to get repositories and organizations in GitHub</h2>
        <input
          placeholder="Insert a username"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange} />
        <Link to={{
          pathname: "./list",
          data: [`${this.state.username}`] // your data array of objects
        }}>
          <button variant="raised">
              Search
          </button>
        </Link>
      </div>
    );
  }
}
export default Home;