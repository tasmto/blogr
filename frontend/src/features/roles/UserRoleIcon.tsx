import React from 'react';
import { SvgIcon, Tooltip, Typography } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import { Accounts } from './types';

type Props = {
  color?: 'account';
  size?: 'large' | 'small';
  type?: Accounts;
};

const UserRoleIcon = ({ color, size, type }: Props) => {
  if (!type) return null;

  const dimensions =
    size === 'large' ? '36px' : size === 'small' ? '18px' : '22px';

  return (
    <Typography variant='body1' component='span'>
      <Tooltip
        title={type}
        arrow
        placement='right'
        sx={{ backgroundColor: `user.${type}` }}
        TransitionComponent={Zoom}
      >
        <img
          src={`/icons/${type}-icon${color ? '-color' : ''}.svg`}
          style={{ height: dimensions, width: dimensions }}
        />
      </Tooltip>
    </Typography>
  );
};

export default UserRoleIcon;
