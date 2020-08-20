import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import "./assets/scss/style.scss"
import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import {BrowserRouter} from 'react-router-dom'


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules'

import {tempSetUser,check} from './modules/user'
import jsonServerProvider from 'ra-data-json-server';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

function loadUser(){
  try {
    const user = localStorage.getItem('userId');
    if(!user) return 
    store.dispatch(tempSetUser(user));
    console.log(user)
  } catch (e) {
    console.log('local Error')
  }
}

sagaMiddleware.run(rootSaga);
loadUser()


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
