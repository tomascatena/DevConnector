import React, { FC } from 'react';

interface Props {}

const HomePage: FC<Props> = () => {
  return (
    <div className='center-align' style={{ marginTop: '200px' }}>
      <h3>Welcome</h3>

      <p>Check out this awesome features</p>
    </div>
  );
};

export default { component: HomePage };
