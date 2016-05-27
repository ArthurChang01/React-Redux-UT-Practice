import {LOGIN} from '../constants/LoginConstant';

export function LoginAction(email, password){
    return {
        type:LOGIN,
        email,
        password
    };
}