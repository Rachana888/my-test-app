import './App.css';

const categories = [
  { id: 1, icon: '🧘', name: 'Yoga Mats', description: 'Non-slip, eco-friendly mats for every practice' },
  { id: 2, icon: '🪷', name: 'Meditation Cushions', description: 'Supportive zafu and zabuton sets for deep stillness' },
  { id: 3, icon: '🕯️', name: 'Aromatherapy', description: 'Essential oils, candles & diffusers for calm spaces' },
  { id: 4, icon: '🎵', name: 'Sound Healing', description: 'Singing bowls, chimes & ambient music tools' },
  { id: 5, icon: '🌿', name: 'Herbal Teas', description: 'Organic blends to soothe body and mind' },
  { id: 6, icon: '📿', name: 'Malas & Crystals', description: 'Gemstone malas and healing crystals for intention' },
];

const products = [
  {
    id: 1,
    category: 'Yoga Mats',
    name: 'Serenity Pro Mat',
    price: 68,
    rating: 4.9,
    reviews: 312,
    tag: 'Best Seller',
    emoji: '🟢',
    description: '6mm thick, natural rubber, alignment guides',
  },
  {
    id: 2,
    category: 'Yoga Mats',
    name: 'Earth Flow Mat',
    price: 45,
    rating: 4.7,
    reviews: 198,
    tag: 'Eco Pick',
    emoji: '🟤',
    description: 'Jute & PER blend, lightweight & durable',
  },
  {
    id: 3,
    category: 'Meditation Cushions',
    name: 'Lotus Zafu Set',
    price: 59,
    rating: 4.8,
    reviews: 145,
    tag: 'Staff Pick',
    emoji: '🪷',
    description: 'Buckwheat hull fill, removable cover',
  },
  {
    id: 4,
    category: 'Aromatherapy',
    name: 'Calm Mist Diffuser',
    price: 42,
    rating: 4.6,
    reviews: 267,
    tag: 'Popular',
    emoji: '🌫️',
    description: 'Ultrasonic, 7-color LED, 500ml capacity',
  },
  {
    id: 5,
    category: 'Aromatherapy',
    name: 'Lavender Peace Oil',
    price: 18,
    rating: 4.9,
    reviews: 523,
    tag: 'Best Seller',
    emoji: '💜',
    description: 'Pure therapeutic-grade lavender essential oil',
  },
  {
    id: 6,
    category: 'Sound Healing',
    name: 'Crystal Singing Bowl',
    price: 89,
    rating: 4.8,
    reviews: 87,
    tag: 'Premium',
    emoji: '🔔',
    description: 'Frosted quartz, 432Hz tuned, 8-inch',
  },
  {
    id: 7,
    category: 'Herbal Teas',
    name: 'Inner Peace Blend',
    price: 22,
    rating: 4.7,
    reviews: 411,
    tag: 'Organic',
    emoji: '🍵',
    description: 'Chamomile, ashwagandha & holy basil',
  },
  {
    id: 8,
    category: 'Malas & Crystals',
    name: 'Amethyst Mala',
    price: 36,
    rating: 4.8,
    reviews: 203,
    tag: 'Handmade',
    emoji: '📿',
    description: '108-bead genuine amethyst with tassel',
  },
];

function StarRating({ rating }) {
  return (
    <span className="stars">
      {'★'.repeat(Math.floor(rating))}
      {rating % 1 >= 0.5 ? '½' : ''}
      <span className="rating-num">{rating}</span>
    </span>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.tag && <span className="product-tag">{product.tag}</span>}
      <div className="product-emoji">{product.emoji}</div>
      <div className="product-category">{product.category}</div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc">{product.description}</p>
      <StarRating rating={product.rating} />
      <span className="review-count">({product.reviews} reviews)</span>
      <div className="product-footer">
        <span className="product-price">${product.price}</span>
        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">🌸 ZenFlow</div>
          <nav className="nav">
            <a href="#categories">Shop</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
          </nav>
          <button className="cart-btn">🛒 Cart</button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">✨ Mindful Living Essentials</p>
          <h1>Find Your Inner Peace</h1>
          <p className="hero-sub">
            Curated yoga essentials and healing accessories to nourish your body,
            calm your mind, and awaken your spirit.
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn-primary">Shop Now</a>
            <a href="#categories" className="btn-outline">Explore Categories</a>
          </div>
        </div>
        <div className="hero-badges">
          <span>🌿 100% Natural</span>
          <span>♻️ Eco-Friendly</span>
          <span>🤝 Ethically Sourced</span>
        </div>
      </section>

      {/* Categories */}
      <section className="section" id="categories">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <div className="category-card" key={cat.id}>
              <div className="cat-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="section section-alt" id="products">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About / Tagline */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <h2>Our Philosophy</h2>
          <p>
            At ZenFlow, we believe healing begins with intention. Every product is
            hand-picked to support your journey toward balance, presence, and peace.
            From the mat to the altar, we're here to help you create sacred space.
          </p>
          <div className="pillars">
            <div className="pillar">🧘 <strong>Practice</strong><br />Tools for every style of yoga</div>
            <div className="pillar">🌿 <strong>Heal</strong><br />Natural remedies & aromatherapy</div>
            <div className="pillar">✨ <strong>Thrive</strong><br />Community, guidance & growth</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>🌸 ZenFlow — Yoga Essentials & Accessories for Peace and Healing</p>
        <p className="footer-sub">© 2026 ZenFlow. Made with love and intention.</p>
      </footer>
    </div>
  );
}

export default App;
