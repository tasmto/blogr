import React, { useEffect, useState } from 'react';
import {
  Alert,
  AlertTitle,
  Button,
  Container,
  LinearProgress,
  Typography,
} from '@mui/material';

import { useDispatch } from 'react-redux';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';
import { Box } from '@mui/system';
import { useRegisterMutation } from '../../redux/slices/BlogrApiSlice';
import { setCredentials } from '../../redux/slices/UserDetailsSlice';
import { useNavigate } from 'react-router';

type Props = {};

const RegisterForm = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { error }] = useRegisterMutation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    avatar: '',
    topics: [],
    preferredColorTheme: 'light',
    bio: '',
  });
  const [signUpStage, setSignUpStage] = useState(1);

  useEffect(() => {
    if (signUpStage > 3) handleSignUpUser();
  }, [signUpStage]);

  const handleFormDataMutate = (data: {}): void => {
    setFormData((currentData) => {
      return { ...currentData, ...data };
    });
    setSignUpStage((curState) => (curState += 1));
  };
  const handleSignUpUser = async () => {
    try {
      const user = await register(formData).unwrap();
      dispatch(setCredentials(user));
      // Go to profile after login
      navigate('/profile');
    } catch (err: any) {}
  };

  return (
    <Container
      component='div'
      sx={{
        '& .MuiTextField-root': { mb: 2 },
        pl: { md: 0 },
        pr: { md: 0 },
      }}
    >
      {signUpStage === 1 ? (
        <ScreenOne data={formData} onSubmit={handleFormDataMutate} />
      ) : signUpStage === 2 ? (
        <ScreenTwo data={formData} onSubmit={handleFormDataMutate} />
      ) : signUpStage === 3 ? (
        <ScreenThree data={formData} onSubmit={handleFormDataMutate} />
      ) : (
        <Box>
          {' '}
          {error ? (
            <Alert
              severity='error'
              sx={{ mt: 1 }}
              action={
                <Button
                  color='inherit'
                  size='small'
                  onClick={() => setSignUpStage(1)}
                  sx={{ m: 'auto' }}
                >
                  Go Back
                </Button>
              }
            >
              <AlertTitle>Ooof:</AlertTitle>
              Something went wrong, please double check your details above and
              try again... (
              {
                //@ts-ignore: data doesnt exist on error
                error?.data?.message
              }
              )
            </Alert>
          ) : (
            <>
              <Typography variant='h1'>
                Ready? Set.{' '}
                <Typography variant='h1' component='span' color='secondary'>
                  Go!
                </Typography>
              </Typography>
              <LinearProgress sx={{ mt: 2 }} color='success' />
            </>
          )}
        </Box>
      )}
    </Container>
  );
};

export default RegisterForm;
