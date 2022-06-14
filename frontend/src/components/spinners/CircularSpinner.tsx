import { Box, CircularProgress, Container } from '@mui/material';
import React from 'react';

type Props = {};

const CircularSpinner = (props: Props) => {
  return (
    <Container sx={{ with: '100%', height: '100%', textAlign: 'center' }}>
      <CircularProgress color='secondary' size={50} thickness={4} />
    </Container>
  );
};

export default CircularSpinner;
