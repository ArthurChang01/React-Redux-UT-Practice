import {browserHistory} from 'react-router';

import {LoginRequestAction} from './LoginRequestAction';
import {LoginSuccessAction} from './LoginSuccessAction';
import {LoginFailAction} from './LoginFailAction';

export function LoginAsyncAction(email, password) {
    return dispatch => {
        dispatch(LoginRequestAction());

        let fetch_Parm = {
            method: 'GET',
            mode: 'cors'
        };

        fetch(`http://localhost:3000/Members?email=${email}&password=${password}`, fetch_Parm)
            .then(resp => resp.json())
            .then(data => {
                if(data.length==0)
                    dispatch(LoginFailAction('fail'));
                else {
                    dispatch(LoginSuccessAction(data));
                    browserHistory.push('/');
                }
            })
            .catch(err => {
                dispatch(LoginFailAction(err));
            });
    }
}