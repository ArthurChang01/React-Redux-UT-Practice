import * as React from 'react';

export default class RegisterComponent extends React.Component {
    render() {
        return <div>
            <h2> 登入.</h2>
            <div className="row">
                <div className="col-md-8">
                    <section id="loginForm">
                        <form method="post" className="form-horizontal" role="form">
                            <h4>建立新的帳戶。</h4>
                            <hr />
                            <div className="form-group">
                                <label className="col-md-2 control-label">電子郵件</label>
                                <div className="col-md-10">
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">密碼</label>
                                <div className="col-md-10">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">確認密碼</label>
                                <div className="col-md-10">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-offset-2 col-md-10">
                                    <input type="submit" value="註冊" className="btn btn-default" />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>;
    }
}