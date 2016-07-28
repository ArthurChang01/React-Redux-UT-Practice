import should from 'should';
import { MainReducer } from '../../scripts/app/common/reducers/MainReducer';
import * as constant from '../../scripts/app/common/constants/MainConstant';
import initialState from '../../scripts/app/common/InitialState';


describe('sheng reducer', () => {

    it('should return the initial state', () => {
        let actual = MainReducer(undefined, {});

        actual.should.be.eql({
            isFetching: false,
            isAuth: false
        });
    });


    it('should return login begin state', () => {
        let actual = MainReducer(undefined, { type: constant.LOGIN_BEGIN });

        actual.should.be.eql({
            isFetching: true,
            isAuth: false
        });
    });

    it('should return login success state', () => {
        let actual = MainReducer(undefined, { type: constant.LOGIN_SUCCESS });

        actual.should.be.eql({
            isFetching: false,
            isAuth: true
        });
    });

    it('should return login fail state', () => {
        let errMsg = "I'm fail";
        let actual = MainReducer(undefined, {
            type: constant.LOGIN_FAIL,
            error_message: errMsg
        });

        actual.should.be.eql({
            isFetching: false,
            isAuth: false,
            error_message: errMsg
        });
    });

});