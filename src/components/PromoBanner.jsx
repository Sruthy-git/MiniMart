// src/components/PromoBanner.jsx
import './PromoBanner.css';

function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-copy">
        <h2>Olive Green Rewards</h2>
        <p>
          Join the MiniMart Club and earn 2x points on every fresh and organic
          product this weekend.
        </p>
      </div>
      <button className="promo-cta">Join for Free</button>
    </section>
  );
}

export default PromoBanner;