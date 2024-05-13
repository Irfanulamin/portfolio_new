import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-server-drab.vercel.app/",
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
