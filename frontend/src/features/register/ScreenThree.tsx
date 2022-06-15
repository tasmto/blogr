import React, { useEffect, useState } from 'react';
import {
  TextField,
  InputAdornment,
  Container,
  IconButton,
  Button,
  Typography,
  Input,
  Paper,
} from '@mui/material';
import { IoImageOutline } from 'react-icons/io5';
import UploadProfilePicture from '../profile/UploadProfilePicture';
import { RegisterRequest } from '../../redux/slices/BlogrApiSlice';

type Props = { onSubmit: (data: {}) => void; data: RegisterRequest };

const ScreenOne = ({ onSubmit, data }: Props) => {
  const [formData, setFormData] = useState({
    avatar: data.avatar || '',
  });

  const handleFormMutation = (link: string) => setFormData({ avatar: link });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.avatar === '') return false;
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
      <Typography variant='h3' sx={{ mb: 3 }}>
        Create a new account: 3 of 3
      </Typography>
      <UploadProfilePicture onUpload={handleFormMutation} />
      <Button
        variant='contained'
        disableElevation
        sx={{ borderRadius: '15px', width: '100%', mt: 2 }}
        type='submit'
        size='large'
        disabled={formData.avatar === ''}
      >
        Finish
      </Button>
    </Container>
  );
};

export default ScreenOne;
