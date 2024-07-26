import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const uzasaApi = createApi({
  reducerPath: "uzasa",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  tagTypes: ["card-section", "individuals", "companies", "projects"],
  endpoints: (builder) => ({
    getUzasaApi: builder.query({
      query: () => `/cards`,
      providesTags: ["card-section"],
    }),
    getIndividualsApi: builder.query({
      query: () => `/individuals`,
      providesTags: ["individuals"],
    }),
    getCompaniesApi: builder.query({
      query: () => `/companies`,
      providesTags: ["companies"],
    }),
    getProjectssApi: builder.query({
      query: () => `/projects`,
      providesTags: ["projects"],
    }),
  }),
});

export const {
  useGetUzasaApiQuery,
  useGetIndividualsApiQuery,
  useGetCompaniesApiQuery,
  useGetProjectssApiQuery,
} = uzasaApi;
