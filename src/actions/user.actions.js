import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';

export const userActions = {
  login
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    return userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user }
  }

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }

  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}
