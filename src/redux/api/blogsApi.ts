import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["blogs"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: "blogs",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),

    createBlogs: builder.mutation({
      query: (blogsData) => ({
        url: "add-blogs",
        method: "POST",
        body: blogsData,
      }),
      invalidatesTags: ["blogs"],
    }),
    updateBlogs: builder.mutation({
      query: ({ id, updatedBlogs }) => ({
        url: `update-blogs/${id}`,
        method: "PUT",
        body: updatedBlogs,
      }),
      invalidatesTags: ["blogs"],
    }),
    deleteBlogs: builder.mutation({
      query: (id) => ({
        url: `delete-blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  useCreateBlogsMutation,
  useDeleteBlogsMutation,
  useGetBlogsQuery,
  useUpdateBlogsMutation,
} = blogsApi;

export default blogsApi.reducer;
