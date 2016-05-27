import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import LoginStateComponent from '../login/LoginState/LoginStateComponent';
import {LogOutAction} from '../login/LoginState/actionCreators/LogOutAction';

export const HeaderComponent = (Props) => {
    console.log(Props);
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
                <LoginStateComponent isAuth={Props.isAuth} name={Props.name} LogOut={Props.LogOut} />
            </div>
        </div>
    </div>;
};

const mapStateToProps = (state) => {
    return {
        isAuth : state.LogOutReducer.isAuth,
        name : state.LogOutReducer.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        LogOut : ()=>{
            dispatch(LogOutAction());
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);