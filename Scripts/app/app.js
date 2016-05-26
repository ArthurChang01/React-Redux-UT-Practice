import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {HeaderComponent, ContentComponent, FooterComponent} from './layout';

ReactDOM.render(
    <div>
        <HeaderComponent />
        <div className="container body-content">
            <ContentComponent />
            <hr />
            <FooterComponent />
        </div>
    </div>,
    document.getElementById('mount'));

