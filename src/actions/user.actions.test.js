import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { userActions } from './';
import { userConstants } from '../constants';
import { alertConstants } from '../constants';
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
      .postOnce('https://api.penpals.nanoka.fr/auth/login', {
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

  it('creates USERS_REGISTER_SUCCESS when signup has been done', () => {
    fetchMock
      .postOnce('https://api.penpals.nanoka.fr/signup', {
        body: {
          name: 'Nanoka',
          email: 'monnot.stephane@gmail.com',
          password: 'mysecurepassword',
          password_confirmation: 'mysecurepassword'
        },
        headers: { 'content-type': 'application/json' }
      });


    const expectedActions = [
      { type: userConstants.REGISTER_REQUEST,
        user: {
          name: 'Nanoka',
          email: 'monnot.stephane@gmail.com',
          password: 'mysecurepassword',
          password_confirmation: 'mysecurepassword'
        }
      },
      {
        type: userConstants.REGISTER_SUCCESS,
        user: {
          name: 'Nanoka',
          email: 'monnot.stephane@gmail.com',
          password: 'mysecurepassword',
          password_confirmation: 'mysecurepassword'
        }
      },
      {
        type: alertConstants.SUCCESS,
        message: 'Registration successful'
      }
    ];
    const store = mockStore({ user: [] });

    return store.dispatch(userActions.register({
      name: 'Nanoka',
      email: 'monnot.stephane@gmail.com',
      password: 'mysecurepassword',
      password_confirmation: 'mysecurepassword'
    })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
