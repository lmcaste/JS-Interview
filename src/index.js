import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import {MobxRouter, startRouter} from 'mobx-router';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="footer">
          <img src={require('../src/assets/logo-large.png')} className="github" alt="git-hub-logo"/>
          <img src={require('../src/assets/mini-logo.svg')} className="cathub" alt="cat-hub-logo"/>
      </div>
    </div>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
