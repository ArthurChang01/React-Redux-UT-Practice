import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import LayoutComponent from './LayoutComponent';
import {HomeComponent, AboutComponent, ContactComponent} from './content';
import {LoginComponent, RegisterComponent} from './login';
import {InitState} from './common/InitState';
import {LoginReducer} from './login/reducers/LoginReducer';

const store = createStore(
  LoginReducer,
  InitState,
  applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={LayoutComponent}>
                <IndexRoute component={HomeComponent} />
                <Route path="about" component={AboutComponent} />
                <Route path="contact" component={ContactComponent} />
                <Route path="login" component={LoginComponent} />
                <Route path="register" component={RegisterComponent} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('mount'));

