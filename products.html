// AS Fashions Dynamic Product Catalog
const products = [
    { id: 1, name: "Royal Ethnic Kurta Set", price: 1499, category: "Women", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=500&q=80", tag: "Trending" },
    { id: 2, name: "Urban Streetwear Oversized Tee", price: 799, category: "Men", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80", tag: "Bestseller" },
    { id: 3, name: "Classic Indigo Denim Jacket", price: 2199, category: "Unisex", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=500&q=80", tag: "New Arrival" },
    { id: 4, name: "Designer Party Wear Gown", price: 3499, category: "Women", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=80", tag: "Limited" },
    { id: 5, name: "Formal Tailored Blazer", price: 2899, category: "Men", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80", tag: "Trending" },
    { id: 6, name: "Boho Chic Summer Dress", price: 1299, category: "Women", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=500&q=80", tag: "Sale" }
];

// Render Products Dynamically
const container = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");

function renderProducts(items) {
    if (!container) return;
    if(items.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: #a5b4fc; font-size: 1.2rem;">No styles found matching your vibe! 🕵️‍♂️</p>`;
        return;
    }
    container.innerHTML = items.map(p => `
        <div class="product-card" onclick="viewProduct(${p.id})">
            <div class="card-img-wrapper">
                <span class="badge">${p.tag}</span>
                <img src="${p.image}" alt="${p.name}">
                <div class="quick-view-overlay">Quick View</div>
            </div>
            <div class="card-content">
                <span class="category">${p.category}</span>
                <h3>${p.name}</h3>
                <div class="price-row">
                    <span class="price">₹${p.price}</span>
                    <button class="cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">⚡ Grab</button>
                </div>
            </div>
        </div>
    `).join("");
}

// Search Filter Logic
if(searchInput) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
        renderProducts(filtered);
    });
}

function viewProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

function addToCart(id) {
    alert(`⚡ Item #${id} added to AS Fashions Cart successfully!`);
}

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
});
