// src/components/HeroBanner.jsx
import "./HeroBanner.css";
import saleBanner from "../assets/salebanner.jpg";

function HeroBanner() {
  return (
    <section className="hero" id="deals">

      <div className="hero-content">

        <div className="hero-copy">
          <span className="hero-pill">Weekend Mega Sale</span>

          <h1>Super Summer Sale,Flat 50% Offer.</h1>

          <p>
           MiniMart is a one-stop online store offering quality kitchen essentials, stylish home décor, trendy dresses, and elegant watches at great prices.

          </p>

          <div className="hero-cta-row">
            <button className="hero-primary-btn">Shop Sale</button>
            <button className="hero-secondary-btn">Browse Categories</button>
          </div>

          <div className="hero-meta">
            <div>
              <strong>5000+</strong>
              <span>Products</span>
            </div>

            <div>
              <strong>30 min</strong>
              <span>Avg delivery</span>
            </div>

            <div>
              <strong>4.8</strong>
              <span>Customer rating</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE SALE BANNER */}
        <div className="hero-media">

          <img
  className="hero-main-image"
  src={saleBanner}
  alt="Super Summer Sale"
/>

          <div className="hero-badge hero-badge-discount">
            <span>Super Summer SALE</span>
            <strong>Flat 50% OFF</strong>
          </div>

          <div className="hero-badge hero-badge-delivery">
            <span>Limited time</span>
            <strong>Shop now</strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroBanner;