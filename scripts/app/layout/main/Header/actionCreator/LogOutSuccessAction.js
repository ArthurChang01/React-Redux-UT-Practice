import { LOGOUT_SUCCESS } from '../../../../common/constants/MainConstant';
import * as toastr from 'toastr';

export function LogOutSuccessAction() {
    toastr.success("Logout success!");

    return {
        type: LOGOUT_SUCCESS
    };
}