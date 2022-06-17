import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import UserRoleIcon from '../roles/UserRoleIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { following, followingList } from './types';

type Props = {};

const UserFollowingCollection = (props: Props) => {
  const userDetails = useSelector((state: RootState) => state.userDetails);
  const user = userDetails.user;

  const [followingList, setFollowingList] = useState<followingList>([
    {
      _id: '1',
      avatar: 'http://localhost:3000/uploads/profiles/avatar-07.svg',
      firstName: 'Test',
      lastName: 'Namerson',
      role: 'guru',
      following: true,
    },
    {
      _id: '2',
      avatar: 'http://localhost:3000/uploads/profiles/avatar-02.svg',
      firstName: 'Test',
      lastName: 'Namerson',
      role: 'apprentice',
      following: false,
    },
    {
      _id: '3',
      avatar: 'http://localhost:3000/uploads/profiles/avatar-05.svg',
      firstName: 'Test',
      lastName: 'Namerson',
      role: 'sage',
      following: true,
    },
  ]);

  const handleToggleUnfollow = (e: React.MouseEvent<HTMLButtonElement>) => {
    // todo: Make this call to the API
    console.log('unfollow');

    setFollowingList((curList) =>
      curList.map((follow) =>
        follow._id === e.currentTarget.id
          ? { ...follow, following: !follow.following }
          : follow
      )
    );
  };

  return (
    <Container>
      {followingList && followingList.length > 0 ? (
        <Grid container spacing={2} columnSpacing={3}>
          {followingList?.map((user) => (
            <Grid
              key={user?._id}
              item
              container
              xs='auto'
              md={4}
              spacing={2}
              sx={{ alignItems: 'center' }}
              component='figure'
            >
              <Grid item>
                <Avatar
                  alt={`${user?.firstName}`}
                  src={user?.avatar}
                  sx={{ width: 60, height: 60 }}
                />
              </Grid>
              <Grid item xs component='figcaption'>
                <Typography variant='h4' sx={{}}>
                  {user?.firstName} {user?.lastName}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs='auto'>
                    <Button
                      id={user._id}
                      onClick={handleToggleUnfollow}
                      variant='text'
                      color={user?.following ? 'secondary' : 'info'}
                      sx={{
                        textTransform: 'none',
                        fontWeight: 'normal',
                        py: 0,
                        px: 0.5,
                        letterSpacing: '0.00938em',
                      }}
                    >
                      {user?.following ? 'Unfollow' : 'Follow'}
                    </Button>
                  </Grid>
                  <Grid item xs='auto' sx={{ mt: 0.5 }}>
                    <UserRoleIcon
                      type={user?.role}
                      size='small'
                      color='account'
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant='h1' sx={{ fontWeight: '500' }} color='divider'>
          Not currently following anyone
        </Typography>
      )}
    </Container>
  );
};

export default UserFollowingCollection;
