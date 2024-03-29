import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux' ;
import userReducer from './reducers/user-reducer.js'

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })

);

const store = createStore(
  userReducer,
  {
    // list of users
    users: [{id:'', name: '', surname: ''}],
    // property for actual user in update input and detail
    currentEditUser: {id:'', name: '', surname: ''},
    currentDetailUser: {id:'', name: '', surname: ''},
    // switchers for hiding components
    detailDivIsHidden: true,
    updateDivIsHidden: true,

  },
allStoreEnhancers
 );

 ReactDOM.render(<Provider store={store}><App/> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
