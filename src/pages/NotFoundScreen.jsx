import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NotFoundScreen() {
  return (
    <div>
      <Header />
      <h1>NotFoundScreen</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
