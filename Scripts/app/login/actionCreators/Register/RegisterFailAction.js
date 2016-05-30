import {REGISTER_FAIL} from '../../constants/LoginConstant';

export function RegisterFailAction(err_msg){
    return {
        type: REGISTER_FAIL,
        error_message: err_msg
    };
}