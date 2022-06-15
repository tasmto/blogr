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

type Props = { onSubmit: (data: {}) => void };

const ScreenOne = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState({
    avatar: '',
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
        disabled={false}
      >
        Finish
      </Button>
    </Container>
  );
};

export default ScreenOne;
