import React, { useState } from 'react';
import { Box, Grid, Container } from '@mui/material';
import RegisterForm from '../../features/register/RegisterForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import AlreadySignedInCard from '../../features/login/AlreadySignedInCard';
import CircularSpinner from '../../components/spinners/CircularSpinner';

type Props = {};

const RegisterPage = (props: Props) => {
  const {
    user,
    loading: userLoading,
    error: userError,
  } = useSelector((state: RootState) => state.userDetails);
  return (
    <Container>
      <Grid container item spacing={4} sx={{ pt: 5, minHeight: '100vh' }}>
        <Grid
          item
          xs={12}
          lg={5}
          sx={{ alignSelf: 'center', justifySelf: 'center' }}
        >
          {userLoading ? (
            <CircularSpinner />
          ) : user ? (
            <AlreadySignedInCard />
          ) : (
            <RegisterForm />
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

export default RegisterPage;
