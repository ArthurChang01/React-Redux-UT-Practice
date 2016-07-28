import should from 'should';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import 'whatwg-fetch';
import storageMock from '../../../mockObjs/sessionStorageMock';
import { LoginAsyncAction } from '../../../../scripts/app/content/Login/actionCreator/LoginAsyncAction';
import { LOGIN_BEGIN, LOGIN_SUCCESS } from '../../../../scripts/app/common/constants/MainConstant';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

function jsonOk(body) {
    var mockResponse = new window.Response(JSON.stringify(body), {
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return Promise.resolve(mockResponse);
}

function jsonError(status, body) {
    var mockResponse = new window.Response(JSON.stringify(body), {
        status: status,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return Promise.reject(mockResponse);
}

describe('Login Action', () => {
    let sandBox = null;
    let fetchMock = null;
    let browserHistoryMock = null;

    before(() => {
        sandBox = sinon.sandbox.create();
        fetchMock = sandBox.stub(window, 'fetch');
        browserHistoryMock = sandBox.stub(browserHistory);
    });

    after(() => {
        sandBox.restore();
    });

    it('should emit a Login request', () => {
        //Arrange
        let username = 'a@b.c';
        let password = '1234';
        let token = '1qazXSW@';

        let expected = [
            { type: LOGIN_BEGIN },
            { type: LOGIN_SUCCESS, data: { "result": token } }
        ];
        fetchMock.returns(jsonOk({ result: token }));
        const store = mockStore({});

        //Act
        return store.dispatch(LoginAsyncAction(username, password, fetchMock, browserHistoryMock, storageMock()))
            .then(() => { // 回傳非同步的 action
                //Assert
                store.getActions().should.be.eql(expected)
            })
    });

});