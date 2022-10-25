import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "redux/axiosRTK";

export const authApi = createApi({
  tagTypes: ["User"],
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    newUser: build.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useNewUserMutation } = authApi;

// useNewUserMutation;
