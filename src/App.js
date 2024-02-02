import "./App.css";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="App"></div>
    </CartProvider>
  );
}
