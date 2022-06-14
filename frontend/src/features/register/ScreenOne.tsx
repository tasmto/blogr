import React, { useEffect, useState } from 'react';
import {
  TextField,
  InputAdornment,
  Container,
  IconButton,
  Button,
  Divider,
  Typography,
} from '@mui/material';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/UserDetailsActions';

type Props = {
  onSubmit: (data: {}) => void;
};

const ScreenOne = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((curState) => !curState);

  const handleFormMutation = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password === '' || formData.email === '') return false;

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
      <TextField
        fullWidth
        id='firstName'
        required
        label='What is your first Name?'
        type='text'
        variant='outlined'
        value={formData.firstName}
        onChange={handleFormMutation}
      />
      <TextField
        fullWidth
        id='lastName'
        required
        label='What is your lastName?'
        type='text'
        variant='outlined'
        value={formData.lastName}
        onChange={handleFormMutation}
      />
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
      <Divider textAlign='left' sx={{ mt: 1, mb: 2 }}>
        <Typography variant='caption'>Security</Typography>
      </Divider>
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
      <TextField
        fullWidth
        id='confirmPassword'
        required
        label='Confirm your password?'
        type={showPassword ? 'text' : 'password'}
        variant='outlined'
        value={formData.confirmPassword}
        onChange={handleFormMutation}
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
      <Typography variant='body2'>
        Your password needs to be at least 8 characters long.
      </Typography>
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

export default ScreenOne;
