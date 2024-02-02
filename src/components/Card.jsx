import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ product }) {
  return (
    <CardDiv>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <Link to={`/products/${product.id}/comments`}>View comments</Link>
      </div>
    </CardDiv>
  );
}

const CardDiv = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid black;
  img {
    width: 30%;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    h3 {
      font-size: 1.5rem;
    }
  }
`;
