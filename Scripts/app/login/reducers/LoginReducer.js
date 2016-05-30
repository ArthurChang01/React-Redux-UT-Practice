import {
    LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT,
    REGISTER_BEGIN, REGISTER_SUCCESS, REGISTER_FAIL
} from '../constants/LoginConstant';
import InitState from '../../common/InitState';

export function LoginReducer(state = InitState, action) {
    switch (action.type) {
        case LOGIN_BEGIN: //Login
            return Object.assign({}, state, { isFetching: true });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, { isFetching: false, isAuth: true, Members: action.data });
        case LOGIN_FAIL:
            return Object.assign({}, state, { isFetching: false, isAuth: false, error_message: action.error_message, Members: [] });
        case LOGOUT: //Logout
            return Object.assign({}, state, { isAuth: false });
        case REGISTER_BEGIN: //Register
            return Object.assign({}, state, { isFetching: true });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, { isFetching: false });
        case REGISTER_FAIL:
            return Object.assign({}, state, { isFetching: false, error_message: action.error_message });
    }
}

/*
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
}*/