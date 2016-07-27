import * as toastr from 'toastr';

import { REGISTER_SUCCESS } from '../../../constants/MainConstant';

export function RegisterSuccessAction(err_msg) {
    toastr.error(err_msg, "Register success!");

    return {
        type: REGISTER_SUCCESS,
        error_message: err_msg
    };
}