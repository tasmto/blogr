import React, { useState } from 'react';
import { TextField, Button, Alert, AlertTitle } from '@mui/material';
import { IoImageOutline } from 'react-icons/io5';
import { useUploadFileMutation } from '../../redux/slices/BlogrApiSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

type Props = {
  onUpload: (link: string) => void;
};

const UploadProfilePicture = ({ onUpload }: Props) => {
  const dispatch = useDispatch();
  const [uploadFile] = useUploadFileMutation();
  const [profileImage, setProfileImage] = useState(null);
  const [uploadError, setUploadError] = useState('');

  const uploadPicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore: target files may be null
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      // todo: User Redux Query for this...
      // const data = await uploadFile(formData);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.post('/api/upload', formData, config);
      setProfileImage(data);
      onUpload(data);
      setUploadError('');
    } catch (error: any) {
      setUploadError(error.message);
    }
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
          backgroundImage: `url(${profileImage && profileImage})`,
        }}
      >
        <IoImageOutline
          style={{
            height: '50px',
            width: '50px',
            color: 'divider.default',
            opacity: '0.8',
          }}
        />
      </Button>
      {uploadError !== '' ? (
        <Alert severity='error'>
          <AlertTitle>Whoops...</AlertTitle>
          Couldn't upload your image — <strong>{uploadError}</strong>
        </Alert>
      ) : (
        <TextField
          disabled
          id='standard-disabled'
          placeholder='Click the image above to select an image (png and jpeg  only)'
          value={profileImage || ''}
          variant='standard'
          sx={{ width: '100%', mt: 1, pointerEvents: 'none' }}
        />
      )}
    </label>
  );
};

export default UploadProfilePicture;
