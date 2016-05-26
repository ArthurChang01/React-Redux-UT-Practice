import * as React from 'react';
import {Link} from 'react-router';

export default class HeaderComponent extends React.Component {
    render() {
        return <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="#" className="navbar-brand">應用程式名稱</a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li> <a href="#">首頁</a> </li>
                        <li> <a href="#">關於</a> </li>
                        <li> <a href="#">連絡方式</a> </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#" id="registerLink">註冊</a></li>
                        <li><a href="#" id="loginLink">登入</a></li>
                    </ul>
                </div>
            </div>
        </div>

    }
}