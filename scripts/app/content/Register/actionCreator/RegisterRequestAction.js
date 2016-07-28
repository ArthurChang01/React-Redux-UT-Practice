import * as toastr from 'toastr';

import {REGISTER_BEGIN} from '../../../common/constants/MainConstant';

export function RegisterRequestAction(){
    return {
        type: REGISTER_BEGIN
    };
}