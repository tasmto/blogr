import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import {
  Logout,
  UserDetailsSliceType,
} from '../../redux/slices/UserDetailsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
type Props = {};

const AlreadySignedInCard = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error }: UserDetailsSliceType = useSelector(
    (state: RootState) => state.userDetails
  );

  const handleLogout = () => dispatch(Logout());

  return (
    <Card
      sx={{
        display: 'flex',
        flexFlow: 'row wrap',
        boxShadow: 'none',
        position: 'relative',
        overflow: 'visible',
        maxWidth: { xs: '100%', lg: '400px' },
        m: 'auto',
      }}
    >
      <CardMedia
        component='img'
        alt={`${user?.firstName}'s profile picture`}
        height='60'
        width='60'
        image={user?.avatar}
        sx={{
          objectFit: 'contain',
          width: '60px',
          backgroundColor: 'none',
          position: 'absolute',
          top: '-20px',
          right: '20px',
          overflow: 'visible',
        }}
      />
      <Paper sx={{ p: 4, width: '100%' }} variant='outlined'>
        <CardContent>
          <Typography gutterBottom variant='h2' component='h2'>
            Hey {user?.firstName}
          </Typography>
          <Typography variant='body1' component='p' color='text.secondary'>
            Seems like you have already logged in, but since you are on this
            page already; <strong>what would you like to do?</strong>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            color='secondary'
            size='small'
            onClick={handleLogout}
          >
            Logout
          </Button>
          <Button
            role='link'
            variant='contained'
            size='small'
            onClick={() => navigate('/profile')}
          >
            Visit my Profile
          </Button>
        </CardActions>
      </Paper>
    </Card>
  );
};

export default AlreadySignedInCard;
