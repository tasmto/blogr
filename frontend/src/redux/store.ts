import { configureStore } from '@reduxjs/toolkit';
import UserDetailsSlice from './slices/UserDetailsSlice';
import PostListSlice from './slices/PostListSlice';

export const store = configureStore({
  reducer: {
    userDetails: UserDetailsSlice,
    postList: PostListSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
