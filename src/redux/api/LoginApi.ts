import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "api/v1/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = loginApi;

export default loginApi.reducer;
