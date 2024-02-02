import React from "react";
import { useGetProductsQuery } from "../services/api";
import Card from "../components/Card";
import Header from "../components/Header";

export default function ProductsScreen() {
  const { data, isLoading } = useGetProductsQuery();
  console.log(data);
  return (
    // <CartProvider>
    <div>
      <Header />
      {isLoading
        ? "Loading..."
        : data?.map((product) => <Card product={product} />)}
    </div>
    // </CartProvider>
  );
}
