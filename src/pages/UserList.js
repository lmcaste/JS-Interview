
import React, { Component } from 'react';
import { getRepos, getUserData } from '../github-api.js';

class UserList extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      userRepositories: [],
      userOrganizations:[] 
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.userRepositories(this.props.location.data);
    this.userOrganizations();
  }

  async userRepositories(userName) {
    if (userName || userName !== "" || userName !== null) {
      const res = await getRepos(userName);
      this.setState({ userRepositories: res });
    }
  }

  async userOrganizations(userData) {
    if (userData || userData !== "" || userData !== null) {
      const data = await getUserData(userData);
      this.setState({ userOrganizations: data.orgs });
    }
  }

  render() {
    const { userRepositories, userOrganizations } = this.state;

    return (
      <div className="App">
        <div>
          <h1>List of Repositories</h1>
          {/* Check to see if any items are found*/}
          {userRepositories.length ? (
           <div>
           {/* Render the list of items */}
           {userRepositories.map((user) => {
             return(
               <div key={user.name}>
                 {user.name}
               </div>
             );
           })}
         </div>
          ) : (
            <div>
              <h2>No List of Repositories Found</h2>
            </div>
          )
        }
        </div>
        <div>
          <h1>List of Organizations</h1>
          {/* Check to see if any items are found*/}
          {userOrganizations.length ? (
            <div>
              {/* Render the list of items */}
              {userOrganizations.map((item) => {
                return(
                  <div>
                    {item.login}
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <h2>No List Of Organizations Found</h2>
            </div>
          )
        }
        </div>
      </div>
    );
  }
}
export default UserList;