import * as React from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
 
import {LoginAsyncAction} from '../actionCreators/Login/LoginAsyncAction';
 
export class LoginComponent extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return <div className="container body-content">
            <h2> 登入.</h2>
            <div className="row">
                <div className="col-md-8">
                    <section id="loginForm">
                        <form method="post" className="form-horizontal" role="form" novalidate="novalidate">
                            <h4>使用本機帳戶登入。</h4>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="email" className="col-md-2 control-label">電子郵件</label>
                                <div className="col-md-10">
                                    <input type="email" name="email" className="form-control" ref="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">密碼</label>
                                <div className="col-md-10">
                                    <input type="password" className="form-control" ref="password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-offset-2 col-md-10">
                                    <div className="checkbox">
                                        <input type="checkbox" />
                                        <label>記住我</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-offset-2 col-md-10">
                                    <input type="button" value="登入" className="btn btn-default" onClick={()=>this.props.onSubmit(this.refs.email.value, this.refs.password.value)} />
                                </div>
                            </div>
                            <p>
                                <Link to="/register">註冊為新使用者</Link>
                            </p>
                            * 請在啟用密碼重設功能的帳戶確認之後啟用此項目
                        </form>
                    </section>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (email, password) => { 
            dispatch(LoginAsyncAction(email, password));
            browserHistory.push('/');
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

