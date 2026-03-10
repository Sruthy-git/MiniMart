// src/components/CategoryStrip.jsx
import './CategoryStrip.css';

const categories = [
  { id: 'fresh', label: 'Fresh Produce' },
  { id: 'snacks', label: 'Snacks & Beverages' },
  { id: 'dairy', label: 'Dairy & Eggs' },
  { id: 'household', label: 'Household' },
  { id: 'personal', label: 'Personal Care' },
];

function CategoryStrip() {
  return (
    <section className="cat-strip">
      <div className="cat-strip-header">
        <h2>Shop by Category</h2>
        <button className="cat-view-all">View all</button>
      </div>
      <div className="cat-list">
        {categories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} className="cat-pill">
            {cat.label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default CategoryStrip;

