import React, { useState } from 'react';
import { Box, Grid, Container } from '@mui/material';
import LoginForm from '../../features/login/LoginForm';
import { login } from '../../redux/actions/UserDetailsActions';

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <Container>
      <Grid container item spacing={4} sx={{ pt: 5, minHeight: '100vh' }}>
        <Grid item xs={12} lg={5} sx={{ alignSelf: 'center' }}>
          <LoginForm />
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
