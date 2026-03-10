// src/components/ProductCard.jsx
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} />
        {product.tag && <span className="product-tag">{product.tag}</span>}
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-meta">{product.size}</p>
      <div className="product-bottom">
        <div className="product-price-wrap">
          <span className="product-price">₹{product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="product-old-price">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button className="product-add-btn">Add</button>
      </div>
    </article>
  );
}

export default ProductCard;