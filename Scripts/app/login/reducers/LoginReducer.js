import {LOGIN, LOGOUT, REGISTER} from '../constants/LoginConstant';
import InitState from '../../common/InitState';

export function LoginReducer(state = InitState, action) {

    switch (action.type) {
        case LOGIN:
            let arMem = state.Members.filter(val => {
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
        case REGISTER:
            let arMem_reg = [...state.Members.slice(0)];
            arMem_reg.push({ Id: arMem_reg.length + 1, email: action.email, password: action.password });

            let rtn = Object.assign({}, state, { Members: arMem_reg });

            return rtn;
        default:
            return state;
    }
}