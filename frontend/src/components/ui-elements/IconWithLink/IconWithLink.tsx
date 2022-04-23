import { Link, Tooltip } from '@mui/material';
import { addProtocolIfMissing } from '@utils/URLs/URLs';
import React, { FC } from 'react';

type Props = {
  icon: JSX.Element;
  href: string | null | undefined;
  tooltipText?: string
}

const IconWithLink:FC<Props> = ({ icon, href, tooltipText = '' }) => {
  return (
    <>
      {
        href &&
        <Tooltip title={tooltipText || `Go to ${href}`}>
          <Link
            href={addProtocolIfMissing(href)}
            target='_blank'
            rel='noopener noreferrer'
          >
            {icon}
          </Link>
        </Tooltip>
      }
    </>
  );
};

export default IconWithLink;
