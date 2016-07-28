import should from 'should';
import sinon from 'sinon';
import { LoginFailAction } from '../../../../scripts/app/content/Login/actionCreator/LoginFailAction';
import { LOGIN_FAIL } from '../../../../scripts/app/common/constants/MainConstant';

describe('Login Fail Action', () => {

    it('should create an action to Login fail request', () => {
        //Arrange
        const msg = 'fail';
        const expectionAction = {
            type: LOGIN_FAIL,
            error_message: msg
        };

        //Act
        const actualAction = LoginFailAction(msg);

        //Assert
        actualAction.should.be.eql(expectionAction);
    });

});