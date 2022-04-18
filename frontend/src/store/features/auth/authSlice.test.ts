import reducer, { authActions, initialState } from './authSlice';
import { login, register, getUser } from './auth.thunk';
import { MOCK_LOGIN_FORM, MOCK_REGISTER_FORM, MOCK_TOKENS, MOCK_USER } from '@helpers/mocks/mocks';
import axios from 'axios';
import { Store, storeConfig } from '@store/store';
import { API_ENDPOINTS } from '@constants/APIEndpoints';
import { configureStore } from '@reduxjs/toolkit';

const MOCK_REJECTED_VALUE = {
  isAxiosError: true,
  response: { data: { errors: 'Validation Errors' } },
};

const createTestStore = () => {
  const store = configureStore(storeConfig);

  return store;
};

describe('authSlice', () => {
  let store: Store;

  beforeEach(() => {
    store = createTestStore();

    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  test('should handle logout action', () => {
    const preState = {
      user: MOCK_USER,
      loading: false,
      currentRequestId: undefined,
      serverValidationErrors: null,
      error: null,
      isAuthenticated: true,
      accessToken: MOCK_TOKENS.access.token,
    };

    expect(reducer(preState, authActions.logout())).toEqual(initialState);
  });

  test('should handle hydrateAccessToken action', () => {
    const preState = {
      user: MOCK_USER,
      loading: false,
      currentRequestId: undefined,
      serverValidationErrors: null,
      error: null,
      isAuthenticated: true,
      accessToken: MOCK_TOKENS.access.token,
    };

    expect(reducer(preState, authActions.hydrateAccessToken('accessTokenFromLocalStorage')))
      .toEqual({
        ...preState,
        accessToken: 'accessTokenFromLocalStorage'
      });
  });

  describe('Auth Thunks', () => {
    describe('login', () => {
      test('login successful', async() => {
        const MOCK_RESOLVED_VALUE = { data: { user: MOCK_USER, tokens: MOCK_TOKENS } };

        const postSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce(MOCK_RESOLVED_VALUE);

        await store.dispatch(login(MOCK_LOGIN_FORM));

        const state = store.getState();

        expect(postSpy).toBeCalledWith(API_ENDPOINTS.AUTH, MOCK_LOGIN_FORM);
        expect(state.auth).toEqual({
          user: MOCK_USER,
          loading: false,
          currentRequestId: undefined,
          serverValidationErrors: null,
          error: null,
          isAuthenticated: true,
          accessToken: MOCK_TOKENS.access.token
        });
      });

      test('login rejected', async() => {
        const postSpy = jest.spyOn(axios, 'post').mockRejectedValue(MOCK_REJECTED_VALUE);

        await store.dispatch(login(MOCK_LOGIN_FORM));

        const state = store.getState();

        expect(postSpy).toBeCalledWith(API_ENDPOINTS.AUTH, MOCK_LOGIN_FORM);
        expect(state.auth).toEqual({
          user: null,
          loading: false,
          currentRequestId: undefined,
          serverValidationErrors: MOCK_REJECTED_VALUE.response.data.errors,
          error: MOCK_REJECTED_VALUE.response.data,
          isAuthenticated: false,
          accessToken: null
        });
      });
    });

    describe('register', () => {
      test('register successful', async () => {
        const MOCK_RESOLVED_VALUE = { data: { user: MOCK_USER, tokens: MOCK_TOKENS } };

        const postSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce(MOCK_RESOLVED_VALUE);

        await store.dispatch(register(MOCK_REGISTER_FORM));

        const state = store.getState();

        expect(postSpy).toBeCalledWith(API_ENDPOINTS.USERS, MOCK_REGISTER_FORM);
        expect(state.auth).toEqual({
          user: MOCK_USER,
          loading: false,
          currentRequestId: undefined,
          serverValidationErrors: null,
          error: null,
          isAuthenticated: true,
          accessToken: MOCK_TOKENS.access.token
        });
      });

      test('register rejected', async () => {
        const postSpy = jest.spyOn(axios, 'post').mockRejectedValueOnce(MOCK_REJECTED_VALUE);

        await store.dispatch(register(MOCK_REGISTER_FORM));

        const state = store.getState();

        expect(postSpy).toBeCalledWith(API_ENDPOINTS.USERS, MOCK_REGISTER_FORM);
        expect(state.auth).toEqual({
          user: null,
          loading: false,
          currentRequestId: undefined,
          serverValidationErrors: MOCK_REJECTED_VALUE.response.data.errors,
          error: MOCK_REJECTED_VALUE.response.data,
          isAuthenticated: false,
          accessToken: null
        });
      });
    });

    describe('getUser', () => {
      test('getUser successful', async () => {
        const MOCK_RESOLVED_VALUE = { data: { user: MOCK_USER, tokens: MOCK_TOKENS } };

        const postSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(MOCK_RESOLVED_VALUE);

        await store.dispatch(getUser());

        const state = store.getState();

        expect(postSpy).toBeCalledWith(API_ENDPOINTS.AUTH);
        expect(state.auth).toEqual({
          user: MOCK_USER,
          loading: false,
          currentRequestId: undefined,
          serverValidationErrors: null,
          error: null,
          isAuthenticated: true,
          accessToken: MOCK_TOKENS.access.token
        });
      });

      test('getUser rejected', async () => {
        const postSpy = jest.spyOn(axios, 'get').mockRejectedValueOnce(MOCK_REJECTED_VALUE);

        await store.dispatch(getUser());

        const state = store.getState();

        expect(postSpy).toBeCalledWith(API_ENDPOINTS.AUTH);
        expect(state.auth).toEqual({
          user: null,
          loading: false,
          currentRequestId: undefined,
          serverValidationErrors: MOCK_REJECTED_VALUE.response.data.errors,
          error: MOCK_REJECTED_VALUE.response.data,
          isAuthenticated: false,
          accessToken: null
        });
      });
    });
  });
});
