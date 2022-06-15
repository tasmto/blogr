import React, { useEffect, useState } from 'react';
import {
  TextField,
  InputAdornment,
  Container,
  IconButton,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../redux/slices/BlogrApiSlice';
import { setCredentials } from '../../redux/slices/UserDetailsSlice';
import { useNavigate } from 'react-router';

type Props = {};

const LoginForm = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { error }] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((curState) => !curState);

  const handleSignInFormMutation = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });

  const handleSignInFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (formData.password === '' || formData.email === '') return false;

    try {
      const user = await login(formData).unwrap();
      dispatch(setCredentials(user));
      // Go to profile after login
      navigate('/profile');
    } catch (err: any) {}
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
        value={formData.email}
        onChange={handleSignInFormMutation}
      />
      <TextField
        fullWidth
        id='password'
        required
        label='What is your password?'
        type={showPassword ? 'text' : 'password'}
        variant='outlined'
        value={formData.password}
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
      {error && (
        <Alert
          severity='error'
          sx={{ mt: 1 }}
          action={
            <Button
              color='inherit'
              size='small'
              onClick={() => navigate('/sign-up')}
              sx={{ m: 'auto' }}
            >
              Sign up
            </Button>
          }
        >
          <AlertTitle>Ooof:</AlertTitle>
          Something went wrong, please double check your details above and try
          again... (
          {
            //@ts-ignore: data doesnt exist on error
            error?.data?.message
          }
          )
        </Alert>
      )}
      <Button
        variant='contained'
        disableElevation
        sx={{ borderRadius: '15px', width: '100%', mt: 2 }}
        type='submit'
        size='large'
        disabled={
          formData.email === '' ||
          formData.password === '' ||
          formData.password.trim().length < 8
        }
      >
        Sign In
      </Button>
    </Container>
  );
};

export default LoginForm;
