import {
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_BEGIN,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_BEGIN,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../constants/MainConstant';
import InitialState from '../InitialState';

export function MainReducer(state = InitialState, action) {
    switch (action.type) {
        case LOGIN_BEGIN: //Login
            return Object.assign({}, state, {
                isFetching: true
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuth: true
            });
        case LOGIN_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                isAuth: false,
                error_message: action.error_message
            });
        case LOGOUT_BEGIN: //LogOut
            return Object.assign({}, state, {
                isFetching: true
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuth: false
            });
        case LOGOUT_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                isAuth: true,
                error_message: action.error_message
            });
        case REGISTER_BEGIN: //Register
            return Object.assign({}, state, {
                isFetching: true
            });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false
            });
        case REGISTER_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                error_message: action.error_message
            });
        default:
            return state;
    }
}