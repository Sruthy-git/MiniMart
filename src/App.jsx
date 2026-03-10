// src/App.jsx

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HeroBanner from "./components/HeroBanner";
import CategoryStrip from "./components/CategoryStrip";
import PromoBanner from "./components/PromoBanner";
import ProductGrid from "./components/ProductGrid";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {

  // CART STATE
  const [cartItems, setCartItems] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {

    setCartItems((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);

      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });

  };

  // UPDATE QUANTITY (+ / -)
  const updateQty = (id, change) => {

    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty + change }
            : item
        )
        .filter((item) => item.qty > 0)
    );

  };

  return (
    <div className="app-root">

      {/* NAVBAR */}
      <Navbar cartItems={cartItems} updateQty={updateQty} />

      <main className="app-main">

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <CategoryStrip />
                <PromoBanner />
                <ProductGrid addToCart={addToCart} />
              </>
            }
          />

          {/* OTHER PAGES */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;