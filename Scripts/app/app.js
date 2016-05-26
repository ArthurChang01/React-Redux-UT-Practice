import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import AppComponent from './AppComponent';
import {HomeComponent, AboutComponent, ContactComponent} from './content';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={AppComponent}>
            <IndexRoute component={HomeComponent} />
            <Route path="about" component={AboutComponent} />
            <Route path="contact" component={ContactComponent} />
        </Route>
    </Router>,
    document.getElementById('mount'));

