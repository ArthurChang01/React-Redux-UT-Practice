import {LoginAction} from '../actionCreators/LoginAction';
import {LOGIN} from '../constants/LoginConstant';
import InitState from '../../../common/InitState';

export function LoginReducer(state=InitState,action){
    let arMem = InitState.Members.filter(val => {
        return val.email === action.email &&
               val.password === action.password}
    );
    let memId = arMem.length>0 ? arMem[0].Id : -1;
    
    if(memId === -1) return state;
    
    switch (action.type) {
        case LOGIN:
            return Object.assign({},state,{isAuth:true});
        default:
            return state;
    }
}