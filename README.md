<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEXUS GAMING - Oyuncu Ekipmanları & Gaming Setup</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&display=swap" rel="stylesheet">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Rajdhani', sans-serif;
            scroll-behavior: smooth;
        }

        :root {
            --bg-color: #050811;
            --card-bg: rgba(13, 19, 33, 0.7);
            --card-border: rgba(0, 240, 255, 0.2);
            --neon-cyan: #00f0ff;
            --neon-magenta: #ff0055;
            --neon-green: #39ff14;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --gradient-cyber: linear-gradient(135deg, #00f0ff 0%, #ff0055 100%);
            --gradient-btn: linear-gradient(90deg, #ff0055 0%, #7000ff 100%);
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            overflow-x: hidden;
            line-height: 1.5;
        }

        .glow-cyan {
            position: absolute;
            top: 5%;
            left: 10%;
            width: 450px;
            height: 450px;
            background: rgba(0, 240, 255, 0.15);
            filter: blur(160px);
            border-radius: 50%;
            z-index: -1;
        }

        .glow-magenta {
            position: absolute;
            top: 35%;
            right: 5%;
            width: 500px;
            height: 500px;
            background: rgba(255, 0, 85, 0.15);
            filter: blur(180px);
            border-radius: 50%;
            z-index: -1;
        }

        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 18px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(5, 8, 17, 0.9);
            backdrop-filter: blur(15px);
            z-index: 1000;
            border-bottom: 2px solid rgba(0, 240, 255, 0.3);
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
        }

        .logo {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.8rem;
            font-weight: 900;
            color: var(--text-main);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 12px;
            letter-spacing: 2px;
        }

        .logo-icon {
            color: var(--neon-cyan);
            text-shadow: 0 0 10px var(--neon-cyan);
        }

        .logo span {
            color: var(--neon-magenta);
            text-shadow: 0 0 10px var(--neon-magenta);
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 35px;
        }

        nav a {
            color: var(--text-muted);
            text-decoration: none;
            font-weight: 700;
            font-size: 1.1rem;
            transition: 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            letter-spacing: 1px;
        }

        nav a:hover, nav a.active {
            color: var(--neon-cyan);
            text-shadow: 0 0 8px var(--neon-cyan);
        }

        .nav-btn {
            font-family: 'Orbitron', sans-serif;
            background: var(--gradient-btn);
            color: #fff;
            padding: 12px 28px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.95rem;
            transition: 0.3s ease;
            letter-spacing: 1.5px;
            box-shadow: 0 0 15px rgba(255, 0, 85, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.2);
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .nav-btn:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 0 25px rgba(255, 0, 85, 0.8), 0 0 10px var(--neon-cyan);
        }

        .hero {
            min-height: 75vh;
            padding: 180px 8% 60px;
            text-align: center;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 18px;
            background: rgba(255, 0, 85, 0.15);
            border: 1px solid var(--neon-magenta);
            border-radius: 20px;
            color: var(--neon-magenta);
            font-family: 'Orbitron', sans-serif;
            font-size: 0.85rem;
            letter-spacing: 2px;
            margin-bottom: 20px;
            box-shadow: 0 0 10px rgba(255, 0, 85, 0.3);
        }

        .hero h1 {
            font-family: 'Orbitron', sans-serif;
            font-size: 3.8rem;
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 20px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        .hero h1 span {
            background: var(--gradient-cyber);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 0 15px rgba(0, 240, 255, 0.4));
        }

        .hero p {
            color: var(--text-muted);
            font-size: 1.25rem;
            max-width: 750px;
            margin: 0 auto 35px;
            font-weight: 500;
        }

        .main-btn {
            padding: 16px 36px;
            font-size: 1.1rem;
        }

        .products-section {
            padding: 60px 8% 120px;
        }

        .section-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 2.5rem;
            font-weight: 900;
            letter-spacing: 2px;
            color: var(--text-main);
            position: relative;
            display: inline-block;
        }

        .section-title::after {
            content: '';
            display: block;
            width: 80%;
            height: 4px;
            background: var(--gradient-cyber);
            margin: 10px auto 0;
            box-shadow: 0 0 10px var(--neon-cyan);
            border-radius: 2px;
        }

        .section-desc {
            color: var(--text-muted);
            font-size: 1.15rem;
            margin-top: 12px;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }

        .product-card {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            position: relative;
        }

        .product-card:hover {
            transform: translateY(-10px);
            border-color: var(--neon-cyan);
            box-shadow: 0 0 25px rgba(0, 240, 255, 0.4);
        }

        .product-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background: rgba(5, 8, 17, 0.85);
            border: 1px solid var(--neon-green);
            color: var(--neon-green);
            padding: 4px 12px;
            border-radius: 12px;
            font-family: 'Orbitron', sans-serif;
            font-size: 0.75rem;
            font-weight: 700;
            z-index: 2;
            box-shadow: 0 0 8px var(--neon-green);
        }

        .product-img-container {
            width: 100%;
            height: 230px;
            overflow: hidden;
            background: rgba(0, 0, 0, 0.4);
            position: relative;
        }

        .product-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
        }

        .product-card:hover .product-img {
            transform: scale(1.08);
        }

        .product-details {
            padding: 22px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: space-between;
        }

        .product-category {
            color: var(--neon-cyan);
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 6px;
        }

        .product-title {
            font-family: 'Rajdhani', sans-serif;
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: var(--text-main);
            line-height: 1.3;
        }

        .product-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .product-price {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.3rem;
            font-weight: 900;
            color: var(--neon-green);
            text-shadow: 0 0 8px rgba(57, 255, 20, 0.4);
        }

        .buy-btn {
            background: var(--gradient-btn);
            color: #fff;
            padding: 10px 18px;
            border-radius: 8px;
            text-decoration: none;
            font-family: 'Orbitron', sans-serif;
            font-size: 0.85rem;
            font-weight: 700;
            transition: 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            letter-spacing: 1px;
            box-shadow: 0 0 10px rgba(255, 0, 85, 0.4);
        }

        .buy-btn:hover {
            box-shadow: 0 0 20px rgba(255, 0, 85, 0.8), 0 0 8px var(--neon-cyan);
            transform: scale(1.05);
        }

        footer {
            border-top: 2px solid rgba(0, 240, 255, 0.2);
            padding: 35px 8%;
            text-align: center;
            color: var(--text-muted);
            font-size: 0.95rem;
            background: rgba(5, 8, 17, 0.95);
        }

        @media (max-width: 900px) {
            .hero h1 {
                font-size: 2.6rem;
            }
            nav ul {
                display: none;
            }
        }
    </style>
