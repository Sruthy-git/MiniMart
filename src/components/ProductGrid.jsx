import React from "react";
import "./ProductGrid.css";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Gold Accessories Set",
    category: "Accessories",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a7f3b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Kitchen Utensil Set",
    category: "Kitchen",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Modern Living Room Sofa",
    category: "Home",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Home Wall Decor Mirror",
    category: "Decor",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Women Summer Dress",
    category: "Dresses",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Men Casual Shirt",
    price: 35,
    image: "https://images.unsplash.com/photo-1520974735194-0c9f5c1a6c1d",
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 60,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 8,
    name: "Luxury Watch",
    price: 120,
    image: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb",
  },
  {
    id: 9,
    name: "Smart Watch",
    price: 95,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
  },
];

function ProductGrid() {

  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <section className="product-grid-section">
      <div className="product-grid-header">
        <h2>Featured Products</h2>
        <p>Explore our latest collections</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <div className="product-footer">
              <span>${product.price}</span>

              <button onClick={() => addToCart(product)}>
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;