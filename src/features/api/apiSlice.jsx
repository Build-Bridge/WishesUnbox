import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  //   Replace the url with the apiUrl
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost" }),
  endpoints: (builder) => ({
    // To get a specific user from the database
    getUser: builder.query({
      query: () => "user",
    }),

    // To add a new user to the database
    addUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),

    // Delete a user from the database
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: "/users/{id}",
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const { useGetUserQuery, useAddUserMutation, useDeleteUserMutation } =
  apiSlice;
