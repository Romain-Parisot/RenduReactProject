import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderComponent>
      <Link to="/cart">Cart</Link>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header`
  background-color: green;
  height: 80px;
`;
