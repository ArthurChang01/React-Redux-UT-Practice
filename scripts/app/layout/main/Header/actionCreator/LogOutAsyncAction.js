import "es6-promise";
import "fetch";
import * as toastr from 'toastr';
import { LogOutRequestAction } from './LogOutRequestAction';
import { LogOutSuccessAction } from './LogOutSuccessAction';
import { LogOutFailAction } from './LogOutFailAction';

export function LogOutAsyncAction(username) {
    return dispatch => {

        dispatch(LogOutRequestAction());

        let fetch_Parm = {
            headers: { "Content-Type": 'application/json' },
            method: 'GET',
            mode: 'cors'
        };

        fetch(`http://localhost:3000/Members`, fetch_Parm)
            .then(resp => resp.json())
            .then(data => {
                dispatch(LogOutSuccessAction());
            })
            .catch(err => {
                dispatch(LogOutFailAction(err));
            });
    }
}