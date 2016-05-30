import {LOGIN_SUCCESS} from '../../constants/LoginConstant';

export function LoginSuccessAction(resp){
    return {
        type: LOGIN_SUCCESS,
        data: resp
    };
}