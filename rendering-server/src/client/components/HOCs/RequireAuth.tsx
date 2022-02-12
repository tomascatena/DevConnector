import React from 'react';
import { useTypedSelector } from '../../hooks';
import { Redirect } from 'react-router-dom';

const RequireAuth = <T,>(WrappedComponent: React.ComponentType<T>) => {
  return (props: T) => {
    const { currentUser } = useTypedSelector((state) => state.auth);

    switch (currentUser) {
      case false:
        return <Redirect to='/' />;
      case null:
        return <div>Loading...</div>;
      default:
        return <WrappedComponent {...props} />;
    }
  };
};

export default RequireAuth;
