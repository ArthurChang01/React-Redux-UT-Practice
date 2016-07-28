import "es6-promise";
import "fetch";
import * as toastr from 'toastr';
import { LoginRequestAction } from './LoginRequestAction';
import { LoginSuccessAction } from './LoginSuccessAction';
import { LoginFailAction } from './LoginFailAction';

export function LoginAsyncAction(username, password) {
    return dispatch => {
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

        fetch(`http://localhost:3000/Members?email=${username}&password=${password}`, fetch_Parm)
            .then(resp => resp.json())
            .then(data => dispatch(LoginSuccessAction(data)))
            .catch(err => {
                dispatch(LoginFailAction(err));
            });
    }
}