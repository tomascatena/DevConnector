import React, { FC } from 'react';
import Header from './components/Header';
import { fetchCurrentUser } from './state/auth/auth.thunk';
import createStore from '../helpers/createStore';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const App: FC<RouteConfigComponentProps> = ({ route }) => {
  return (
    <div>
      <Header />

      {renderRoutes(route?.routes)}
    </div>
  );
};

const loadData = (store: ReturnType<typeof createStore>) => {
  return store.dispatch(fetchCurrentUser());
};

export default {
  component: App,
  loadData,
};
