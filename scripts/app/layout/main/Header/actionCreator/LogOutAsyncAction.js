import "es6-promise";
import * as toastr from 'toastr';
import 'whatwg-fetch';
import { LOGOUT_BEGIN } from '../../../../common/constants/MainConstant';
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
                console.log(data);
                dispatch(LogOutSuccessAction());
            })
            .catch(err => {
                dispatch(LogOutFailAction(err));
            });
    }
}