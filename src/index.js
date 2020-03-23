import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import {MobxRouter, startRouter} from 'mobx-router';

//mobx
import {Provider} from 'mobx-react';
import store from './mobx/store';

//router
import views from './config/views';
startRouter(views, store);


render((
    <Provider store={store}>
    <div className="index">
      <h1>{store.app.title}</h1>
      <MobxRouter/>
    </div>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// playing around in the console