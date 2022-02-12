import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks';

interface Props {}

const Header: FC<Props> = () => {
  const { currentUser } = useTypedSelector((state) => state.auth);

  const authButton = currentUser ? (
    <a href='/api/logout'>Logout</a>
  ) : (
    <a href='/api/auth/google'>Login</a>
  );

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          React SSR
        </Link>

        <ul className='right'>
          <li>
            <Link to='/users'>Users</Link>
          </li>

          <li>
            <Link to='/admins'>admins</Link>
          </li>

          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
