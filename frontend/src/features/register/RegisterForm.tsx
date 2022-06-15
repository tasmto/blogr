import React, { useState } from 'react';
import { Container } from '@mui/material';

import { useDispatch } from 'react-redux';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

type Props = {};

const RegisterForm = (props: Props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    avatar: '',
    topics: [],
    preferredColorTheme: '',
    bio: '',
  });
  const [signUpStage, setSignUpStage] = useState(3);

  const handleFormDataMutate = (data: {}): void => {
    setFormData((currentData) => {
      return { ...currentData, ...data };
    });
    setSignUpStage((curState) => (curState += 1));
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
        <ScreenOne onSubmit={handleFormDataMutate} />
      ) : signUpStage === 2 ? (
        <ScreenTwo onSubmit={handleFormDataMutate} />
      ) : signUpStage === 3 ? (
        <ScreenThree onSubmit={handleFormDataMutate} />
      ) : (
        <h2>Ready?</h2>
      )}
    </Container>
  );
};

export default RegisterForm;
