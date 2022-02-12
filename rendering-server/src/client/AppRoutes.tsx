import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import { RouteConfig } from 'react-router-config';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export const AppRoutes: RouteConfig[] = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      {
        ...AdminsListPage,
        path: '/admins',
      },
      {
        ...NotFoundPage,
        path: '',
      },
    ],
  },
];
