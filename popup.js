document.addEventListener('DOMContentLoaded', () => {
  try {
    const products = [
      {
        id: 1,
        title: "Apple AirPods Pro 2-ئەۋلاد قۇلاقچىن",
        category: "tech",
        price: "7,499 TL",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=200&q=80",
        url: "https://www.trendyol.com/sr?q=AirPods+Pro+2"
      },
      {
        id: 2,
        title: "Ergonomic ئىشخانا ۋە ئويۇن ئورۇندۇقى",
        category: "home",
        price: "3,250 TL",
        image: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=200&q=80",
        url: "https://www.trendyol.com/sr?q=Oyuncu+Koltugu"
      },
      {
        id: 3,
        title: "Minimalist زامانىۋى قىشلىق كۆپەك چاپان",
        category: "fashion",
        price: "1,199 TL",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&q=80",
        url: "https://www.trendyol.com/sr?q=Erkek+Mont"
      },
      {
        id: 4,
        title: "Mechanical RGB كېچىك كونۇپكا تاختىسى",
        category: "tech",
        price: "1,850 TL",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&q=80",
        url: "https://www.trendyol.com/sr?q=Mekanik+Klavye"
      }
    ];

    const productListContainer = document.getElementById('productList');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderProducts(filterCategory = 'all') {
      productListContainer.innerHTML = '';

      const filteredProducts = filterCategory === 'all' 
        ? products 
        : products.filter(p => p.category === filterCategory);

      if (filteredProducts.length === 0) {
        productListContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted); padding: 20px;">مەھسۇلات تېپىلمىدى.</p>';
        return;
      }

      filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}" class="product-img">
          <div class="product-info">
            <div>
              <div class="product-title">${product.title}</div>
              <div class="product-price">${product.price}</div>
            </div>
            <button class="buy-btn" data-url="${product.url}">
              سېتىۋېلىش (Trendyol)
            </button>
          </div>
        `;

        productListContainer.appendChild(card);
      });

      document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const targetUrl = e.currentTarget.getAttribute('data-url');
          if (targetUrl) {
            chrome.tabs.create({ url: targetUrl });
          }
        });
      });
    }

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        renderProducts(category);
      });
    });

    renderProducts();

  } catch (error) {
    console.error("IA Ticaret extension initialization error:", error);
  }
});