import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import AppComponent from './AppComponent';
import {HomeComponent, AboutComponent, ContactComponent} from './content';
import {LoginComponent, RegisterComponent} from './login';

import {LoginReducer} from './login/Login/reducers/LoginReducer';
import {LogOutReducer} from './login/LoginState/reducers/LogOutReducer';

let store = createStore(
    combineReducers({
        LoginReducer: LoginReducer,
        LogOutReducer: LogOutReducer
    })
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppComponent}>
                <IndexRoute component={HomeComponent} />
                <Route path="about" component={AboutComponent} />
                <Route path="contact" component={ContactComponent} />
                <Route path="login" component={LoginComponent} />
                <Route path="register" component={RegisterComponent} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('mount'));

