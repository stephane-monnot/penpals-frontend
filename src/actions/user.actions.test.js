import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { userActions } from './';
import { userConstants } from '../constants';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async userActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates USERS_LOGIN_SUCCESS when logging has been done', () => {
    fetchMock
      .postOnce('/users/authenticate', {
        body: { username: 'monnot.stephane@gmail.com', password: 'mysecurepassword' },
        headers: { 'content-type': 'application/json' }
      });


    const expectedActions = [
      { type: userConstants.LOGIN_REQUEST, user: { username: 'monnot.stephane@gmail.com' } },
      {
        type: userConstants.LOGIN_SUCCESS,
        user: { username: 'monnot.stephane@gmail.com', password: 'mysecurepassword' }
      }
    ];
    const store = mockStore({ user: [] });

    return store.dispatch(userActions.login('monnot.stephane@gmail.com', 'mysecurepassword')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
