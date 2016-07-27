import { browserHistory } from 'react-router';
import * as toastr from 'toastr';

import { LOGIN_SUCCESS } from '../../../constants/MainConstant';

export function LoginSuccessAction(token) {
    browserHistory.push('/');
    toastr.success('LogIn successfully!');
    sessionStorage.setItem("auth_token", token);

    return {
        type: LOGIN_SUCCESS,
        data: token
    };
}