import { alertActions } from './';
import { alertConstants } from '../constants';

describe('alertActions', () => {
  it('should create an action to create a success alert', () => {
    const message = 'Successfully logged';
    const expectedAction = {
      type: alertConstants.SUCCESS,
      message
    };
    expect(alertActions.success(message)).toEqual(expectedAction);
  });

  it('should create an action to create an error alert', () => {
    const message = 'An error occured';
    const expectedAction = {
      type: alertConstants.ERROR,
      message
    };
    expect(alertActions.error(message)).toEqual(expectedAction);
  });

  it('should create an action to clear alert', () => {
    const expectedAction = {
      type: alertConstants.CLEAR
    };
    expect(alertActions.clear()).toEqual(expectedAction);
  });
});