</head>
<body>

    <div class="glow-cyan"></div>
    <div class="glow-magenta"></div>

    <header>
        <a href="#" class="logo">
            <i class="fa-solid fa-gamepad logo-icon"></i>
            NEXUS<span>GAMING</span>
        </a>
        <nav>
            <ul>
                <li><a href="#" class="active"><i class="fa-solid fa-house"></i> Ana Sayfa</a></li>
                <li><a href="#urunler"><i class="fa-solid fa-headset"></i> Ekipmanlar</a></li>
            </ul>
        </nav>
        <a href="#urunler" class="nav-btn"><i class="fa-solid fa-bolt"></i> SETUP'I KUR</a>
    </header>

    <section class="hero">
        <div class="hero-badge"><i class="fa-solid fa-fire"></i> ULTIMATE GAMING EXPERIENCE</div>
        <h1>OYUN DÜNYASININ <span>LİDER SETUP'LARI</span></h1>
        <p>Maksimum FPS, sıfır gecikme ve RGB atmosfer! Profesyonel e-spor oyuncularının tercih ettiği üst düzey oyuncu bilgisayarları, 240Hz+ monitörler ve oyuncu ekipmanları Trendyol güvencesiyle burada.</p>
        <div class="hero-actions">
            <a href="#urunler" class="nav-btn main-btn"><i class="fa-solid fa-cart-shopping"></i> EKİPMANLARI İNCELE</a>
        </div>
    </section>

    <section class="products-section" id="urunler">
        <div class="section-header">
            <h2 class="section-title">PRO OYUNCU EKİPMANLARI</h2>
            <p class="section-desc">Zaferinizi garantileyecek en yeni RGB ve yüksek performanslı gaming ürünleri</p>
        </div>
        
        <div class="products-grid" id="products-container">
            <!-- Ürünler JavaScript ile yüklenecek -->
        </div>
    </section>

    <footer>
        <p>&copy; 2026 NEXUS GAMING. Tüm hakları saklıdır. Trendyol Entegrasyonlu E-Spor & Oyuncu Mağazası.</p>
    </footer>

    <script>
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
                title: "27\" 240Hz 0.5ms Curved RGB Kavisli Oyuncu Monitörü",
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
    </script>
</body>
</html>