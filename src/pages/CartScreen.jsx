import React from "react";
import Header from "../components/Header";
import CartComponent from "../components/CartComponent";
import { CartProvider } from "../context/CartProvider";

export default function CartScreen() {
  return (
    <CartProvider>
      <div>
        <Header />
        <h1>Cart Screen</h1>
        <CartComponent />
      </div>
    </CartProvider>
  );
}
