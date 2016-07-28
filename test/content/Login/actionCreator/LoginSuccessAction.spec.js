import should from 'should';
import { browserHistory } from 'react-router';
import sinon from 'sinon';
import storageMock from '../../../mockObjs/sessionStorageMock';
import { LoginSuccessAction } from '../../../../scripts/app/content/Login/actionCreator/LoginSuccessAction';
import { LOGIN_SUCCESS } from '../../../../scripts/app/common/constants/MainConstant';


describe('Login Success Action', () => {
    let sandBox = null;
    let browserHistoryMock = null;

    before(() => {
        sandBox = sinon.sandbox.create();
        browserHistoryMock = sandBox.stub(browserHistory);
    });

    after(() => {
        sandBox.restore();
    });

    it('should create an action to Login success request', () => {
        //Arrange
        let storage = storageMock();

        const token = 'zaq1@WSX';
        const expectionAction = {
            type: LOGIN_SUCCESS,
            data: token
        };

        //Act
        const actualAction = LoginSuccessAction(token, browserHistoryMock, storage);

        //Assert
        actualAction.should.be.eql(expectionAction);
    });

});