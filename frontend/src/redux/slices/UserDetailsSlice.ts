import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface userDetailsType {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'normee' | 'apprentice' | 'guru' | 'sage' | 'admin';
  avatar: string;
  bookmarks: string[];
  token: string;
  preferredColorTheme: string;
  favoriteTopics: string[];
  following: string[];
  bio: string;
}

export interface UserDetailsSliceType {
  user: null | userDetailsType;
  loading: boolean;
  error?: string;
}

const userFromLocalStorage: null | userDetailsType = localStorage.getItem(
  'userInfo'
)
  ? //@ts-ignore: localStorage may be null
    JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState: UserDetailsSliceType = {
  user: userFromLocalStorage,
  loading: false,
};

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,

  reducers: {
    setCredentials: (state, action: PayloadAction<userDetailsType>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = undefined;

      localStorage.setItem('userInfo', JSON.stringify(state.user));
    },
    resetCredentials: (state) => {
      state.user = null;
      state.loading = false;
      state.error = undefined;
      localStorage.removeItem('userInfo');
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCredentials, resetCredentials } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
