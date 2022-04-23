import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { useTypedSelector } from '@hooks/useTypedSelector';
import CustomBackdrop from '@ui-elements/CustomBackdrop/CustomBackdrop';

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
  const { isAuthenticated, loading } = useTypedSelector((state) => state.auth);

  if (loading) {
    return (
      <CustomBackdrop
        isOpen={loading}
        message='Verifying authentication status. Please wait.'
      />
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={redirectPath}
        state={{ from: location }}
      />
    );
  }

  return children ?? <Outlet />;
};

export default ProtectedRoute;
