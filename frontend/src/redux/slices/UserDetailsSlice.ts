import { createSlice } from '@reduxjs/toolkit';
export interface userDetailsType {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar: string;
  bookmarks: [string];
  token: string;
}

export interface UserDetailsSliceType {
  user: {} | userDetailsType;
  loading: boolean;
  error?: string;
}

const userFromLocalStorage: {} | userDetailsType = localStorage.getItem(
  'userInfo'
)
  ? //@ts-ignore: localStorage may be null
    JSON.parse(localStorage.getItem('userInfo'))
  : {};

const initialState: UserDetailsSliceType = {
  user: userFromLocalStorage,
  loading: false,
};

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,

  reducers: {
    LoginRequest: (state) => {
      state.user = {};
      state.loading = true;
      state.error = undefined;

      localStorage.removeItem('userInfo');
    },
    LoginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = undefined;

      localStorage.setItem('userInfo', JSON.stringify(state.user));
    },
    LoginFail: (state, action) => {
      state.user = {};
      state.loading = false;
      state.error = action.payload;
    },
    Logout: (state) => {
      state = { ...initialState };
      localStorage.removeItem('userInfo');
    },
  },
});

// Action creators are generated for each case reducer function
export const { LoginSuccess, LoginRequest, LoginFail, Logout } =
  userDetailsSlice.actions;

export default userDetailsSlice.reducer;
