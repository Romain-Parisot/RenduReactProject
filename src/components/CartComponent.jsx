import React from "react";
import { useCart } from "../context/CartProvider";

export default function CartComponent() {
  const { cart, removeFromCart, removeAllFromCart } = useCart();
  console.log(cart);
  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => removeFromCart(product)}>
            Remove from cart
          </button>
        </div>
      ))}
      <button onClick={removeAllFromCart}>Remove all from cart</button>
    </div>
  );
}
