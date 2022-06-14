import {
  LoginRequest,
  LoginSuccess,
  LoginFail,
} from '../slices/UserDetailsSlice';

const API = '/api/users';

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    dispatch(LoginRequest());
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      };
      const response = await fetch(`${API}/sign-in`, requestOptions);
      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      dispatch(LoginSuccess(data));
    } catch (error: any) {
      dispatch(LoginFail(error.message));
    }
  };
