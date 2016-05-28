import {REGISTER} from '../constants/LoginConstant';

export function RegisterAction(email, password, confirm_password) {
    if(password !== confirm_password)
        throw new Error("password is not matched with confirmed password");
    
    return {
        type:REGISTER,
        email,
        password,
        confirm_password
    };
} 