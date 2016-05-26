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
                        <li> <Link to="/">首頁</Link> </li>
                        <li> <Link to="/about">關於</Link> </li>
                        <li> <Link to="/contact">連絡方式</Link> </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/register">註冊</Link></li>
                        <li><Link to="/login">登入</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    }
}