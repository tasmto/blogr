import React, { useEffect, useState } from 'react';
import {
  TextField,
  InputAdornment,
  Container,
  IconButton,
  Button,
} from '@mui/material';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { validateEmailFormat } from '../../utilities/ValidateFormat';

type Props = {};

const LoginForm = (props: Props) => {
  const [signInFormData, setSignInFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((curState) => !curState);

  const handleSignInFormMutation = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignInFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });

  const handleSignInFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (signInFormData.password === '' || signInFormData.email === '')
      return false;
    console.log(signInFormData.password.trim().length);
  };
  return (
    <Container
      component='form'
      onSubmit={handleSignInFormSubmit}
      sx={{
        '& .MuiTextField-root': { mb: 2 },
        pl: { md: 0 },
        pr: { md: 0 },
      }}
    >
      <TextField
        fullWidth
        id='email'
        required
        label='What is your emal?'
        type='email'
        variant='outlined'
        value={signInFormData.email}
        onChange={handleSignInFormMutation}
      />
      <TextField
        fullWidth
        id='password'
        required
        label='What is your password?'
        type={showPassword ? 'text' : 'password'}
        variant='outlined'
        value={signInFormData.password}
        onChange={handleSignInFormMutation}
        helperText='Your password needs to be at least 8 characters long.'
        InputProps={{
          endAdornment: (
            <InputAdornment position='start'>
              <IconButton
                sx={{ cursor: 'pointer' }}
                edge='end'
                aria-label='toggle password visibility'
                onClick={toggleShowPassword}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant='contained'
        disableElevation
        sx={{ borderRadius: '15px', width: '100%', mt: 2 }}
        type='submit'
        size='large'
        disabled={
          signInFormData.email === '' ||
          signInFormData.password === '' ||
          signInFormData.password.trim().length < 8
        }
      >
        Submit
      </Button>
    </Container>
  );
};

export default LoginForm;
