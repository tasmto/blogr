import { createSlice } from '@reduxjs/toolkit';

export interface PostListType {}
interface PostListSliceType {
  posts: [PostListType] | [];
  loading: false;
  error?: string;
}

const initialState: PostListSliceType = {
  posts: [],
  loading: false,
};

export const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {},
});

export const {} = postListSlice.actions;
export default postListSlice.reducer;
