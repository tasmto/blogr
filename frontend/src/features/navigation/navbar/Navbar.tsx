import React from 'react';
import Logo from '../logo/Logo';
import { Box } from '@mui/system';
import MenuItems from './MenuItems';
import UserIconMenu from './UserIconMenu';

type Props = {};

const Navbar = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        height: {
          sm: '100vh',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRight: '2px solid',
        borderRightColor: 'divider',
      }}
    >
      <Box
        sx={{
          display: { sm: 'block', xs: 'none' },
          maxWidth: '50px',
          maxHeight: '30px',
          width: '50px',
          height: '30px',
        }}
        className='logo'
      >
        <Logo />
      </Box>
      <MenuItems />
      <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
        <UserIconMenu />
      </Box>
    </Box>
  );
};

export default Navbar;
