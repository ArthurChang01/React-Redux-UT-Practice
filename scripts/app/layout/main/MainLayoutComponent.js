import React,{Component} from 'react';

import HeaderComponent from './Header/HeaderComponent';
import FooterComponent from './FooterComponent';

export default class MainLayoutComponent extends Component {
    render() {
        return <div>
            <HeaderComponent />
            <div className="container body-content">
                {this.props.children}
                <hr />
                <FooterComponent />
            </div>
        </div>;
    }
}