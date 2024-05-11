import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["skills"],
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: () => ({
        url: "skills",
        method: "GET",
      }),
      providesTags: ["skills"],
    }),

    createSkills: builder.mutation({
      query: (skillsData) => ({
        url: "add-skills",
        method: "POST",
        body: skillsData,
      }),
      invalidatesTags: ["skills"],
    }),
    updateSkills: builder.mutation({
      query: ({ id, updatedSkills }) => ({
        url: `update-skills/${id}`,
        method: "PUT",
        body: updatedSkills,
      }),
      invalidatesTags: ["skills"],
    }),
    deleteSkills: builder.mutation({
      query: (id) => ({
        url: `delete-skills/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skills"],
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useCreateSkillsMutation,
  useUpdateSkillsMutation,
  useDeleteSkillsMutation,
} = skillsApi;

export default skillsApi.reducer;
