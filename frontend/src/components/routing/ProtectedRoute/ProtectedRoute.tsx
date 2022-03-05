import React, { FC } from 'react';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { ROUTES } from '@constants/routes';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export type LocationState = {
  from: Location;
};

type Props = {
  children: JSX.Element;
  redirectPath?: string;
};

const ProtectedRoute: FC<Props> = ({
  children,
  redirectPath = ROUTES.LOGIN,
}) => {
  const location = useLocation();
  const { isAuthenticated } = useTypedSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} />;
  }

  return children ?? <Outlet />;
};

export default ProtectedRoute;
