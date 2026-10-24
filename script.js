// Trendyol Oyuncu (Gamer) Ürünleri Verisi
const products = [
    {
        title: "Dragon RTX4070 Super Intel i7 Gaming Masaüstü Oyuncu Bilgisayarı",
        category: "GAMING PC SET",
        badge: "RTX 4070 SUPER",
        price: "44.999 TL",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80",
        url: "https://www.trendyol.com/sr?q=Gaming+Bilgisayar"
    },
    {
        title: "27" 240Hz 0.5ms Curved RGB Kavisli Oyuncu Monitörü",
        category: "MONİTÖR",
        badge: "240Hz / 0.5MS",
        price: "8.499 TL",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
        url: "https://www.trendyol.com/sr?q=240hz+Oyuncu+Monitoru"
    },
    {
        title: "Pro Cyber RGB Mekanik Kablosuz Oyuncu Klavyesi",
        category: "KLAVYE",
        badge: "RGB MEKANİK",
        price: "2.199 TL",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
        url: "https://www.trendyol.com/sr?q=Mekanik+Klavye"
    },
    {
        title: "Ultra Light 26.000 DPI Kablosuz RGB Gaming Mouse",
        category: "MOUSE",
        badge: "26000 DPI",
        price: "1.450 TL",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
        url: "https://www.trendyol.com/sr?q=Gaming+Mouse"
    },
    {
        title: "7.1 Surround RGB Işıklı Kablosuz Oyuncu Kulaklığı",
        category: "KULAKLIK",
        badge: "7.1 SURROUND",
        price: "2.899 TL",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80",
        url: "https://www.trendyol.com/sr?q=Oyuncu+Kulakligi"
    },
    {
        title: "Ergonomik Bel Destekli RGB LED Oyuncu Koltuğu",
        category: "KOLTUK",
        badge: "RGB LEDLİ",
        price: "5.750 TL",
        image: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=500&q=80",
        url: "https://www.trendyol.com/sr?q=Oyuncu+Koltugu"
    },
    {
        title: "XXL RGB Ledli Su Geçirmez Gaming Mousepad (90x40cm)",
        category: "AKSESUAR",
        badge: "XXL RGB",
        price: "499 TL",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&q=80",
        url: "https://www.trendyol.com/sr?q=RGB+Mousepad"
    },
    {
        title: "Full RGB Çift Monitör Tutucu Amortisörlü Oyuncu Standı",
        category: "SETUP EKİPMANI",
        badge: "ÇİFT KOL",
        price: "1.890 TL",
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&q=80",
        url: "https://www.trendyol.com/sr?q=Monitor+Standi"
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
            <div class="product-badge">${product.badge}</div>
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.title}" class="product-img">
            </div>
            <div class="product-details">
                <div>
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.title}</h3>
                </div>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <a href="${product.url}" target="_blank" class="buy-btn">
                        Satın Al <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
});
