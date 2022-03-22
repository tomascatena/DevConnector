import React, { FC } from 'react';
import { Link } from '@mui/material';
import { addProtocolIfMissing } from '@utils/URLs';

type Props = {
  icon: JSX.Element;
  href: string | null | undefined
}

const IconWithLink:FC<Props> = ({ icon, href }) => {
  return (
    <>
      {
        href &&
        <Link
          href={addProtocolIfMissing(href)}
          target='_blank'
          rel='noopener noreferrer'
        >
          {icon}
        </Link>
      }
    </>
  );
};

export default IconWithLink;
