import { configureStore } from "@reduxjs/toolkit";
import { skillsApi } from "./api/skillsApi";
import { blogsApi } from "./api/blogsApi";
import { projectsApi } from "./api/projectsApi";
import { loginApi } from "./api/LoginApi";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./feature/authSlice";

// ...
const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);
export const store = configureStore({
  reducer: {
    [skillsApi.reducerPath]: skillsApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      skillsApi.middleware,
      blogsApi.middleware,
      projectsApi.middleware,
      loginApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
