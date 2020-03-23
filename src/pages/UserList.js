
import React, { Component } from 'react';
import { inject,observer } from 'mobx-react';

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

// function UserList({ store }) {

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: #5f2c82;
`;

class UserList extends Component {

  // Initialize the state
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     userRepositories: [],
  //     userOrganizations:[] 
  //   }
  // }

  // Fetch the list on first mount
  // componentDidMount() {
  //   // this.userRepositories(this.props.location.data);
  //   this.userOrganizations();
  // }

  // async userRepositories(userName) {
  //   if (userName || userName !== "" || userName !== null) {
  //     const res = await getRepos(userName);
  //     this.setState({ userRepositories: res });
  //   }
  // }

  // async userOrganizations(userData) {
  //   if (userData || userData !== "" || userData !== null) {
  //     const data = await getUserData(userData);
  //     this.setState({ userOrganizations: data.orgs });
  //   }
  // }

  render() { 
  const { store } = this.props;
  const { router: {goTo} } = store;
  const { userRepos, userOrgs } = this.props.store.app;

  
    return (
      <div className="list-results">
        <div>
          <h2>List of Repositories</h2>
          {/* Check to see if any items are found*/}
          {store.app.loading ?
          <ClipLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={"true"}
          />: <p/>}
          {userRepos.length ? (
           <div>
           {/* Render the list of items */}
           {userRepos.map((user) => {
             return(
               <div key={user.id}>
                 {user.name}
               </div>
             );
           })}
         </div>
          ) : (
            <div>
              <h4>No List of Repositories Found</h4>
            </div>
          )
        }
        </div>
        <div>
          <h2>List of Organizations</h2>
          {/* Check to see if any items are found*/}
          {userOrgs.length ? (
            <div>
              {/* Render the list of items */}
              {userOrgs.map((org) => {
                return(
                  <div key={org.id}>
                    {org.login}
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <h4>No List Of Organizations Found</h4>
            </div>
          )
        }
        </div>
      </div>
    );
  }
}
export default inject('store')(observer(UserList));
