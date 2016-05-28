import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import LayoutComponent from './LayoutComponent';
import {HomeComponent, AboutComponent, ContactComponent} from './content';
import {LoginComponent, RegisterComponent} from './login';

import {LoginReducer} from './login/reducers/LoginReducer';

let store = createStore(LoginReducer);

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

