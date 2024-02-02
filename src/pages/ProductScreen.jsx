import React, { useState } from "react";
import {
  useGetProductsQuery,
  useGetProductCommentsQuery,
  usePostProductCommentMutation,
} from "../services/api";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { CartProvider } from "../context/CartProvider";
import { useCart } from "../context/CartProvider";

export default function ProductScreen() {
  // products
  const { data: products, isLoading: productsIsLoading } =
    useGetProductsQuery();
  const { productId } = useParams();
  const currentProduct = products?.find((p) => p.id === productId);
  // comments
  const { data: productComments, isLoading: productCommentsIsLoading } =
    useGetProductCommentsQuery(productId);
  // post comment
  const [username, setUsername] = useState();
  const [comment, setComment] = useState();

  const [postProductComment] = usePostProductCommentMutation();

  const handleCreateComment = async () => {
    await postProductComment({
      productId,
      username,
      comment,
    });
    setUsername("");
    setComment("");
  };

  const { addToCart } = useCart();
  return (
    <CartProvider>
      <div>
        <Header />
        <Link to={`/products`}>Back</Link>
        {productsIsLoading ? (
          "Loading..."
        ) : (
          <div>
            <h2>{currentProduct.title}</h2>
            <img src={currentProduct.image} alt={currentProduct.title} />
            <p>{currentProduct.description}</p>
            <p>{currentProduct.price}</p>
            <button onClick={() => addToCart(currentProduct)}>
              Add to cart
            </button>
          </div>
        )}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button onClick={handleCreateComment}>Submit</button>
        {productCommentsIsLoading
          ? "Loading comments..."
          : productComments?.toReversed().map((comment) => (
              <div>
                <p>Username: {comment.username}</p>
                <p>Comment: {comment.comment}</p>
              </div>
            ))}
      </div>
    </CartProvider>
  );
}
