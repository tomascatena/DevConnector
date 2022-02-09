import express from 'express';
import postsRoute from './posts/posts.route';
import authRoute from './auth/auth.route';
import profileRoute from './profile/profile.route';
import usersRoute from './users/users.route';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: usersRoute,
  },
  {
    path: '/profile',
    route: profileRoute,
  },
  {
    path: '/posts',
    route: postsRoute,
  },
];

defaultRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
