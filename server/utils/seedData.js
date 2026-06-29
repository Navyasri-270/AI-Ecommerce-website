const products = [
  // ==================== MOBILE PHONES (20 items) ====================
  {
    title: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "Mobile Phones",
    price: 1199.99,
    description: "Features a strong and light titanium design, powerful new Action button, A17 Pro chip, and a powerful camera system.",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.8
  },
  {
    title: "Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Mobile Phones",
    price: 1299.99,
    description: "Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity and productivity.",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.7
  },
  {
    title: "Google Pixel 8 Pro",
    brand: "Google",
    category: "Mobile Phones",
    price: 999.00,
    description: "The all-pro phone engineered by Google. It has the best of Google AI, the most advanced Pixel Camera ever, and a sleek modern design.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    stock: 18,
    rating: 4.6
  },
  {
    title: "OnePlus 12",
    brand: "OnePlus",
    category: "Mobile Phones",
    price: 799.99,
    description: "Redefined flagship specs with Snapdragon 8 Gen 3, 16GB RAM, 50MP triple Hasselblad camera system, and ultra-fast 100W charging.",
    image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&w=600&q=80",
    stock: 22,
    rating: 4.5
  },
  {
    title: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    category: "Mobile Phones",
    price: 1099.00,
    description: "Co-engineered with Leica, featuring a 1-inch main sensor, quad camera setup, Snapdragon 8 Gen 3, and stunning WQHD+ AMOLED display.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.4
  },
  {
    title: "iPhone 15",
    brand: "Apple",
    category: "Mobile Phones",
    price: 799.99,
    description: "Features Dynamic Island, 48MP Main camera, USB-C, and a durable color-infused glass and aluminum design.",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.5
  },
  {
    title: "Galaxy A55 5G",
    brand: "Samsung",
    category: "Mobile Phones",
    price: 449.99,
    description: "Stunning premium design, IP67 dust/water resistance, 50MP OIS camera, and multi-day battery life.",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.3
  },
  {
    title: "Pixel 8a",
    brand: "Google",
    category: "Mobile Phones",
    price: 499.00,
    description: "The AI-powered Pixel camera, Gemini nano-enabled on-device processing, and a high refresh rate display.",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80",
    stock: 28,
    rating: 4.4
  },
  {
    title: "Nothing Phone (2)",
    brand: "Nothing",
    category: "Mobile Phones",
    price: 599.99,
    description: "Unique transparent design featuring the iconic Glyph Interface, premium custom OS, and dual 50MP back cameras.",
    image: "https://images.unsplash.com/photo-1574756526149-f5144d52934a?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    rating: 4.5
  },
  {
    title: "Motorola Edge 50 Ultra",
    brand: "Motorola",
    category: "Mobile Phones",
    price: 899.99,
    description: "Curved premium borderless display, Pantone validated colors, real wood/vegan leather back panels, and 125W TurboPower charging.",
    image: "https://images.unsplash.com/photo-1551645121-d1034da75057?auto=format&fit=crop&w=600&q=80",
    stock: 10,
    rating: 4.2
  },
  {
    title: "Sony Xperia 1 VI",
    brand: "Sony",
    category: "Mobile Phones",
    price: 1399.00,
    description: "For creators: true optical zoom camera (85-170mm), 4K HDR OLED display, high-resolution audio, and micro-SD card expansion support.",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80",
    stock: 8,
    rating: 4.3
  },
  {
    title: "ASUS ROG Phone 8 Pro",
    brand: "ASUS",
    category: "Mobile Phones",
    price: 1199.99,
    description: "Ultimate gaming phone: AniMe Vision mini-LED back display, active aero-cooler, dual USB-C ports, and AirTriggers controls.",
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=600&q=80",
    stock: 14,
    rating: 4.7
  },
  {
    title: "Realme GT 6",
    brand: "Realme",
    category: "Mobile Phones",
    price: 549.00,
    description: "AI flagship killer with ultra-bright 6000-nits screen, Snapdragon 8s Gen 3, and 120W charging speed.",
    image: "https://images.unsplash.com/photo-1565849906660-446e4b2d69f0?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.1
  },
  {
    title: "POCO F6 Pro",
    brand: "POCO",
    category: "Mobile Phones",
    price: 499.00,
    description: "Hyper-performance engine powered by Snapdragon 8 Gen 2, WQHD+ Flow AMOLED panel, and massive vapor cooling chamber.",
    image: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.3
  },
  {
    title: "iPhone 13 Mini",
    brand: "Apple",
    category: "Mobile Phones",
    price: 599.99,
    description: "Supercompact powerhouse: 5.4-inch Super Retina XDR screen, A15 Bionic chip, and dual-camera system that fits in any pocket.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    stock: 9,
    rating: 4.6
  },
  {
    title: "Galaxy Z Fold 5",
    brand: "Samsung",
    category: "Mobile Phones",
    price: 1799.99,
    description: "Unfold a massive 7.6-inch tablet-like screen with a gapless hinge, multi-window multitasking, and S-Pen compatibility.",
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=600&q=80",
    stock: 7,
    rating: 4.4
  },
  {
    title: "Galaxy Z Flip 5",
    brand: "Samsung",
    category: "Mobile Phones",
    price: 999.99,
    description: "Compact folding flip phone with a large Flex Window folder cover screen for notifications, selfies, and custom widgets.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.5
  },
  {
    title: "Redmi Note 13 Pro+ 5G",
    brand: "Xiaomi",
    category: "Mobile Phones",
    price: 399.00,
    description: "Flagship 200MP camera with OIS, 1.5K curved AMOLED display, IP68 rated water-proof chassis, and 120W hyper-charging.",
    image: "https://images.unsplash.com/photo-1551645121-d1034da75057?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.2
  },
  {
    title: "iQOO 12 5G",
    brand: "iQOO",
    category: "Mobile Phones",
    price: 649.99,
    description: "Performance powerhouse with Snapdragon 8 Gen 3, custom Q1 gaming chip, and high-performance 144Hz AMOLED panel.",
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    rating: 4.4
  },
  {
    title: "Infinix GT 20 Pro",
    brand: "Infinix",
    category: "Mobile Phones",
    price: 299.99,
    description: "Cyberpunk mecha-loop LED design, Dimensity 8200 Ultimate gaming processor, and stable 120 FPS gaming performance.",
    image: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?auto=format&fit=crop&w=600&q=80",
    stock: 18,
    rating: 4.0
  },

  // ==================== LAPTOPS (20 items) ====================
  {
    title: "MacBook Air 13 M3",
    brand: "Apple",
    category: "Laptops",
    price: 1099.00,
    description: "Supercharged by the M3 chip. With an incredibly thin design and up to 18 hours of battery life, it's perfect for work and play.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.8
  },
  {
    title: "Dell XPS 15",
    brand: "Dell",
    category: "Laptops",
    price: 1899.99,
    description: "Premium build, thin bezels, stunning OLED touchscreen, Intel Core i7, 16GB DDR5, and Nvidia RTX 4050 graphics card.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    stock: 10,
    rating: 4.6
  },
  {
    title: "Lenovo ThinkPad X1 Carbon Gen 12",
    brand: "Lenovo",
    category: "Laptops",
    price: 1999.00,
    description: "The ultimate business laptop with military-grade carbon fiber body, legendary keyboard, Intel Core Ultra 7, and top security features.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    rating: 4.7
  },
  {
    title: "ASUS ROG Zephyrus G14",
    brand: "ASUS",
    category: "Laptops",
    price: 1599.99,
    description: "Compact 14-inch gaming laptop: AMD Ryzen 9, NVIDIA RTX 4070, gorgeous ROG Nebula OLED display, and sleek CNC aluminum body.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.7
  },
  {
    title: "HP Spectre x360 14",
    brand: "HP",
    category: "Laptops",
    price: 1449.00,
    description: "Luxurious 2-in-1 convertible laptop. Rotates 360 degrees, features Intel Core Ultra, 2.8K OLED screen, and bundled active pen.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80",
    stock: 14,
    rating: 4.5
  },
  {
    title: "Acer Swift Go 14",
    brand: "Acer",
    category: "Laptops",
    price: 749.99,
    description: "Incredible value: Intel Core i5 Evo, thin-and-light chassis, 90Hz OLED display, and clean webcam with dual microphones.",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.3
  },
  {
    title: "MacBook Pro 16 M3 Max",
    brand: "Apple",
    category: "Laptops",
    price: 3499.00,
    description: "The absolute pinnacle of mobile power: 16-core M3 Max CPU, 40-core GPU, 48GB Unified Memory, and Liquid Retina XDR screen.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    stock: 5,
    rating: 4.9
  },
  {
    title: "Razer Blade 16",
    brand: "Razer",
    category: "Laptops",
    price: 2999.99,
    description: "Crafted for elite gaming: CNC aluminum frame, Intel Core i9, NVIDIA RTX 4080, and dual-mode Mini-LED display (4K/FHD+).",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    stock: 8,
    rating: 4.8
  },
  {
    title: "HP Pavilion 15",
    brand: "HP",
    category: "Laptops",
    price: 599.00,
    description: "Your everyday computing companion. AMD Ryzen 5, 8GB RAM, 512GB SSD, thin bezels, and full-size numeric keyboard.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.1
  },
  {
    title: "Lenovo Legion Pro 5i",
    brand: "Lenovo",
    category: "Laptops",
    price: 1349.99,
    description: "Dominating gaming performance: Intel i7, RTX 4060, 165Hz WQXGA panel, and Legion Coldfront 5.0 advanced cooling setup.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    stock: 16,
    rating: 4.6
  },
  {
    title: "Microsoft Surface Laptop 6",
    brand: "Microsoft",
    category: "Laptops",
    price: 1299.00,
    description: "Sleek and minimalist design, Alcantara or metal keyboard decks, tall PixelSense touchscreen, and custom Intel Core Ultra CPU.",
    image: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    rating: 4.5
  },
  {
    title: "Dell Inspiron 14 2-in-1",
    brand: "Dell",
    category: "Laptops",
    price: 699.99,
    description: "Versatile folding layout, responsive FHD touchscreen, AMD Ryzen 7, 16GB RAM, and durable drop-down mechanical hinge.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.3
  },
  {
    title: "MSI Prestige 16 AI Evo",
    brand: "MSI",
    category: "Laptops",
    price: 1499.00,
    description: "Intel Evo certified premium business thin-and-light with integrated NPU for offline AI tasks, 32GB RAM, and 1TB SSD.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80",
    stock: 10,
    rating: 4.4
  },
  {
    title: "LG Gram Pro 17",
    brand: "LG",
    category: "Laptops",
    price: 1799.00,
    description: "Ultralight 17-inch engineering masterpiece. Weighs under 3 lbs while packing an Intel Core Ultra, RTX 3050, and 144Hz panel.",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80",
    stock: 8,
    rating: 4.5
  },
  {
    title: "ASUS Zenbook Duo OLED",
    brand: "ASUS",
    category: "Laptops",
    price: 1699.99,
    description: "Dual 14-inch OLED touchscreens with detachable keyboard. Infinite multitasking options for coders, designers, and creatives.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    stock: 6,
    rating: 4.8
  },
  {
    title: "Gigabyte AORUS 16X",
    brand: "Gigabyte",
    category: "Laptops",
    price: 1499.00,
    description: "AI-enhanced gaming laptop: Intel i7 14th Gen, RTX 4070, 16-inch QHD 165Hz screen, and customizable RGB keyboard and chassis accents.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    stock: 10,
    rating: 4.4
  },
  {
    title: "ASUS Vivobook 16",
    brand: "ASUS",
    category: "Laptops",
    price: 499.99,
    description: "Affordable productivity: 16-inch large screen, AMD Ryzen 5, 8GB RAM, 512GB NVMe SSD, and clean modern look.",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.0
  },
  {
    title: "Samsung Galaxy Book 4 Pro",
    brand: "Samsung",
    category: "Laptops",
    price: 1449.00,
    description: "Dynamic AMOLED 2X touchscreen, Intel Core Ultra 7, slim profile, and tight integration with Galaxy ecosystem phones.",
    image: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    rating: 4.6
  },
  {
    title: "Chromebook Spin 714",
    brand: "Acer",
    category: "Laptops",
    price: 569.00,
    description: "Premium durable 2-in-1 Chromebook, Intel Core i3, fast ChromeOS, long-lasting battery, and bright touchscreen.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.2
  },
  {
    title: "Lenovo IdeaPad Slim 3",
    brand: "Lenovo",
    category: "Laptops",
    price: 399.99,
    description: "Student budget pick: Intel Core i3 13th Gen, 8GB LPDDR5, 256GB SSD storage, lightweight design, and solid battery longevity.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    stock: 22,
    rating: 3.9
  },

  // ==================== ELECTRONICS (20 items) ====================
  {
    title: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    category: "Electronics",
    price: 398.00,
    description: "Industry leading noise canceling wireless headphones, custom built-in v1 processor, crystal clear hands-free calls.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    stock: 45,
    rating: 4.8
  },
  {
    title: "Apple Watch Series 9",
    brand: "Apple",
    category: "Electronics",
    price: 399.00,
    description: "Carbon neutral design, bright Always-On Retina display, S9 chip, touch-free double tap gesture, advanced health tracking.",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.7
  },
  {
    title: "iPad Pro 11-inch M4",
    brand: "Apple",
    category: "Electronics",
    price: 999.00,
    description: "The thinnest Apple product ever, tandem OLED Ultra Retina XDR screen, supercharged M4 chip, and support for Apple Pencil Pro.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.9
  },
  {
    title: "Nintendo Switch OLED Model",
    brand: "Nintendo",
    category: "Electronics",
    price: 349.99,
    description: "Vibrant 7-inch OLED screen, wide adjustable stand, wired LAN port on the TV dock, 64GB storage, and hybrid handheld gaming.",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.7
  },
  {
    title: "Sony PlayStation 5 Slim",
    brand: "Sony",
    category: "Electronics",
    price: 499.99,
    description: "Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback, and breathtaking new PS5 games.",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.8
  },
  {
    title: "Bose QuietComfort Ultra Earbuds",
    brand: "Bose",
    category: "Electronics",
    price: 299.00,
    description: "Breakthrough spatial audio earbuds, personalized active noise cancellation, and CustomTune technology for bespoke acoustic response.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    stock: 32,
    rating: 4.6
  },
  {
    title: "Fujifilm X-T5 Mirrorless Camera",
    brand: "Fujifilm",
    category: "Electronics",
    price: 1699.99,
    description: "40.2MP high-resolution sensor, retro mechanical dials, 3-way tilting LCD, and legendary film simulation modes built directly inside.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    stock: 8,
    rating: 4.7
  },
  {
    title: "Sonos Era 300 Smart Speaker",
    brand: "Sonos",
    category: "Electronics",
    price: 449.00,
    description: "Immersive spatial audio speaker with Dolby Atmos compatibility, smart voice assistant control, and Trueplay acoustic room-tuning.",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.5
  },
  {
    title: "GoPro HERO12 Black",
    brand: "GoPro",
    category: "Electronics",
    price: 399.99,
    description: "Unbelievable 5.3K60 video clarity, Emmy award-winning HyperSmooth 6.0 stabilization, long runtime Enduro battery, and waterproof build.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&q=80",
    stock: 24,
    rating: 4.4
  },
  {
    title: "Anker Prime Power Bank 20K",
    brand: "Anker",
    category: "Electronics",
    price: 129.99,
    description: "Massive 200W total output, smart digital screen showing charging stats, 20,000mAh capacity, and compact travel size.",
    image: "https://images.unsplash.com/photo-1609592424085-78ba1925b412?auto=format&fit=crop&w=600&q=80",
    stock: 50,
    rating: 4.7
  },
  {
    title: "Samsung T7 Shield 2TB Portable SSD",
    brand: "Samsung",
    category: "Electronics",
    price: 179.99,
    description: "Super-fast USB 3.2 Gen2 storage, read/write speeds up to 1050 MB/s, IP65 water/dust resistant rugged outer shell.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65dffc6a3d?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.8
  },
  {
    title: "Logitech MX Master 3S Mouse",
    brand: "Logitech",
    category: "Electronics",
    price: 99.99,
    description: "Ergonomic productivity mouse, ultra-quiet clicks, 8K DPI track-on-glass sensor, and hyper-fast MagSpeed electromagnetic scroll wheel.",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.7
  },
  {
    title: "SteelSeries Apex Pro TKL Keyboard",
    brand: "SteelSeries",
    category: "Electronics",
    price: 189.99,
    description: "OmniPoint 2.0 adjustable hyper-magnetic switches, rapid trigger capabilities, OLED smart display, and aircraft-grade aluminum frame.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    stock: 18,
    rating: 4.6
  },
  {
    title: "DJI Mini 4 Pro Drone",
    brand: "DJI",
    category: "Electronics",
    price: 759.00,
    description: "Ultralight drone (under 249g), omnidirectional active obstacle sensing, 4K/60fps HDR vertical shooting, and 34-minute battery duration.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80",
    stock: 10,
    rating: 4.8
  },
  {
    title: "Sennheiser HD 600 Audiophile Headphones",
    brand: "Sennheiser",
    category: "Electronics",
    price: 399.95,
    description: "Legendary open-back reference headphones, balanced response, extremely natural spatial soundstage, for music purists and studio mixers.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.9
  },
  {
    title: "Blue Yeti USB Microphone",
    brand: "Logitech",
    category: "Electronics",
    price: 129.99,
    description: "Four custom pickup polar patterns, direct audio gain controls, zero-latency headphone monitoring output, best-selling podcast mic.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.5
  },
  {
    title: "Kindle Paperwhite 16GB",
    brand: "Amazon",
    category: "Electronics",
    price: 149.99,
    description: "6.8-inch display with thin borders, warm adjustable front light, up to 10 weeks of battery endurance, waterproof IPX8 casing.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.7
  },
  {
    title: "Elgato Stream Deck MK.2",
    brand: "Elgato",
    category: "Electronics",
    price: 149.99,
    description: "15 customizable LCD keys to trigger actions, plugins, and custom media commands instantly. Perfect for streamers, coders, and editors.",
    image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.6
  },
  {
    title: "Razer Kiyo Pro Webcam",
    brand: "Razer",
    category: "Electronics",
    price: 199.99,
    description: "High-performance adaptive light sensor for pristine 1080p 60fps video in dim settings, HDR compatibility, wide field of view lens.",
    image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=600&q=80",
    stock: 22,
    rating: 4.3
  },
  {
    title: "Ring Video Doorbell Plus",
    brand: "Ring",
    category: "Electronics",
    price: 179.99,
    description: "Head-to-Toe HD video, package detection alerts, two-way speech audio, custom motion alerts, and simple battery powered setup.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.4
  },

  // ==================== FASHION (20 items) ====================
  {
    title: "Classic Canvas Jacket",
    brand: "Levi's",
    category: "Fashion",
    price: 89.99,
    description: "Durable cotton duck canvas outer shell, soft flannel internal lining, double-stitched pockets, timeless workwear aesthetics.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.5
  },
  {
    title: "Heavyweight Cotton Hoodie",
    brand: "Champion",
    category: "Fashion",
    price: 65.00,
    description: "Thick 400 GSM reverse-weave cotton-poly blend, resists shrinkage, double-ribbed side panels, cozy fleece interior.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
    stock: 50,
    rating: 4.6
  },
  {
    title: "Slim Fit Stretch Chinos",
    brand: "Dockers",
    category: "Fashion",
    price: 59.99,
    description: "Smart casual comfort. Soft cotton with built-in spandex stretch, wrinkle-resistant finish, secure back button pockets.",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80",
    stock: 60,
    rating: 4.3
  },
  {
    title: "Linen Summer Button-Up",
    brand: "J.Crew",
    category: "Fashion",
    price: 79.50,
    description: "Pure Irish linen, highly breathable weave, relaxed collar, classic fit, keeps you cool in hot tropical weather.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.4
  },
  {
    title: "Cashmere Crewneck Sweater",
    brand: "Everlane",
    category: "Fashion",
    price: 150.00,
    description: "Luxuriously soft Grade-A cashmere from Inner Mongolia. Light yet insulating, classic crewneck fit, eco-conscious dye colors.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.7
  },
  {
    title: "Denim Sherpa Trucker Jacket",
    brand: "Levi's",
    category: "Fashion",
    price: 108.00,
    description: "Classic denim look with warm fleece lining inside, insulated sleeve linings, snap-button cuffs, and side slash pockets.",
    image: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.6
  },
  {
    title: "Waterproof Winter Parka",
    brand: "Columbia",
    category: "Fashion",
    price: 220.00,
    description: "Omni-Heat thermal reflective lining, seam-sealed waterproof Omni-Tech shell, adjustable synthetic insulation storm hood.",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    rating: 4.8
  },
  {
    title: "Casual Oxford Cotton Shirt",
    brand: "Ralph Lauren",
    category: "Fashion",
    price: 98.00,
    description: "Traditional thick Oxford cotton cloth, button-down collar, signature embroidered pony logo, tailored standard fit.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.5
  },
  {
    title: "Lightweight Windbreaker",
    brand: "Patagonia",
    category: "Fashion",
    price: 119.00,
    description: "Made from recycled ocean fishing nets, DWR (durable water repellent) coating, packs down into its own zip pocket.",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80",
    stock: 22,
    rating: 4.6
  },
  {
    title: "Merino Wool Thermal Top",
    brand: "Smartwool",
    category: "Fashion",
    price: 85.00,
    description: "100% merino wool base layer. Naturally odor-resistant, moisture-wicking fibers, flatlock seams to prevent chafing.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.7
  },
  {
    title: "Relaxed Fit Cargo Pants",
    brand: "Carhartt WIP",
    category: "Fashion",
    price: 110.00,
    description: "Heavy cotton ripstop fabric, reinforced seat knees, side-mounted cargo flap pockets, drawstring tie cuffs.",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80",
    stock: 28,
    rating: 4.4
  },
  {
    title: "Premium Leather Belt",
    brand: "Timberland",
    category: "Fashion",
    price: 38.00,
    description: "Full-grain thick oily leather, heavy duty metal buckle with antique finish, 1.5-inch width perfect for utility denims.",
    image: "https://images.unsplash.com/photo-1624222247566-7f824026840e?auto=format&fit=crop&w=600&q=80",
    stock: 50,
    rating: 4.5
  },
  {
    title: "Unisex Cotton Crew Socks (6 Pack)",
    brand: "Nike",
    category: "Fashion",
    price: 24.00,
    description: "Dri-FIT sweat-wicking knit, padded footbed underfoot cushioning, ribbed arch compression band for stability.",
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=600&q=80",
    stock: 100,
    rating: 4.7
  },
  {
    title: "Wool Blend Trench Coat",
    brand: "Zara",
    category: "Fashion",
    price: 189.00,
    description: "Double-breasted lapels, tie belt at waist, heavy wool blend insulation, beautiful dark grey silhouette fit.",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.3
  },
  {
    title: "Pleated Summer Midi Dress",
    brand: "Mango",
    category: "Fashion",
    price: 79.99,
    description: "Flowy lightweight chiffon fabric, pleated A-line skirt, matching tie-belt, comfortable V-neck collar.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.5
  },
  {
    title: "Athletic Quick-Dry Shorts",
    brand: "Under Armour",
    category: "Fashion",
    price: 32.00,
    description: "Lightweight woven fabric, moisture wicking interior mesh briefs, mesh side pockets, adjustable elastic waist cord.",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
    stock: 45,
    rating: 4.2
  },
  {
    title: "Graphic Print Streetwear Tee",
    brand: "Stussy",
    category: "Fashion",
    price: 45.00,
    description: "Premium heavy cotton jersey tee, ribbed crew collar, screen-printed original graphic art on back, relaxed boxy cut.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.6
  },
  {
    title: "Stretch Denim Skinny Jeans",
    brand: "Levi's",
    category: "Fashion",
    price: 79.99,
    description: "Classic 511 slim jeans. Mid-rise elastic fit, copper rivets, iconic leather horse logo back patch.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.4
  },
  {
    title: "Wide Brim Sun Straw Hat",
    brand: "Columbia",
    category: "Fashion",
    price: 35.00,
    description: "Woven palm leaf straw, Omni-Shield moisture repellent headband, SPF 50 sun protection, adjustable chin cord.",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.1
  },
  {
    title: "Cable-Knit Cozy Scarf",
    brand: "Fossil",
    category: "Fashion",
    price: 28.00,
    description: "Soft acrylic yarn in classic Irish cable knit weave, long length wrap-around warmth, fringed trim borders.",
    image: "https://images.unsplash.com/photo-1520903928273-0f44b0a28091?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.5
  },

  // ==================== FOOTWEAR (20 items) ====================
  {
    title: "Air Max 270 Sneakers",
    brand: "Nike",
    category: "Footwear",
    price: 160.00,
    description: "Nike's first lifestyle Air Max delivers style, comfort and big attitude. Visible 270-degree Air bubble cushion.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.7
  },
  {
    title: "Ultraboost Light Running Shoes",
    brand: "Adidas",
    category: "Footwear",
    price: 190.00,
    description: "The lightest Ultraboost ever made. High-energy return Boost foam midsole, breathable Primeknit+ upper mesh.",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c1d2f4ee?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.8
  },
  {
    title: "Classic Leather Chelsea Boots",
    brand: "Dr. Martens",
    category: "Footwear",
    price: 170.00,
    description: "Sturdy polished smooth leather, elastic ankle gussets, air-cushioned bouncing soles, finished with signature yellow stitching.",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.6
  },
  {
    title: "Classic Canvas High-Tops",
    brand: "Converse",
    category: "Footwear",
    price: 65.00,
    description: "Chuck Taylor All Star original canvas sneaker, durable rubber vulcanized soles, star ankle medallion details.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    stock: 50,
    rating: 4.5
  },
  {
    title: "Old Skool Skate Shoes",
    brand: "Vans",
    category: "Footwear",
    price: 70.00,
    description: "The Vans classic skate shoe, durable suede-canvas paneling, padded collar support, iconic rubber waffle traction soles.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
    stock: 45,
    rating: 4.6
  },
  {
    title: "Premium Waterproof 6-Inch Boot",
    brand: "Timberland",
    category: "Footwear",
    price: 198.00,
    description: "Seam-sealed nubuck leather boot, anti-fatigue footbeds, padded leather collars, heavy lugged outdoor grip soles.",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.8
  },
  {
    title: "Arizona Two-Strap Sandals",
    brand: "Birkenstock",
    category: "Footwear",
    price: 130.00,
    description: "Iconic anatomical cork-latex footbed contours to your foot, Birko-Flor synthetic upper straps, shock-absorbing EVA soles.",
    image: "https://images.unsplash.com/photo-1603487265989-6bd074945893?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.7
  },
  {
    title: "Speedcross 6 Trail Runners",
    brand: "Salomon",
    category: "Footwear",
    price: 140.00,
    description: "Mud-shedding Contagrip lugged outsoles, quick-lace drawcord, Sensifit snug wrap system, built for rugged trail terrain.",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
    stock: 18,
    rating: 4.7
  },
  {
    title: "Gel-Kayano 30 Stability Shoes",
    brand: "ASICS",
    category: "Footwear",
    price: 160.00,
    description: "Advanced 4D Guidance System stability, soft FF Blast Plus eco cushioning, rearfoot PureGEL technology for shock relief.",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c1d2f4ee?auto=format&fit=crop&w=600&q=80",
    stock: 22,
    rating: 4.6
  },
  {
    title: "Air Force 1 '07",
    brand: "Nike",
    category: "Footwear",
    price: 115.00,
    description: "Legendary basketball shoe silhouette, premium stitched leather overlays, Nike Air capsules for springy response.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.8
  },
  {
    title: "Clifton 9 Daily Trainers",
    brand: "Hoka One One",
    category: "Footwear",
    price: 145.00,
    description: "Signature maximalist thick EVA foam midsole, rockered geometry for smooth roll forward, extremely lightweight mesh upper.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.7
  },
  {
    title: "Suede Classic Sneakers",
    brand: "Puma",
    category: "Footwear",
    price: 75.00,
    description: "Vintage retro trainer, full rich suede upper paneling, gold foil Puma logo prints, textured rubber midsole strip.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.4
  },
  {
    title: "Classic Clog Sandals",
    brand: "Crocs",
    category: "Footwear",
    price: 50.00,
    description: "Molded Croslite foam formulation, lightweight ventilation ports, pivoted heel strap for security, water-friendly comfort.",
    image: "https://images.unsplash.com/photo-1603487265989-6bd074945893?auto=format&fit=crop&w=600&q=80",
    stock: 60,
    rating: 4.5
  },
  {
    title: "Danner Light Hiking Boots",
    brand: "Danner",
    category: "Footwear",
    price: 430.00,
    description: "USA-made classic leather hiker, Gore-Tex 100% waterproof barrier, Vibram Kletterlift heavy tread outdoor outsoles.",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80",
    stock: 6,
    rating: 4.8
  },
  {
    title: "Classic Tassel Loafers",
    brand: "Cole Haan",
    category: "Footwear",
    price: 150.00,
    description: "Hand-burnished leather slip-ons, fully lined footbed cushioning, stacked heel with rubber grip pod.",
    image: "https://images.unsplash.com/photo-1614252329312-414436d76de4?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    rating: 4.3
  },
  {
    title: "OOriginal Recovery Sandals",
    brand: "Oofos",
    category: "Footwear",
    price: 60.00,
    description: "Absorbs 37% more impact than traditional foams, reduces stress on sore feet and joints, machine washable open-toe design.",
    image: "https://images.unsplash.com/photo-1603487265989-6bd074945893?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.4
  },
  {
    title: "Ghost 15 Running Shoes",
    brand: "Brooks",
    category: "Footwear",
    price: 140.00,
    description: "Smooth ride engineering: soft DNA Loft v2 responsive cushioning, segmented crash pad transitions, breathable engineered knit.",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c1d2f4ee?auto=format&fit=crop&w=600&q=80",
    stock: 28,
    rating: 4.7
  },
  {
    title: "574 Core Sneakers",
    brand: "New Balance",
    category: "Footwear",
    price: 89.99,
    description: "The most iconic New Balance retro sneaker, ENCAP midsole support, soft suede and mesh upper, classic comfort build.",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.6
  },
  {
    title: "Premium Patent Pointed Heels",
    brand: "Nine West",
    category: "Footwear",
    price: 99.00,
    description: "Elegant high-shine patent leather pumps, pointed toe, 3.5-inch slender heel, padded instep inserts for office comfort.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.2
  },
  {
    title: "Fuzzy Warm Slip-On Slippers",
    brand: "UGG",
    category: "Footwear",
    price: 120.00,
    description: "Genuine sheepskin shearling lining, easy slip-on suede structure, lightweight indoor-outdoor tread sole.",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.7
  },

  // ==================== BOOKS (20 items) ====================
  {
    title: "Atomic Habits",
    brand: "Penguin",
    category: "Books",
    price: 16.20,
    description: "An easy and proven way to build good habits and break bad ones. Written by world-renowned habit specialist James Clear.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    stock: 100,
    rating: 4.8
  },
  {
    title: "The Creative Act: A Way of Being",
    brand: "Penguin Press",
    category: "Books",
    price: 22.50,
    description: "A beautiful, meditative guide to the creative process from legendary music producer Rick Rubin, distilling wisdom gathered over decades.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    stock: 45,
    rating: 4.7
  },
  {
    title: "Introduction to Algorithms",
    brand: "MIT Press",
    category: "Books",
    price: 99.00,
    description: "The bible of algorithms. Comprehensive guide to algorithms, data structures, complexity theory, and parallel computing paradigms.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.9
  },
  {
    title: "Dune (Hardcover Deluxe Edition)",
    brand: "Ace Books",
    category: "Books",
    price: 35.00,
    description: "Frank Herbert's sci-fi masterpiece featuring custom stained edges, endpaper maps, and an illustrated poster print insert.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.8
  },
  {
    title: "Designing Data-Intensive Applications",
    brand: "O'Reilly",
    category: "Books",
    price: 49.99,
    description: "The definitive guide to system design, covering database internals, distributed replication, scaling pipelines, and microservices.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.9
  },
  {
    title: "Clean Code",
    brand: "Prentice Hall",
    category: "Books",
    price: 44.50,
    description: "A handbook of agile software craftsmanship by Robert C. Martin. Learn to write clean, refactored, and highly testable code.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.8
  },
  {
    title: "The Hobbit",
    brand: "HarperCollins",
    category: "Books",
    price: 14.99,
    description: "J.R.R. Tolkien's legendary fantasy prelude to the Lord of the Rings. Follow Bilbo Baggins on his quest with Gandalf and dwarves.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.8
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    brand: "Harper",
    category: "Books",
    price: 18.99,
    description: "Yuval Noah Harari explores how biology and history have defined us and enhanced our understanding of what it means to be human.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    stock: 50,
    rating: 4.6
  },
  {
    title: "Thinking, Fast and Slow",
    brand: "Farrar",
    category: "Books",
    price: 16.00,
    description: "Nobel laureate Daniel Kahneman explains the two systems that drive the way we think: fast intuitive, and slow logical.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.6
  },
  {
    title: "Deep Work",
    brand: "Grand Central",
    category: "Books",
    price: 18.00,
    description: "Cal Newport makes the case for focused cognitive concentration, offering rules for building habits to master distracted environments.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.7
  },
  {
    title: "The Pragmatic Programmer",
    brand: "Addison-Wesley",
    category: "Books",
    price: 49.99,
    description: "A classical software engineering handbook covering refactoring, testing, tooling, team management, and career wisdom.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    stock: 22,
    rating: 4.8
  },
  {
    title: "Educated: A Memoir",
    brand: "Random House",
    category: "Books",
    price: 14.50,
    description: "Tara Westover's unforgettable memoir of escaping an survivalist family to pursue higher learning and self-invention.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.7
  },
  {
    title: "Educated: A Memoir (Paperback)",
    brand: "Random House",
    category: "Books",
    price: 12.99,
    description: "Tara Westover's acclaimed autobiography exploring survivalist roots, isolation, and achieving self-taught university entries.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.7
  },
  {
    title: "The Alchemist",
    brand: "HarperOne",
    category: "Books",
    price: 11.99,
    description: "Paulo Coelho's inspiring allegorical tale of a young Andalusian shepherd boy searching for his personal legend in Egypt.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    stock: 60,
    rating: 4.6
  },
  {
    title: "Blink: The Power of Thinking Without Thinking",
    brand: "Back Bay Books",
    category: "Books",
    price: 15.99,
    description: "Malcolm Gladwell explains how we make instant split-second decisions and why first impressions can be shockingly accurate.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.5
  },
  {
    title: "Zero to One",
    brand: "Crown Business",
    category: "Books",
    price: 17.00,
    description: "Peter Thiel's insights on startups, scaling, monopoly creation, and charting the future by finding secrets in plain sight.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    stock: 45,
    rating: 4.6
  },
  {
    title: "1984 (Deluxe Edition)",
    brand: "Signet Classics",
    category: "Books",
    price: 9.99,
    description: "George Orwell's chilling dystopian vision of totalitarian surveillance, doublethink, and the suppression of individual freedom.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    stock: 50,
    rating: 4.8
  },
  {
    title: "Meditations",
    brand: "Modern Library",
    category: "Books",
    price: 12.00,
    description: "The private philosophical Stoic writings of Roman Emperor Marcus Aurelius translated with clear modern commentary.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.7
  },
  {
    title: "The Silent Patient",
    brand: "Celadon Books",
    category: "Books",
    price: 13.99,
    description: "Alex Michaelides' record-breaking psychological thriller about a woman's act of violence against her husband and her refusal to speak.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.4
  },
  {
    title: "A Brief History of Time",
    brand: "Bantam Books",
    category: "Books",
    price: 18.00,
    description: "Stephen Hawking's landmark introduction to cosmology, black holes, general relativity, quantum mechanics, and the origins of space.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.8
  },

  // ==================== FURNITURE (20 items) ====================
  {
    title: "Ergonomic Mesh Office Chair",
    brand: "Herman Miller",
    category: "Furniture",
    price: 499.99,
    description: "Breathable double-woven mesh back, adjustable lumbar pressure support, tilt tension controls, and multi-directional armrests.",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.8
  },
  {
    title: "Solid Oak Dining Table",
    brand: "West Elm",
    category: "Furniture",
    price: 899.00,
    description: "Constructed with kiln-dried American white oak, chevron panel patterns, sturdy tapered block legs. Seats up to 6 adults.",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80",
    stock: 5,
    rating: 4.7
  },
  {
    title: "Minimalist Wooden Desk",
    brand: "IKEA",
    category: "Furniture",
    price: 179.99,
    description: "Sleek scandinavian clean look, solid pine wood frame, integrated drawer slides, and built-in cable management tray.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.4
  },
  {
    title: "Tufted Velvet Sofa",
    brand: "Article",
    category: "Furniture",
    price: 1199.00,
    description: "Mid-century modern design: rich emerald velvet, tufted bench seat cushion, solid wood legs with gold metal caps.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
    stock: 4,
    rating: 4.6
  },
  {
    title: "Industrial Bookshelf",
    brand: "Vasagle",
    category: "Furniture",
    price: 110.00,
    description: "5-tier heavy duty display rack, rustic brown particle boards, rigid steel frame backing, and anti-tipping mount straps.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.5
  },
  {
    title: "Walnut Bedside Table",
    brand: "West Elm",
    category: "Furniture",
    price: 249.00,
    description: "Beautiful FSC-certified walnut veneer, rounded corners, soft-close hardware drawer, brass peg pull handle.",
    image: "https://images.unsplash.com/photo-1532372320978-9b4d6a3a854c?auto=format&fit=crop&w=600&q=80",
    stock: 18,
    rating: 4.5
  },
  {
    title: "Convertible Futon Sleeper",
    brand: "DHP",
    category: "Furniture",
    price: 280.00,
    description: "Split backrest design allows independent reclining, memory foam padding, faux leather upholstery, chrome metal support feet.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
    stock: 10,
    rating: 4.1
  },
  {
    title: "Industrial Bar Stool (2 Pack)",
    brand: "Vasagle",
    category: "Furniture",
    price: 85.00,
    description: "Comfortable circular wooden seat, structural black metal loop frame, built-in lower footrest bar, counter height.",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.3
  },
  {
    title: "Modern TV Stand Console",
    brand: "Article",
    category: "Furniture",
    price: 399.00,
    description: "Accommodates TVs up to 65 inches. Features sliding slatted cabinet doors, adjustable internal shelves, and cord routing grommets.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    rating: 4.6
  },
  {
    title: "Handmade Rattan Accent Chair",
    brand: "Lulu & Georgia",
    category: "Furniture",
    price: 320.00,
    description: "Natural hand-woven wicker rattan, sturdy black iron frame base, deep bucket lounge seating, includes canvas throw pillow.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80",
    stock: 8,
    rating: 4.4
  },
  {
    title: "Nesting Coffee Tables (Set of 2)",
    brand: "West Elm",
    category: "Furniture",
    price: 299.00,
    description: "Chic space saver: marble laminate top on large table, walnut wood veneer on smaller table. Black iron ring bases.",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.5
  },
  {
    title: "Hanging Egg Swing Chair",
    brand: "Flower House",
    category: "Furniture",
    price: 249.99,
    description: "Sturdy powder-coated steel stand, weather-resistant PE wicker pod, thick fluffy polyester cushion, perfect for patio reading.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80",
    stock: 10,
    rating: 4.6
  },
  {
    title: "Solid Oak Floating Shelves (3 Pack)",
    brand: "IKEA",
    category: "Furniture",
    price: 45.00,
    description: "Includes invisible bracket mounts, real white oak finish, supports up to 15 lbs each, perfect for books or display frames.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.2
  },
  {
    title: "Leather Chesterfield Wingback Chair",
    brand: "Pottery Barn",
    category: "Furniture",
    price: 799.00,
    description: "Vintage distressed brown top-grain leather, tufted backrest, brass nailhead rivet trim, rolled armrests, mahogany legs.",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
    stock: 6,
    rating: 4.8
  },
  {
    title: "Standing Full Length Mirror",
    brand: "Zara Home",
    category: "Furniture",
    price: 159.00,
    description: "Large arched glass display, brushed brass metal frame, folding stand easel support back, can also be wall-mounted.",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.4
  },
  {
    title: "Outdoor Wooden Patio Table",
    brand: "Timberline",
    category: "Furniture",
    price: 450.00,
    description: "Natural weather-resistant solid teak wood, pre-drilled central umbrella hole, seats 6, perfect for backyard cookouts.",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80",
    stock: 8,
    rating: 4.5
  },
  {
    title: "L-Shaped Corner Gaming Desk",
    brand: "Eureka",
    category: "Furniture",
    price: 199.99,
    description: "Spacious carbon fiber texture desktop, matching full-surface mousepad, integrated power strip tray, headphone hanger.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.6
  },
  {
    title: "Faux Fur Round Ottoman",
    brand: "Lulu & Georgia",
    category: "Furniture",
    price: 89.00,
    description: "Soft white curly faux shearling wool, lightweight density foam, functional as a footstool, side table, or accent decor.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.3
  },
  {
    title: "Sideboard Buffet Storage Cabinet",
    brand: "West Elm",
    category: "Furniture",
    price: 699.00,
    description: "Sleek retro buffet table with geometric wood carving details, 3 drawers, 2 side cabinets with adjustable shelving.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    stock: 7,
    rating: 4.7
  },
  {
    title: "Folding Bamboo Shoe Organizer",
    brand: "IKEA",
    category: "Furniture",
    price: 39.99,
    description: "4-tier foldable shoe rack made from eco-friendly sustainable bamboo. Holds up to 16 pairs of sneakers or shoes.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.1
  },

  // ==================== GROCERY (20 items) ====================
  {
    title: "Premium Matcha Green Tea Powder",
    brand: "Uji Matcha",
    category: "Grocery",
    price: 24.99,
    description: "100% Organic ceremonial grade green tea stone-ground in Kyoto, Japan. High antioxidants, vibrant color, smooth finish.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
    stock: 120,
    rating: 4.8
  },
  {
    title: "Extra Virgin Olive Oil",
    brand: "Filippo Berio",
    category: "Grocery",
    price: 18.50,
    description: "Cold pressed authentic Italian olives. Rich fruit notes, slightly peppery finish. Perfect for dressings and light cooking.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    stock: 80,
    rating: 4.7
  },
  {
    title: "Whole Bean Organic Coffee",
    brand: "Stumptown",
    category: "Grocery",
    price: 16.99,
    description: "Hair Bender signature blend. Sweet citrus notes with deep milk chocolate flavor. Direct trade organic arabica beans.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
    stock: 90,
    rating: 4.8
  },
  {
    title: "Organic Wildflower Honey",
    brand: "Nature Nate's",
    category: "Grocery",
    price: 9.99,
    description: "100% pure raw unpasteurized honey. Harvested from protected wildflower meadows, rich natural taste.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    stock: 150,
    rating: 4.7
  },
  {
    title: "Dark Chocolate Sea Salt Bars (4 Pack)",
    brand: "Lindt",
    category: "Grocery",
    price: 12.00,
    description: "Premium dark chocolate containing 70% cacao paired with Fleur de Sel sea salt crystals. Silky dark indulgence.",
    image: "https://images.unsplash.com/photo-1548907040-4d42b52115ca?auto=format&fit=crop&w=600&q=80",
    stock: 200,
    rating: 4.6
  },
  {
    title: "Gluten-Free Almond Flour",
    brand: "Bob's Red Mill",
    category: "Grocery",
    price: 14.25,
    description: "Finely ground skinless California almonds. High protein and fiber content, ideal for paleo and keto baking recipes.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    stock: 60,
    rating: 4.7
  },
  {
    title: "Premium Himalayan Pink Salt",
    brand: "Sherpa Pink",
    category: "Grocery",
    price: 6.99,
    description: "Pure food grade, coarse grind pink crystals mined from deep Himalayan deposits. Contains 84 rich trace minerals.",
    image: "https://images.unsplash.com/photo-1504973960431-1c4ec70a402b?auto=format&fit=crop&w=600&q=80",
    stock: 110,
    rating: 4.5
  },
  {
    title: "Organic Maple Syrup Grade A",
    brand: "Coombs Family",
    category: "Grocery",
    price: 15.99,
    description: "100% pure organic maple syrup harvested in Vermont. Rich amber color with robust, deep caramel maple flavor.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    stock: 75,
    rating: 4.8
  },
  {
    title: "Steel Cut Irish Oats",
    brand: "McCann's",
    category: "Grocery",
    price: 7.50,
    description: "Traditional non-GMO groats, clean nutty texture, slow-simmered rich oatmeal perfect for a heart-healthy breakfast.",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80",
    stock: 100,
    rating: 4.6
  },
  {
    title: "White Truffle Infused Olive Oil",
    brand: "Urbani",
    category: "Grocery",
    price: 29.99,
    description: "Cold pressed extra virgin olive oil infused with genuine Italian white truffles. Earthy gourmet finishing condiment.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.8
  },
  {
    title: "Organic Quinoa Grain",
    brand: "Ancient Harvest",
    category: "Grocery",
    price: 9.49,
    description: "Triple-rinsed organic white royal quinoa. Complete vegan protein containing all essential amino acids.",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80",
    stock: 90,
    rating: 4.5
  },
  {
    title: "Aged Balsamic Vinegar of Modena",
    brand: "Mazzetti",
    category: "Grocery",
    price: 21.00,
    description: "Aged for 12 years in oak barrels. Thick, syrupy consistency with sweet tart complexity, ideal for cheese pairings.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    stock: 50,
    rating: 4.8
  },
  {
    title: "Natural Creamy Peanut Butter",
    brand: "Smucker's",
    category: "Grocery",
    price: 4.99,
    description: "Just fresh roasted peanuts and a pinch of salt. No added hydrogenated oils, sweeteners, or preservatives.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80",
    stock: 130,
    rating: 4.4
  },
  {
    title: "Sriracha Hot Chili Sauce",
    brand: "Huy Fong",
    category: "Grocery",
    price: 6.99,
    description: "The original red rooster hot sauce made from sun-ripened jalapeño chilies, garlic paste, and vinegar kick.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    stock: 140,
    rating: 4.7
  },
  {
    title: "Chai Tea Latte Concentrate",
    brand: "Tazo",
    category: "Grocery",
    price: 5.50,
    description: "Rich blend of black tea, cinnamon, ginger, cardamom, and vanilla. Simply mix equal parts with milk or oat milk.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
    stock: 85,
    rating: 4.5
  },
  {
    title: "Organic Coconut Water (12 Pack)",
    brand: "Vita Coco",
    category: "Grocery",
    price: 22.00,
    description: "Never from concentrate. Refreshing taste packed with natural electrolytes and potassium, gluten-free hydration.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
    stock: 60,
    rating: 4.6
  },
  {
    title: "Roasted Salted Pistachios",
    brand: "Wonderful",
    category: "Grocery",
    price: 13.99,
    description: "California grown premium in-shell pistachios. Roasted with sea salt, great source of healthy fats and fiber.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80",
    stock: 110,
    rating: 4.7
  },
  {
    title: "Gluten-Free Penne Pasta",
    brand: "Barilla",
    category: "Grocery",
    price: 3.29,
    description: "Made from a delicious blend of corn and rice, certified non-GMO, delivers classic al dente pasta bite.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    stock: 150,
    rating: 4.4
  },
  {
    title: "Madagascar Bourbon Vanilla Extract",
    brand: "Nielsen-Massey",
    category: "Grocery",
    price: 34.00,
    description: "Pure cold-extraction vanilla beans. Rich, sweet, creamy flavor profile, essential for bakeries and home desserts.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.9
  },
  {
    title: "French Roast Chicory Coffee",
    brand: "Cafe Du Monde",
    category: "Grocery",
    price: 9.99,
    description: "The famous orange can from New Orleans. Rich coffee blended with roasted chicory root for a bold, chocolatey cup.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
    stock: 100,
    rating: 4.7
  },

  // ==================== BEAUTY (20 items) ====================
  {
    title: "Hyaluronic Acid Serum",
    brand: "The Ordinary",
    category: "Beauty",
    price: 8.90,
    description: "Formulated with three molecular weights of hyaluronic acid and a B5 vitamin matrix to deeply hydrate dry skin.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    stock: 150,
    rating: 4.6
  },
  {
    title: "Retinol 1% in Squalane",
    brand: "The Ordinary",
    category: "Beauty",
    price: 9.80,
    description: "Water-free solution containing 1% pure active retinol to reduce the appearance of fine lines, aging, and skin texture irregularities.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    stock: 120,
    rating: 4.4
  },
  {
    title: "CeraVe Moisturizing Cream",
    brand: "CeraVe",
    category: "Beauty",
    price: 17.50,
    description: "Daily skin barrier repair lotion containing three essential ceramides and moisture-retaining hyaluronic acid.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    stock: 200,
    rating: 4.8
  },
  {
    title: "L'Occitane Shea Butter Hand Cream",
    brand: "L'Occitane",
    category: "Beauty",
    price: 30.00,
    description: "Award-winning nourishing cream containing 20% organic shea butter, honey extract, and coconut oil to protect dry hands.",
    image: "https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&w=600&q=80",
    stock: 80,
    rating: 4.8
  },
  {
    title: "Matte Velvet Liquid Lipstick",
    brand: "Anastasia Beverly Hills",
    category: "Beauty",
    price: 20.00,
    description: "Full-pigment lip color that dries down to a weightless matte finish, smudge-proof, available in classic crimson.",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    stock: 100,
    rating: 4.5
  },
  {
    title: "Waterproof Volume Mascara",
    brand: "Maybelline",
    category: "Beauty",
    price: 11.99,
    description: "Lash Sensational full fan effect brush, midnight black color pigment, resists smudges and runs for 24 hours.",
    image: "https://images.unsplash.com/photo-1631730359575-38e4755d772b?auto=format&fit=crop&w=600&q=80",
    stock: 160,
    rating: 4.3
  },
  {
    title: "Advanced Night Repair Serum",
    brand: "Estee Lauder",
    category: "Beauty",
    price: 85.00,
    description: "Patented chronological skin cell renewal complex, maximizes natural nighttime skin repair, adds radiant hydration.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    stock: 45,
    rating: 4.7
  },
  {
    title: "Translucent Setting Powder",
    brand: "Laura Mercier",
    category: "Beauty",
    price: 43.00,
    description: "Superfine micro-milled French cashmere talc powder, locks in makeup for 16 hours without adding weight or texture.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    stock: 75,
    rating: 4.8
  },
  {
    title: "Argan Oil Hair Treatment",
    brand: "Moroccanoil",
    category: "Beauty",
    price: 48.00,
    description: "Infused with antioxidant-rich argan oil and shine-boosting vitamins. Tames frizz, detangles, and speeds up drying time.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    stock: 65,
    rating: 4.7
  },
  {
    title: "Hydrating Lip Balm",
    brand: "Burt's Bees",
    category: "Beauty",
    price: 4.29,
    description: "100% natural origin beeswax balm infused with peppermint oil and vitamin E to soothe chapped lips.",
    image: "https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&w=600&q=80",
    stock: 300,
    rating: 4.6
  },
  {
    title: "Mineral Sunscreen SPF 50",
    brand: "La Roche-Posay",
    category: "Beauty",
    price: 32.50,
    description: "Anthelios ultra-light sunscreen fluid, 100% mineral zinc oxide filters, fast-absorbing matte finish, water resistant.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    stock: 90,
    rating: 4.7
  },
  {
    title: "Glow Screen Primer SPF 40",
    brand: "Supergoop!",
    category: "Beauty",
    price: 38.00,
    description: "Broad-spectrum sunscreen primer with a dewy, pearlescent finish, formulated with hyaluronic acid and niacinamide.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    stock: 55,
    rating: 4.5
  },
  {
    title: "Rosewater Facial Toner",
    brand: "Mario Badescu",
    category: "Beauty",
    price: 12.00,
    description: "Refreshing mist containing rosewater, aloe vera, and herbal extracts. Revitalizes dehydrated skin and sets makeup.",
    image: "https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&w=600&q=80",
    stock: 140,
    rating: 4.4
  },
  {
    title: "Clay Face Mask",
    brand: "Aztec Secret",
    category: "Beauty",
    price: 14.99,
    description: "100% natural calcium bentonite clay. Mix with apple cider vinegar for a deep pore cleansing pulsating facial mask.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    stock: 180,
    rating: 4.6
  },
  {
    title: "Shea Moisture Body Wash",
    brand: "SheaMoisture",
    category: "Beauty",
    price: 11.49,
    description: "Raw shea butter body wash containing frankincense and myrrh extracts. Deeply hydrates and balances skin barrier.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    stock: 110,
    rating: 4.5
  },
  {
    title: "Eau de Parfum Spray (N1)",
    brand: "Chanel",
    category: "Beauty",
    price: 135.00,
    description: "The classic legendary floral bouquet fragrance containing rose, jasmine, and citrus notes in a sleek minimal glass atomizer.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.9
  },
  {
    title: "Tea Tree Facial Cleanser",
    brand: "The Body Shop",
    category: "Beauty",
    price: 16.00,
    description: "Gel-to-foam cooling face wash infused with purifying organic tea tree oil from Kenya. Helps clear oily skin breakouts.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    stock: 95,
    rating: 4.4
  },
  {
    title: "Sugar Body Polish Scrub",
    brand: "Herbivore",
    category: "Beauty",
    price: 38.00,
    description: "Coco Rose body scrub containing hydrating virgin coconut oil and delicate Moroccan rose. Gently exfoliates and hydrates skin.",
    image: "https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&w=600&q=80",
    stock: 50,
    rating: 4.6
  },
  {
    title: "Pro-Collagen Cleansing Balm",
    brand: "Elemis",
    category: "Beauty",
    price: 68.00,
    description: "Deep cleansing treatment balm that melts into a rich oil to dissolve stubborn makeup, dirt, and pollution particles.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.7
  },
  {
    title: "Vitamin C Brightening Moisturizer",
    brand: "Sunday Riley",
    category: "Beauty",
    price: 65.00,
    description: "C.E.O. rich cream containing 5% advanced THD ascorbate vitamin C to combat dullness and dark spots, leaving skin glowing.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    rating: 4.6
  },

  // ==================== SPORTS (20 items) ====================
  {
    title: "Pro Basketball Official Size",
    brand: "Wilson",
    category: "Sports",
    price: 39.99,
    description: "Evolution Game Basketball. Premium composite leather cover, micro-fiber textured grip feel, approved for high school leagues.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
    stock: 45,
    rating: 4.8
  },
  {
    title: "Thermal Soccer Ball",
    brand: "Adidas",
    category: "Sports",
    price: 45.00,
    description: "FIFA Quality certified match ball featuring thermally bonded seamless panels, textured casing, and butyl bladder.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    stock: 50,
    rating: 4.6
  },
  {
    title: "Adjustable Cast Iron Dumbbells",
    brand: "Bowflex",
    category: "Sports",
    price: 329.00,
    description: "SelectTech 552 adjustable dumbbells replace 15 sets of weights. Turn the dial to change weight from 5 to 52.5 lbs.",
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    rating: 4.8
  },
  {
    title: "Premium 1/4-Inch Yoga Mat",
    brand: "Lululemon",
    category: "Sports",
    price: 78.00,
    description: "The Reversible Mat. Natural rubber base offers textured grip cushioning, anti-microbial finish prevents mold buildup.",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.7
  },
  {
    title: "Lightweight Tennis Racket",
    brand: "Babolat",
    category: "Sports",
    price: 219.00,
    description: "Pure Drive performance racket. Elliptical frame structure reduces flex, high response graphite composite weave.",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a4b1db?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    rating: 4.7
  },
  {
    title: "Waterproof 2-Person Camping Tent",
    brand: "Coleman",
    category: "Sports",
    price: 89.99,
    description: "Sundome dome structure tent, WeatherTec welded corner seams, large ventilation screen window, sets up in 10 minutes.",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.4
  },
  {
    title: "Hydro Flask 32oz Water Bottle",
    brand: "Hydro Flask",
    category: "Sports",
    price: 44.95,
    description: "TempShield double-wall vacuum insulated stainless steel bottle. Keeps drinks cold for 24 hours or hot for 12 hours.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    stock: 70,
    rating: 4.8
  },
  {
    title: "GPS Sports Smart Watch",
    brand: "Garmin",
    category: "Sports",
    price: 249.99,
    description: "Forerunner 55: light running smartwatch, tracks pace, heart rate, distance, offers personalized daily workout suggestions.",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    stock: 18,
    rating: 4.6
  },
  {
    title: "Carbon Fiber Pickleball Paddle",
    brand: "Selkirk",
    category: "Sports",
    price: 149.99,
    description: "Vanguard Control paddle. Raw carbon fiber surface provides extreme ball spin control, thick honeycomb poly core.",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.6
  },
  {
    title: "Heavy Duty Resistance Bands",
    brand: "Fit Simplify",
    category: "Sports",
    price: 12.95,
    description: "Set of 5 natural latex loop bands, varying resistance levels from extra-light to extra-heavy, carry bag included.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    stock: 120,
    rating: 4.5
  },
  {
    title: "Outdoor Backpack 50L",
    brand: "Osprey",
    category: "Sports",
    price: 180.00,
    description: "Atmos AG hiking pack. Anti-Gravity mesh suspension feels weightless, adjustable harness, integrated raincover.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    stock: 14,
    rating: 4.8
  },
  {
    title: "Leather Boxing Gloves 14oz",
    brand: "Everlast",
    category: "Sports",
    price: 69.99,
    description: "Powerlock training gloves. Synthetic leather build, quadruple layer foam core, firm hook-and-loop wrist strap.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    rating: 4.4
  },
  {
    title: "Golf Driver Club",
    brand: "Callaway",
    category: "Sports",
    price: 499.00,
    description: "Paradym Ai Smoke driver. Carbon composite chassis, advanced AI designed clubface delivers fast ball speeds and forgiveness.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=80",
    stock: 8,
    rating: 4.7
  },
  {
    title: "Hydration Running Vest",
    brand: "Nathan",
    category: "Sports",
    price: 99.00,
    description: "QuickStart 4L trail vest. Includes 1.5L hydration bladder, front storage pockets for smartphone, lightweight mesh fabric.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    stock: 22,
    rating: 4.3
  },
  {
    title: "Aluminum Mountain Bike",
    brand: "Schwinn",
    category: "Sports",
    price: 420.00,
    description: "High-grade aluminum frame, front suspension fork, 21-speed twist shifters, and wide knobby all-terrain tires.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80",
    stock: 5,
    rating: 4.5
  },
  {
    title: "Cold-Weather Sleeping Bag",
    brand: "Coleman",
    category: "Sports",
    price: 59.99,
    description: "Mummy sleeping bag rated down to 0 degrees Fahrenheit. Hollow polyester insulation, draft tube seal locks in heat.",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80",
    stock: 18,
    rating: 4.5
  },
  {
    title: "Protective Ski Goggles",
    brand: "Smith",
    category: "Sports",
    price: 110.00,
    description: "ChromaPop anti-fog lenses, dual layer face foam, wide strap with silicone bead grips, helmet compatible frame design.",
    image: "https://images.unsplash.com/photo-1551698618-1ffdfe0700ff?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    rating: 4.4
  },
  {
    title: "Professional Dartboard Set",
    brand: "Winmau",
    category: "Sports",
    price: 65.00,
    description: "Blade 6 dual core self-healing sisal dartboard, ultra-thin steel wire dividers reduce bounceouts, includes 6 steel-tip darts.",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    rating: 4.7
  },
  {
    title: "Electric Air Pump for Balls",
    brand: "Anker",
    category: "Sports",
    price: 49.99,
    description: "Smart digital inflation pump, auto shut-off, rechargeable lithium battery, LED pressure display gauge.",
    image: "https://images.unsplash.com/photo-1609592424085-78ba1925b412?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    rating: 4.6
  },
  {
    title: "Foldable Table Tennis Table",
    brand: "Joola",
    category: "Sports",
    price: 399.00,
    description: "Indoor ping pong table consisting of two separate folding halves, locks in place with wheels, includes net set.",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?auto=format&fit=crop&w=600&q=80",
    stock: 6,
    rating: 4.7
  }
];

module.exports = products;
