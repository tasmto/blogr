import { configureStore } from '@reduxjs/toolkit';
import UserDetailsSlice from './slices/UserDetailsSlice';
import PostListSlice from './slices/PostListSlice';
import { blogrApiSlice } from './slices/BlogrApiSlice';

export const store = configureStore({
  reducer: {
    userDetails: UserDetailsSlice,
    postList: PostListSlice,
    [blogrApiSlice.reducerPath]: blogrApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    // Helps us track cache lifetimes and cool stuff like that
    return getDefaultMiddleware().concat(blogrApiSlice.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
