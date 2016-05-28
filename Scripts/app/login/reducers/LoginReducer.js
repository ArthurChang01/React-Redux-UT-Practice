import {LoginAction} from '../actionCreators/LoginAction';
import {LOGIN, LOGOUT} from '../constants/LoginConstant';
import InitState from '../../common/InitState';

export function LoginReducer(state = InitState, action) {

    switch (action.type) {
        case LOGIN:
            let arMem = InitState.Members.filter(val => {
                return val.email === action.email &&
                    val.password === action.password
            });
            let memId = arMem.length > 0 ? arMem[0].Id : -1;

            if (memId === -1) return state;

            return Object.assign({}, state, {
                isAuth: true
            });
        case LOGOUT:
            return Object.assign({}, state, {
                isAuth: false
            });
        default:
            return state;
    }
}