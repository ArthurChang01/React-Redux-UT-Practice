import {LOGIN_FAIL} from '../../constants/LoginConstant';

export function LoginFailAction(err_msg){
    return {
        type: LOGIN_FAIL,
        error_message: err_msg
    };
}