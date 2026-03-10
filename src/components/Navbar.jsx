import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar({ cartItems = [], updateQty }) {

  const [open, setOpen] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="MiniMart" />
      </div>

      {/* SEARCH */}
      <input className="search" placeholder="Search groceries..." />

      {/* MENU */}
      <div className="menu">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>

        {/* CART */}
        <div className="cart-area">

          <button
            className="cart-btn"
            onClick={() => setOpen(!open)}
          >
            Cart ({cartItems.length})
          </button>

          {open && (
            <div className="cart-dropdown">

              {cartItems.length === 0 && (
                <p className="empty">Cart is empty</p>
              )}

              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">

                  <span>{item.name}</span>

                  <div className="qty">
                    <button onClick={() => updateQty(item.id, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>

                  <span>
                    ₹{(item.price * item.qty).toFixed(2)}
                  </span>

                </div>
              ))}

              <div className="cart-total">
              Total: ₹ {total.toFixed(2)}
              </div>

            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;