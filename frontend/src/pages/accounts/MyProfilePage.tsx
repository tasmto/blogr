import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import ProfileBreakdownTabs from '../../features/profile/ProfileBreakdownTabs';
import UserRoleIcon from '../../features/roles/UserRoleIcon';
import { RootState } from '../../redux/store';

type Props = {};

const MyProfilePage = (props: Props) => {
  const userDetails = useSelector((state: RootState) => state.userDetails);
  const user = userDetails.user;

  return (
    <Container sx={{ ml: { lg: 0 } }}>
      <Grid container item spacing={4} sx={{ pt: 5 }}>
        <Grid
          container
          item
          xs={12}
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Grid
            container
            item
            xs='auto'
            spacing={2}
            sx={{ alignItems: 'center' }}
          >
            <Grid item>
              <Avatar
                alt={`${user?.firstName}`}
                src={user?.avatar}
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid item xs>
              <Typography variant='h2' sx={{ mb: 1 }}>
                {user?.firstName} {user?.lastName}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs='auto'>
                  <Typography variant='body1'>
                    @{user?.firstName}_{user?.lastName}
                  </Typography>
                </Grid>
                <Grid item xs='auto'>
                  <UserRoleIcon
                    type={user?.role}
                    size='small'
                    color='account'
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs='auto'>
            <Button variant='contained' color='secondary'>
              Follow
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h2'>Bio</Typography>
          <Typography variant='body1'>
            {user?.bio || (
              <span className='text-subtle'>The user has no bio yet</span>
            )}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <ProfileBreakdownTabs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyProfilePage;
