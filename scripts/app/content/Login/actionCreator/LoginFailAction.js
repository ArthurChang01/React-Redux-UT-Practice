import * as toastr from 'toastr';

import { LOGIN_FAIL } from '../../../common/constants/MainConstant';

export function LoginFailAction(err_msg) {
    toastr.error(err_msg, "Login fail!");

    return {
        type: LOGIN_FAIL,
        error_message: err_msg
    };
}