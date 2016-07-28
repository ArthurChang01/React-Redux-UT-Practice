require("../../CSS/bootstrap/bootstrap.css");
require("../../CSS/font-awesome/font-awesome.css");
require("../../CSS/toastr/toastr.css");
require("../../CSS/main.css");

import "babel-polyfill";
import "es5-sham";
import "es5-shim";
import "es6-promise";

import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {MainReducer} from './common/reducers/MainReducer';
import InitialState from './common/InitialState';
import {routerConfig} from './app.router.js';

const store = createStore(
  MainReducer,
  InitialState,
  applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        {routerConfig()}
    </Provider>,
    document.getElementById('mount'));