import { browserHistory } from 'react-router';
import * as toastr from 'toastr';

import { LOGIN_SUCCESS } from '../../../common/constants/MainConstant';

export function LoginSuccessAction(token, browserHistoryMock, storageMock) {
    let storage = storageMock || window.sessionStorage;
    let browserHistory = browserHistoryMock || browserHistory;

    browserHistory.push('/');
    toastr.success('LogIn successfully!');
    storage.setItem("auth_token", token);

    return {
        type: LOGIN_SUCCESS,
        data: token
    };
}