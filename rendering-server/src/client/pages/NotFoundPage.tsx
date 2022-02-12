import React, { FC } from 'react';
import { CustomStaticContext } from '../../server';
import { RouteConfigComponentProps } from 'react-router-config';

const NotFoundPage: FC<RouteConfigComponentProps> = ({
  staticContext = {},
}) => {
  (staticContext as CustomStaticContext).notFound = true;

  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default { component: NotFoundPage };
