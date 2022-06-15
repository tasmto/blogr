import React from 'react';
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

type Props = {
  onUpload: (link: string) => void;
};

const UploadProfilePicture = ({ onUpload }: Props) => {
  const uploadPicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore: target files may be null
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('image', file);

    //   setUploading(true);
    /*
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.post('/api/upload', formData, config);
      onUpload(data);
      // setProductData((currentData) => {
      //   return {
      //     ...currentData,
      //     image: data,
      //   };
      // });
      // setUploading(false);
    } catch (error) {
      console.error(error);
    }*/
  };
  return (
    <label htmlFor='contained-button-file'>
      <input
        // @ts-ignore: Input does'nt have the accept prop
        accept='image/*'
        id='contained-button-file'
        multiple
        type='file'
        style={{ display: 'none' }}
        onChange={uploadPicture}
      />
      <Button
        component='span'
        sx={{
          width: '100%',
          minHeight: '150px',
          backgroundColor: 'info.main',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
        }}
      >
        <IoImageOutline
          style={{ height: '50px', width: '50px', color: 'divider.default' }}
        />
      </Button>
      <TextField
        disabled
        id='standard-disabled'
        defaultValue='Click the image above to select an image (png and jpeg  only)'
        variant='standard'
        sx={{ width: '100%', mt: 1, pointerEvents: 'none' }}
      />
    </label>
  );
};

export default UploadProfilePicture;
