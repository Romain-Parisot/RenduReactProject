import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import NotFoundScreen from "./pages/NotFoundScreen";
import ProductsScreen from "./pages/ProductsScreen";
import ProductScreen from "./pages/ProductScreen";
import CartScreen from "./pages/CartScreen";
import { CartProvider } from "./context/CartProvider";

import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen />, errorElement: <NotFoundScreen /> },
  { path: "/products", element: <ProductsScreen /> },
  { path: "/products/:productId/comments", element: <ProductScreen /> },
  { path: "/cart", element: <CartScreen /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
