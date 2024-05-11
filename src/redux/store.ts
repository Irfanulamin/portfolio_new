import { configureStore } from "@reduxjs/toolkit";
import { skillsApi } from "./api/skillsApi";
// ...

export const store = configureStore({
  reducer: {
    [skillsApi.reducerPath]: skillsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skillsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
