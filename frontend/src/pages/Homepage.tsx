import React from 'react';
import Button from '@mui/material/Button';
import {
  LoginRequest,
  useFetchUserDetailsQuery,
  useLoginMutation,
} from '../redux/slices/BlogrApiSlice';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/slices/UserDetailsSlice';

type Props = {};

const Homepage = (props: Props) => {
  const dispatch = useDispatch();
  /* const {
    data = null,
    isFetching,
    error,
    isLoading,
  } = useFetchUserDetailsQuery('62a8ebc651129472f698d2f2');
*/
  const [login, { isLoading, error }] = useLoginMutation();

  const [formState, setFormState] = React.useState<LoginRequest>({
    password: '@#!_*&(pa55',
    email: 'pike@example.comm',
  });

  const triggerLogin = async () => {
    try {
      const user = await login(formState).unwrap();
      dispatch(setCredentials(user));
      console.log(user);
      return;
    } catch (err: any) {
      console.error(err.data.message);
      return;
    }
  };

  return (
    <div>
      <Button variant='contained' onClick={triggerLogin}>
        Contained
      </Button>
      {error && (
        <div>
          <Typography variant='h2'>hi hi {`${error?.data.message}`}</Typography>
        </div>
      )}
    </div>
  );
};

export default Homepage;
