import * as React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
 
import {RegisterAction} from '../actionCreators/RegisterAction';
import {LoginAction} from '../actionCreators/LoginAction';

export class RegisterComponent extends React.Component {
    constructor(Props){
        super(Props);
    }
    
    _onSubmit(){
        let email = this.refs.email.value,
            password = this.refs.password.value,
            confirm_password = this.refs.confirm_password.value;
        this.props.onSubmit(email, password, confirm_password);
    }
    
    render() {
        return <div>
            <h2> 註冊.</h2>
            <div className="row">
                <div className="col-md-8">
                    <section id="loginForm">
                        <form method="post" className="form-horizontal" role="form">
                            <h4>建立新的帳戶。</h4>
                            <hr />
                            <div className="form-group">
                                <label className="col-md-2 control-label">電子郵件</label>
                                <div className="col-md-10">
                                    <input type="email" className="form-control" ref="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">密碼</label>
                                <div className="col-md-10">
                                    <input type="password" className="form-control" ref="password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">確認密碼</label>
                                <div className="col-md-10">
                                    <input type="password" className="form-control" ref="confirm_password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-offset-2 col-md-10">
                                    <input type="submit" value="註冊" className="btn btn-default" onClick={this._onSubmit.bind(this)} />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (email, password, confirm_password)=>{
            dispatch(RegisterAction(email, password, confirm_password));
            dispatch(LoginAction(email, password));
            browserHistory.push('/');
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(RegisterComponent);