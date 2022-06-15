import React from 'react';
import {
  Typography,
  Divider,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
} from '@mui/material';

import PersonAdd from '@mui/icons-material/PersonAdd';
import Avatar from '@mui/material/Avatar';
import Settings from '@mui/icons-material/Settings';
import { IoLogOutOutline, IoPersonCircleOutline } from 'react-icons/io5';
import {
  resetCredentials,
  UserDetailsSliceType,
} from '../../../redux/slices/UserDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../../redux/store';

type Props = {};

const UserIconMenu = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error }: UserDetailsSliceType = useSelector(
    (state: RootState) => state.userDetails
  );

  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const menuOpen = Boolean(menuAnchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => setMenuAnchorEl(null);

  const handleLogout = () => dispatch(resetCredentials());
  return (
    <>
      <Tooltip title='Account settings'>
        <IconButton
          onClick={handleOpenMenu}
          size='small'
          aria-controls={menuOpen ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={menuOpen ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }} src={user?.avatar}>
            {user?.firstName.charAt(1).toUpperCase()}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={menuAnchorEl}
        id='account-menu'
        open={menuOpen}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <IoPersonCircleOutline style={{ fontSize: '1.35rem' }} />
          </ListItemIcon>
          My Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IoPersonCircleOutline style={{ fontSize: '1.35rem' }} />
          </ListItemIcon>
          My account
        </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <IoLogOutOutline style={{ fontSize: '1.35rem' }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserIconMenu;
