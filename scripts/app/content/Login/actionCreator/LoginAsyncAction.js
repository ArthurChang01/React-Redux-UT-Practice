import "es6-promise";
import * as toastr from 'toastr';
import 'whatwg-fetch';
import { LoginRequestAction } from './LoginRequestAction';
import { LoginSuccessAction } from './LoginSuccessAction';
import { LoginFailAction } from './LoginFailAction';

export function LoginAsyncAction(username, password, api, browserHistory, storage) {
    return dispatch => {
        let fetch = api || window.fetch;

        if (!username || !password) {
            toastr.error("username or password can't be empty!");
            return;
        }

        dispatch(LoginRequestAction());

        let fetch_Parm = {
            headers: { "Content-Type": 'application/json' },
            method: 'GET',
            mode: 'cors'
        };

        return fetch(`http://localhost:3000/Members?email=${username}&password=${password}`, fetch_Parm)
            .then(resp => resp.json())
            .then(data => dispatch(LoginSuccessAction(data, browserHistory, storage)))
            .catch(err => {
                dispatch(LoginFailAction(err));
            });
    }
}