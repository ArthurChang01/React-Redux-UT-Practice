import { browserHistory } from 'react-router';
import * as toastr from 'toastr';

import { LOGOUT_SUCCESS } from '../../../../constants/MainConstant';

export function LogOutSuccessAction() {
    browserHistory.push('/');
    toastr.success('LogOut successfully!');
    sessionStorage.setItem("auth_token", null);

    return {
        type: LOGOUT_SUCCESS
    };
}