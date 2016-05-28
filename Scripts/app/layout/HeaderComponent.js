import * as React from 'react';
import {connect} from 'react-redux';
import {Link,browserHistory} from 'react-router';

import LoginStateComponent from '../login/components/LoginStateComponent';
import {LogOutAction} from '../login/actionCreators/LogOutAction';
import {LOGOUT} from '../login/constants/LoginConstant';

export const HeaderComponent = (Props) => {
    return <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand">應用程式名稱</a>
            </div>
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li> <Link to="/">首頁</Link> </li>
                    <li> <Link to="/about">關於</Link> </li>
                    <li> <Link to="/contact">連絡方式</Link> </li>
                </ul>
                <LoginStateComponent isAuth={Props.isAuth} name={Props.name} LogOut={Props.LogOut}  />
            </div>
        </div>
    </div>;
};

const mapStateToProps = (state) => {
    return {
        isAuth : state.isAuth,
        name : state.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        LogOut : ()=>{
            console.log("LogOut is called");
            dispatch(LogOutAction());
            browserHistory.push('/');
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);