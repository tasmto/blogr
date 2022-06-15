import React, { useState } from 'react';
import {
  TextField,
  Container,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from '@mui/material';

type Props = { onSubmit: (data: {}) => void };

const ScreenTwo = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState({
    bio: '',
    topics: [],
  });

  const featuredTopics = [
    'technology',
    'productivity',
    'art',
    'entertainment',
    'business',
    'mindfulness',
    'money',
  ];

  const handleFormMutation = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
  const handleTopicsMutation = (
    _: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormData((prevData: any) => {
      return { ...prevData, topics: newFormats };
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        Create a new account: 2 of 3
      </Typography>
      <TextField
        fullWidth
        id='bio'
        required
        label='Your Bio'
        type='text'
        multiline
        maxRows={4}
        variant='outlined'
        value={formData.bio}
        onChange={handleFormMutation}
      />

      <Typography variant='h5' sx={{ mt: 2, mb: 2 }}>
        Choose any (at least one) topic you are interested in *
      </Typography>
      <ToggleButtonGroup
        value={formData.topics}
        onChange={handleTopicsMutation}
        aria-label='Topics'
        color='primary'
        size='small'
        sx={{ flexWrap: 'wrap' }}
      >
        {featuredTopics.map((topic) => (
          <ToggleButton value={topic} aria-label={topic}>
            {topic}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Button
        variant='contained'
        disableElevation
        sx={{ borderRadius: '15px', width: '100%', mt: 4 }}
        type='submit'
        size='large'
        disabled={!formData.bio || !formData.topics.length}
      >
        Continue
      </Button>
    </Container>
  );
};

export default ScreenTwo;
