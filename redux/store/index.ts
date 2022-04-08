import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from '../actions';

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: itemsSlice,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
