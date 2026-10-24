// Trendyol Ürün Verileri
const products = [
    {
        title: "Apple AirPods Pro 2. Nesil Kulaklık",
        price: "7.499 TL",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80",
        url: "https://www.trendyol.com/sr?q=AirPods+Pro+2"
    },
    {
        title: "Ergonomik Oyuncu ve Çalışma Koltuğu",
        price: "3.250 TL",
        image: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=400&q=80",
        url: "https://www.trendyol.com/sr?q=Oyuncu+Koltugu"
    },
    {
        title: "Minimalist Kışlık Şişme Mont",
        price: "1.199 TL",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
        url: "https://www.trendyol.com/sr?q=Erkek+Mont"
    },
    {
        title: "Mekanik RGB Oyuncu Klavyesi",
        price: "1.850 TL",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80",
        url: "https://www.trendyol.com/sr?q=Mekanik+Klavye"
    }
];

// Sayfa yüklendiğinde ürünleri ekrana basan fonksiyon
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('products-container');
    if (!container) return;

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.title}" class="product-img">
            </div>
            <div class="product-details">
                <div>
                    <h3 class="product-title">${product.title}</h3>
                </div>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <a href="${product.url}" target="_blank" class="buy-btn">
                        Satın Al <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
});
