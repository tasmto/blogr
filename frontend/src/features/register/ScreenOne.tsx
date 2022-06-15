import React, { useEffect, useState } from 'react';
import {
  TextField,
  InputAdornment,
  Container,
  IconButton,
  Button,
  Divider,
  Typography,
  Grid,
} from '@mui/material';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { RegisterRequest } from '../../redux/slices/BlogrApiSlice';

type Props = {
  onSubmit: (data: {}) => void;
  data: RegisterRequest;
};

const ScreenOne = ({ onSubmit, data }: Props) => {
  const [formData, setFormData] = useState({
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    password: data.password || '',
    confirmPassword: data.confirmPassword || '',
    email: data.email || '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordInputsMatch, setPasswordInputsMatch] = useState(true);
  const toggleShowPassword = () => setShowPassword((curState) => !curState);

  const checkPasswordMatch = () =>
    setPasswordInputsMatch(formData.confirmPassword === formData.password);

  useEffect(() => {
    if (formData.password) checkPasswordMatch();
  }, [formData.confirmPassword, formData.password]);

  const handleFormMutation = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.lastName ||
      !formData.firstName ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.email
    )
      return false;

    onSubmit(formData);
  };

  return (
    <Container
      component='form'
      onSubmit={handleFormSubmit}
      sx={{
        '& .MuiTextField-root': { mb: 2 },
        pl: { md: 0 },
        pr: { md: 0 },
      }}
    >
      <Grid container columnSpacing={2}>
        <Grid item xs={12} md={6} lg={12}>
          <TextField
            fullWidth
            id='firstName'
            required
            label='What is your first name?'
            type='text'
            variant='outlined'
            value={formData.firstName}
            onChange={handleFormMutation}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <TextField
            fullWidth
            id='lastName'
            required
            label='What is your last name?'
            type='text'
            variant='outlined'
            value={formData.lastName}
            onChange={handleFormMutation}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='email'
            required
            label='What is your emal?'
            type='email'
            variant='outlined'
            value={formData.email}
            onChange={handleFormMutation}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider textAlign='left' sx={{ mt: 1, mb: 2 }}>
            <Typography variant='caption'>Security</Typography>
          </Divider>
        </Grid>

        <Grid item xs={12} md={6} lg={12}>
          <TextField
            fullWidth
            id='password'
            required
            label='What is your password?'
            type={showPassword ? 'text' : 'password'}
            variant='outlined'
            helperText='Your password needs to be at least 8 characters long.'
            value={formData.password}
            onChange={handleFormMutation}
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
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <TextField
            fullWidth
            id='confirmPassword'
            required
            error={!passwordInputsMatch}
            label='Confirm your password?'
            type={showPassword ? 'text' : 'password'}
            variant='outlined'
            value={formData.confirmPassword}
            onChange={handleFormMutation}
            helperText={
              passwordInputsMatch
                ? 'Your password needs to be at least 8 characters long.'
                : 'This password does not match your password above...'
            }
          />
        </Grid>
      </Grid>
      <Button
        variant='contained'
        disableElevation
        sx={{ borderRadius: '15px', width: '100%', mt: 2 }}
        type='submit'
        size='large'
        disabled={
          !formData.lastName ||
          !formData.firstName ||
          !formData.password ||
          !formData.confirmPassword ||
          !formData.email ||
          !passwordInputsMatch ||
          formData.password.trim().length < 8 ||
          formData.confirmPassword.trim().length < 8
        }
      >
        Sign In
      </Button>
    </Container>
  );
};

export default ScreenOne;
