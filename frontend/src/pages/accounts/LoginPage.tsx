import React, { useState } from 'react';
import { Box, Grid, Container } from '@mui/material';
import LoginForm from '../../features/login/LoginForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import AlreadySignedInCard from '../../features/login/AlreadySignedInCard';
import CircularSpinner from '../../features/spinners/CircularSpinner';
import { useLoginMutation } from '../../redux/slices/BlogrApiSlice';

type Props = {};

const LoginPage = (props: Props) => {
  const { user } = useSelector((state: RootState) => state.userDetails);
  const [login, { isLoading }] = useLoginMutation();

  return (
    <Container>
      <Grid container item spacing={4} sx={{ pt: 5, minHeight: '100vh' }}>
        <Grid
          item
          xs={12}
          lg={5}
          sx={{ alignSelf: 'center', justifySelf: 'center' }}
        >
          {isLoading ? (
            <CircularSpinner />
          ) : user ? (
            <AlreadySignedInCard />
          ) : (
            <LoginForm />
          )}
        </Grid>
        <Grid item xs={12} lg={7} sx={{ alignSelf: 'stretch' }}>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            tempore cupiditate ullam quo, recusandae, in asperiores temporibus
            impedit eveniet maxime nihil itaque enim necessitatibus.
          </h2>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
