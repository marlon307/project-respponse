import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user(state, { payload }) {
      console.log(state);

      return {
        ...state,
        logged: payload,
      };
    },
    bag() {
      return {
        items: [],
      };
    },
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
