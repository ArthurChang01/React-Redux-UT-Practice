import * as toastr from 'toastr';

import {REGISTER_BEGIN} from '../../../constants/MainConstant';

export function RegisterRequestAction(){
    return {
        type: REGISTER_BEGIN
    };
}