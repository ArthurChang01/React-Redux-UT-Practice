import {LOGOUT} from '../constants/LogOutConstant';
import InitState from '../../../common/InitState';

export function LogOutReducer(state=InitState, action) {
    switch(action.type){
        case LOGOUT:
            let rtn= Object.assign({},state,{isAuth:false});

            return rtn;
        default:
            return state;
    }
}
