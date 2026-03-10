import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        <h2 className="about-title">About MiniMart</h2>

        <p className="about-text">
          MiniMart is a modern online store designed to make everyday shopping simple and convenient. 
          We offer a wide range of quality products including kitchen essentials, stylish home décor, 
          trendy dresses, and elegant watches. Our goal is to provide carefully selected items that 
          combine style, functionality, and affordability. At MiniMart, we focus on delivering a smooth 
          and enjoyable shopping experience for every customer. With reliable service and fast delivery, 
          we aim to bring the best products right to your doorstep.
        </p>

        <button className="about-btn">Explore Products</button>

      </div>
    </section>
  );
}

export default About;