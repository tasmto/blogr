import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {
  IoHome,
  IoHomeOutline,
  IoBookmarks,
  IoBookmarksOutline,
  IoNotifications,
  IoNotificationsOutline,
  IoReaderOutline,
  IoReader,
  IoCreate,
  IoCreateOutline,
} from 'react-icons/io5';

type Props = {};

const MenuItems = (props: Props) => {
  const [value, setValue] = React.useState('');
  const routes: Array<{
    icon: any;
    iconActive: any;
    label: string;
    path: string;
    hideOnMobile?: true;
    divider?: true;
  }> = [
    {
      icon: IoHomeOutline,
      iconActive: IoHome,
      label: 'Home',
      path: '',
    },
    {
      icon: IoNotificationsOutline,
      iconActive: IoNotifications,
      label: 'Notifications',
      path: '/notifications',
      hideOnMobile: true,
    },
    {
      icon: IoBookmarksOutline,
      iconActive: IoBookmarks,
      label: 'Bookmarks',
      path: '/bookmarks',
    },
    {
      icon: IoReaderOutline,
      iconActive: IoReader,
      label: 'My Posts',
      path: '/profile/my-posts',
      hideOnMobile: true,
    },

    {
      icon: IoCreateOutline,
      iconActive: IoCreate,
      label: 'Create',
      path: '/create',
      divider: true,
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: '100%',
        flexDirection: {
          sm: 'column',
        },

        height: {
          sm: '62%',
          xs: '100px',
        },
        position: {
          sm: 'static',
          xs: 'fixed',
        },
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: { xs: '2px solid', sm: '0' },
        borderTopColor: 'divider',
        backgroundColor: 'background.default',
        overflowX: { xs: 'auto', sm: 'none' },
      }}
      value={value}
      showLabels={false}
      onChange={handleChange}
    >
      {routes.map((route: any, i) => (
        <BottomNavigationAction
          key={i}
          className='sidebar-nav--item'
          // label={route.label}
          value={route.path}
          sx={{
            maxWidth: {
              xs: '25%',
              sm: '100%',
            },
            display: {
              sm: 'inline-flex',
              xs: route.hideOnMobile && 'none',
            },
            borderTop: `${route.divider && '1px solid'}`,
            borderTopColor: `${route.divider && 'divider'}`,
          }}
          icon={value === route.path ? <route.iconActive /> : <route.icon />}
        />
      ))}
    </BottomNavigation>
  );
};

export default MenuItems;
