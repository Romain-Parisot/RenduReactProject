import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  tagTypes: ["products"],
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://iim.etherial.fr" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getProductComments: builder.query({
      query: (productId) => `/products/${productId}/comments`,
    }),
    postProductComment: builder.mutation({
      query: (data) => ({
        url: `/products/${data.productId}/comments`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductCommentsQuery,
  usePostProductCommentMutation,
} = productApi;
