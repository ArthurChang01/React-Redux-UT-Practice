import should from 'should';
import { LoginRequestAction } from '../../../../scripts/app/content/Login/actionCreator/LoginRequestAction';
import { LOGIN_BEGIN } from '../../../../scripts/app/common/constants/MainConstant';


describe('Login Request Action', () => {

    it('should create an action to Login request', () => {
        //Arrange
        const expectionAction = {
            type: LOGIN_BEGIN
        };

        //Act
        const actualAction = LoginRequestAction();

        //Assert
        actualAction.should.be.eql(expectionAction);
    });

});