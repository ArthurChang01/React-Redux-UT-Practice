import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {HeaderComponent, ContentComponent, FooterComponent} from './layout';

ReactDOM.render(
    <div>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
    </div>,
    document.getElementById('mount'));

