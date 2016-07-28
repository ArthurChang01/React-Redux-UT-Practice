import { LOGOUT_BEGIN } from '../../../../common/constants/MainConstant';

export function LogOutRequestAction() {
    return {
        type: LOGOUT_BEGIN
    };
}
export function LogOutAsyncAction(username) {
    return dispatch => {

        dispatch(LogOutRequestAction());

        let fetch_Parm = {
            headers: { "Content-Type": 'application/json' },
            method: 'GET',
            mode: 'cors'
        };

        fetch(`http://localhost:3000/Members`, fetch_Parm)
            .then(resp => resp.json())
            .then(data => {
                dispatch(LogOutSuccessAction());
            })
            .catch(err => {
                dispatch(LogOutFailAction(err));
            });
    }
}