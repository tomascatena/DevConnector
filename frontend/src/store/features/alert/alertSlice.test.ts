import reducer, { AlertState, alertActions, initialState } from './alertSlice';

describe('alertSlice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  test('should handle an alert being dispatched', () => {
    const dispatchedAlert = {
      showAlert: true,
      message: 'New alert',
    };

    const expectedState = {
      showAlert: true,
      message: 'New alert',
      variant: 'filled',
      severity: 'success',
      timeout: 1000
    };

    expect(reducer(initialState, alertActions.setAlert(dispatchedAlert))).toEqual(expectedState);
  });

  test('should handle an alert being dispatched with no default values', () => {
    const dispatchedAlert = {
      showAlert: true,
      message: 'New alert',
      variant: 'outlined',
      severity: 'error',
      timeout: 4000
    } as AlertState;

    expect(reducer(initialState, alertActions.setAlert(dispatchedAlert))).toEqual(dispatchedAlert);
  });

  test('should handle resetAlert', () => {
    const dispatchedAlert = {
      showAlert: true,
      message: 'New alert',
    };

    reducer(initialState, alertActions.setAlert(dispatchedAlert));

    expect(reducer(initialState, alertActions.resetAlert())).toEqual(initialState);
  });
});
