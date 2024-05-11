import { configureStore } from "@reduxjs/toolkit";
import { skillsApi } from "./api/skillsApi";
import { blogsApi } from "./api/blogsApi";
import { projectsApi } from "./api/projectsApi";
// ...

export const store = configureStore({
  reducer: {
    [skillsApi.reducerPath]: skillsApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      skillsApi.middleware,
      blogsApi.middleware,
      projectsApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
