import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Divider, Slide, Typography } from '@mui/material';
import UserPostsCollection from './UserPostsCollection';
import UserFollowingCollection from './UserFollowingCollection';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type Props = {};

const ProfileBreakdownTabs = (props: Props) => {
  const userDetails = useSelector((state: RootState) => state.userDetails);
  const user = userDetails.user;
  const [activeTab, setActiveTab] = useState('following');
  const [postsActive, setPostsActive] = useState(false);
  const [followingActive, setFollowingsActive] = useState(true);

  const tabStyles = {
    textTransform: 'none',
    fontWeight: 'normal',
    letterSpacing: '0.00938em',
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);

    if (newValue === 'my-posts') {
      setPostsActive(true);
      setFollowingsActive(false);
    } else {
      setPostsActive(false);
      setFollowingsActive(true);
    }
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        textColor='secondary'
        indicatorColor='secondary'
        aria-label='secondary tabs example'
      >
        <Tab
          value='following'
          sx={tabStyles}
          label={`Following (${user?.following.length})`}
        />
        <Tab value='my-posts' sx={tabStyles} label='My posts (2)' />
      </Tabs>
      <Divider />
      <Box sx={{ mt: 2 }}>
        <Slide
          direction='right'
          in={postsActive}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 500, exit: 100 }}
        >
          <Box sx={{ zIndex: 2 }}>
            <UserPostsCollection />
          </Box>
        </Slide>

        <Slide
          direction='right'
          in={followingActive}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 500, exit: 100 }}
        >
          <Box sx={{ zIndex: 2 }}>
            <UserFollowingCollection />
          </Box>
        </Slide>
      </Box>
    </Box>
  );
};
export default ProfileBreakdownTabs;
