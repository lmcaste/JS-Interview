import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import Home from '../pages/Home';
import UserList from '../pages/UserList';

const views = {
  home: new Route({
    path: '/',
    component: <Home/>
  }),
  userlist: new Route({
    path: '/userlist',
    component: <UserList/>
  })
};
export default views;