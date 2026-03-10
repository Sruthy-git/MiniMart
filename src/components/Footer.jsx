// src/components/Footer.jsx
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-logo">MiniMart</div>
          <p>Everyday essentials in earthy, olive tones—delivered fast.</p>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          <a href="#fresh">Fresh Produce</a>
          <a href="#snacks">Snacks & Beverages</a>
          <a href="#household">Household</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Help</h4>
          <a href="#faq">FAQ</a>
          <a href="#support">Support</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MiniMart. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;