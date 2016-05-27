import * as React from 'react';
import {Link} from 'react-router';

export default class LoginStateComponent extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        let rightSide = this.props.isAuth ?
        (
            <form id="logoutForm" className="navbar-right">
                <ul className="nav navbar-nav navbar-right">
                    <li><a title="Manage">Hello {this.props.name}!</a></li>
                    <li><a onClick={this.props.LogOut}>登出</a></li>
                </ul>
            </form>
        ) :
        (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/register">註冊</Link></li>
                <li><Link to="/login">登入</Link></li>
            </ul>
        );
        
        return rightSide;
    }
}