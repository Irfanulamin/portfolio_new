import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["projects"],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "projects",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    createProjects: builder.mutation({
      query: (projectsData) => ({
        url: "add-projects",
        method: "POST",
        body: projectsData,
      }),
      invalidatesTags: ["projects"],
    }),
    updateProjects: builder.mutation({
      query: ({ id, updatedProject }) => ({
        url: `update-projects/${id}`,
        method: "PUT",
        body: updatedProject,
      }),
      invalidatesTags: ["projects"],
    }),
    deleteProjects: builder.mutation({
      query: (id) => ({
        url: `delete-projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["projects"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useCreateProjectsMutation,
  useDeleteProjectsMutation,
  useUpdateProjectsMutation,
} = projectsApi;

export default projectsApi.reducer;
