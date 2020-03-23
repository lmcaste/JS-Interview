
import React, { Component } from 'react';
import { inject,observer } from 'mobx-react';

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: #5f2c82;
`;

class UserList extends Component {
  render() { 
  const { store } = this.props;
  const { userRepos, userOrgs } = this.props.store.app;

  
    return (
      <div className="list-results">
        <div>
          <h2>List of Repositories</h2>
          {store.app.loading ?
          <ClipLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={"true"}
          />: <p/>}
          {userRepos.length ? (
           <div>
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
