import 'babel-polyfill';
import 'es6-promise';
import 'isomorphic-fetch';
import {LoginAsyncAction} from '../Login/LoginAsyncAction';
import {RegisterRequestAction} from './RegisterRequestAction';
import {RegisterSuccessAction} from './RegisterSuccessAction';
import {RegisterFailAction} from './RegisterFailAction';

export function RegisterAsyncAction(email, password, confirmed_password) {
    if (password !== confirmed_password)
        throw new Error("password is not matched confirmed_password");

    return dispatch => {
        dispatch(RegisterRequestAction());

        let fetch_Parm = {
            headers:{"Content-Type":'application/json'},
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({email:email,"password":password})
        };

        fetch('http://localhost:3000/Members', fetch_Parm)
            .then(resp => resp.json())
            .then(data => {
                dispatch(RegisterSuccessAction(data));
                dispatch(LoginAsyncAction(email,password));
            })
            .catch(err => {
                dispatch(RegisterFailAction(err));
            });
    }
}