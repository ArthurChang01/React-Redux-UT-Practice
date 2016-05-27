import {LOGOUT} from '../constants/LogOutConstant';
import InitState from '../../../common/InitState';

export function LogOutReducer(state=InitState, action) {
    switch(action.type){
        case LOGOUT:
            return Object.assign({},state,{isAuth:false});
        default:
            return state;
    }
}
