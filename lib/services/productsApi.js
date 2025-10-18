import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    searchProducts: builder.query({
      query: (query) => `products/search?q=${query}`,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useSearchProductsQuery,
  useGetProductByIdQuery,
} = productsApi;
