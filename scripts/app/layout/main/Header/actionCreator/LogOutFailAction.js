import { LOGOUT_FAIL } from '../../../../common/constants/MainConstant';
import * as toastr from 'toastr';

export function LogOutFailAction(err_msg) {
    toastr.error(err_msg, "Logout fail!");

    return {
        type: LOGOUT_FAIL,
        err_msg: err_msg
    };
}