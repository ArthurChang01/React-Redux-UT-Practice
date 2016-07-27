import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import MainLayoutComponent from './layout/main/MainLayoutComponent';
import {AboutComponent, ContactComponent, HomeComponent, LoginComponent, RegisterComponent} from './content';

export function routerConfig(){
    return (
        <Router history={browserHistory}>
            <Route path="/" component={MainLayoutComponent}>
                <IndexRoute component={HomeComponent} />
                <Route path="about" component={AboutComponent} />
                <Route path="contact" component={ContactComponent} />
                <Route path="login" component={LoginComponent} />
                <Route path="register" component={RegisterComponent} />
            </Route>
        </Router>
    );
}