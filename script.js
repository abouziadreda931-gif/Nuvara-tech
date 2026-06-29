// ==========================================================================
// Application E-Commerce - État et Logique (Version Française)
// ==========================================================================

// 1. Base de données des produits électroniques
const products = [
    {
        id: 1,
        name: "Apple AirPods Pro (2e Génération)",
        category: "AirPods",
        price: 100, // Prix modifié par l'utilisateur
        originalPrice: 279,
        rating: 4.9,
        reviewCount: 184,
        image: "airpods.jpg", // Image modifiée par l'utilisateur
        gallery: [
            "airpods.jpg",
        ],
        description: "Découvrez le niveau supérieur du son. La réduction active du bruit bloque deux fois plus de bruits de fond indésirables. L'audio adaptatif adapte dynamiquement le contrôle du bruit à votre environnement. L'audio spatial rend l'immersion remarquablement personnelle.",
        specs: {
            "Technologie Audio": "Audio adaptatif, Réduction active du bruit, Mode Transparence",
            "Capteurs": "Double micro à formation de faisceaux, Microphone orienté vers l'intérieur, Capteur de détection de peau",
            "Connectivité": "Technologie sans fil Bluetooth 5.3",
            "Résistance Eau": "IP54 résistant à la poussière, à la sueur et à l'eau",
            "Autonomie": "Jusqu'à 6 heures d'écoute sur une seule charge"
        },
        isFeatured: true,
        isBestSeller: true,
        isNewArrival: false
    },
    {
        id: 2,
        name: "Apple AirPods Max - Gris Sidéral",
        category: "AirPods",
        price: 549,
        originalPrice: 599,
        rating: 4.8,
        reviewCount: 95,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80"
        ],
        description: "Les AirPods Max combinent un audio haute fidélité avec la meilleure réduction active du bruit du marché pour offrir une expérience d'écoute inégalée. Chaque pièce de leur haut-parleur conçu sur mesure produit un son avec une distorsion ultra-faible.",
        specs: {
            "Taille du Transducteur": "Transducteur dynamique conçu par Apple de 40 mm",
            "Réduction du Bruit": "Réduction active du bruit et mode Transparence",
            "Poids": "384,8 grammes",
            "Connectivité": "Bluetooth 5.0",
            "Autonomie": "Jusqu'à 20 heures d'écoute haute fidélité"
        },
        isFeatured: true,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 3,
        name: "Écouteurs sans fil Sony WF-1000XM5",
        category: "Écouteurs",
        price: 299,
        originalPrice: 299,
        rating: 4.7,
        reviewCount: 142,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=600&auto=format&fit=crop&q=80"
        ],
        description: "Le WF-1000XM5 dispose d'une technologie de pointe pour offrir une qualité sonore supérieure et la meilleure performance de réduction de bruit sans fil du marché. Des processeurs audio en temps réel alimentent le transducteur conçu spécialement.",
        specs: {
            "Processeur": "Processeur intégré V2 et processeur de réduction de bruit HD QN2e",
            "Codecs Audio": "SBC, AAC, LDAC, LC3",
            "Autonomie": "Jusqu'à 8 heures (24 heures au total avec le boîtier)",
            "Résistance à l'Eau": "IPX4",
            "Réponse en Fréquence": "20 Hz - 20 000 Hz"
        },
        isFeatured: false,
        isBestSeller: true,
        isNewArrival: false
    },
    {
        id: 4,
        name: "Chargeur secteur Anker Prime 120W GaN",
        category: "Chargeurs",
        price: 79,
        originalPrice: 89,
        rating: 4.8,
        reviewCount: 320,
        image: "https://images.unsplash.com/photo-1619489646924-b4fce76b7556?w=600&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1619489646924-b4fce76b7556?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1622445262465-2481c4574875?w=600&auto=format&fit=crop&q=80"
        ],
        description: "Chargez un MacBook Pro 16 à 50% en seulement 28 minutes ou alimentez jusqu'à 3 devices simultanément avec notre chargeur GaNPrime ultra-compact de 120W. Le contrôle de température ActiveShield 2.0 protège vos appareils en continu.",
        specs: {
            "Puissance Totale": "120W Max",
            "Ports": "2x USB-C, 1x USB-A",
            "Technologie": "GaNPrime, PowerIQ 4.0",
            "Protection": "Contrôle de température ActiveShield 2.0",
            "Dimensions": "43 x 29 x 59 mm"
        },
        isFeatured: false,
        isBestSeller: true,
        isNewArrival: false
    },
    {
        id: 5,
        name: "Station de charge sans fil MagSafe 3-en-1",
        category: "Chargeurs",
        price: 129,
        originalPrice: 149,
        rating: 4.6,
        reviewCount: 88,
        image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?w=600&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1622445262465-2481c4574875?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1619489646924-b4fce76b7556?w=600&auto=format&fit=crop&q=80"
        ],
        description: "Alimentez tout votre écosystème Apple en même temps sur un support élégant. L'alignement magnétique MagSafe fournit une charge sans fil rapide de 15W à votre iPhone tout en chargeant votre Apple Watch et vos AirPods.",
        specs: {
            "Entrée": "Chargeur secteur USB-C 30W (inclus)",
            "Sortie (Téléphone)": "Jusqu'à 15W MagSafe",
            "Sortie (AirPods)": "Support de charge sans fil 5W",
            "Sortie (Watch)": "Chargeur rapide 5W pour Apple Watch",
            "Matériau": "Aluminium anodisé et silicone doux"
        },
        isFeatured: true,
        isBestSeller: false,
        isNewArrival: false
    },
    {
        id: 6,
        name: "Batterie externe Anker PowerCore 24K (737)",
        category: "Batteries Externes",
        price: 149,
        originalPrice: 169,
        rating: 4.9,
        reviewCount: 215,
        image: "https://images.unsplash.com/photo-1609592424109-dd7739504313?w=600&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1609592424109-dd7739504313?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=600&auto=format&fit=crop&q=80"
        ],
        description: "Équipée de la technologie Power Delivery 3.1 bidirectionnelle, cette batterie externe offre une charge ultra-puissante de 140W. Elle intègre un écran numérique intelligent affichant l'autonomie restante et la puissance d'entrée/sortie.",
        specs: {
            "Capacité": "24 000 mAh",
            "Ports": "2x USB-C, 1x USB-A",
            "Entrée/Sortie Max": "140W PD 3.1",
            "Écran Intelligent": "Écran couleur TFT",
            "Temps de Recharge": "0 à 100% en 52 minutes (avec chargeur 140W)"
        },
        isFeatured: true,
        isBestSeller: true,
        isNewArrival: true
    },
    {
        id: 7,
        name: "Apple Watch Ultra 2 (GPS + Cellular)",
        category: "Montres Connectées",
        price: 799,
        originalPrice: 799,
        rating: 4.9,
        reviewCount: 112,
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80"
        ],
        description: "La montre de sport et d'aventure ultime est encore plus performante. Équipée de la puce S9 SiP, d'un bouton Action personnalisable, du geste double-toucher et d'un boîtier en titane ultra-léger avec écran Retina Always-On.",
        specs: {
            "Taille du Boîtier": "49 mm en titane aérospatial",
            "Résistance à l'Eau": "100m, étanche, plongée de loisir à 40m",
            "Luminosité Écran": "Jusqu'à 3 000 nits Retina Always-On",
            "Capteurs": "Oxygène sanguin, ECG, fréquence cardiaque, profondimètre",
            "Autonomie": "Jusqu'à 36 heures (72 heures en mode économie)"
        },
        isFeatured: true,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 8,
        name: "Samsung Galaxy Watch 6 Classic",
        category: "Montres Connectées",
        price: 349,
        originalPrice: 399,
        rating: 4.7,
        reviewCount: 167,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&auto=format&fit=crop&q=80"
        ],
        description: "Affichez votre style avec une lunette rotative physique et des cadrans personnalisés. Suivez vos entraînements avec des zones de fréquence cardiaque personnalisées et analysez votre composition corporelle.",
        specs: {
            "Taille du Boîtier": "43 mm / 47 mm Acier Inoxydable",
            "Lunette": "Lunette rotative physique de navigation",
            "Système": "Wear OS propulsé par Samsung",
            "Connectivité": "Bluetooth 5.3, Wi-Fi, NFC, GPS",
            "Batterie": "Jusqu'à 40 hours d'utilisation typique"
        },
        isFeatured: false,
        isBestSeller: true,
        isNewArrival: false
    },
    {
        id: 9,
        name: "Enceinte intelligente Sonos Era 100",
        category: "Enceintes",
        price: 249,
        originalPrice: 249,
        rating: 4.8,
        reviewCount: 74,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80"
        ],
        description: "Une merveille acoustique pour toutes les pièces. L'enceinte Sonos Era 100 offre un son stéréo finement réglé et des basses riches pour remplir votre espace. Diffusez via Wi-Fi ou Bluetooth en toute simplicité.",
        specs: {
            "Amplificateurs": "Trois amplificateurs numériques de classe D",
            "Microphones": "Réseau de micros pour le contrôle vocal",
            "Connectivité": "Wi-Fi 6, Bluetooth 5.0, Entrée ligne USB-C",
            "Assistant Vocal": "Alexa d'Amazon & Sonos Voice intégrés",
            "Dimensions": "182 x 120 x 130 mm"
        },
        isFeatured: true,
        isBestSeller: false,
        isNewArrival: false
    },
    {
        id: 10,
        name: "Enceinte portable Bluetooth JBL Flip 6",
        category: "Enceintes",
        price: 119,
        originalPrice: 129,
        rating: 4.7,
        reviewCount: 258,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80"
        ],
        description: "Emportez le puissant son JBL Pro partout avec vous. Étanche et résistante à la poussière (norme IP67), elle est idéale pour toutes vos sorties extérieures avec son système de haut-parleur à 2 voies et son autonomie de 12 heures.",
        specs: {
            "Puissance de Sortie": "20W RMS pour le woofer, 10W RMS pour le tweeter",
            "Réponse en Fréquence": "63 Hz - 20 000 Hz",
            "Étanchéité": "IP67 étanche à l'eau et à la poussière",
            "Autonomie": "Jusqu'à 12 heures de lecture continue",
            "Poids": "0,55 kg"
        },
        isFeatured: false,
        isBestSeller: true,
        isNewArrival: true
    },
    {
        id: 11,
        name: "Porte-cartes en cuir Apple avec MagSafe",
        category: "Accessoires Téléphone",
        price: 59,
        originalPrice: 69,
        rating: 4.5,
        reviewCount: 304,
        image: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=600&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=80"
        ],
        description: "Conçu pour allier style et fonctionnalité, le porte-cartes en cuir pour iPhone avec MagSafe est le moyen idéal de garder vos cartes à portée de main. Fabriqué dans un cuir européen de haute qualité.",
        specs: {
            "Matériau": "Cuir européen de qualité supérieure",
            "Capacité": "Jusqu'à 3 cartes de crédit",
            "Protection": "Blindage pour protéger les cartes à bande magnétique",
            "Réseau Localiser": "Prend en charge la localisation s'il est détaché",
            "Compatibilité": "Modèles iPhone 12, 13, 14, 15"
        },
        isFeatured: false,
        isBestSeller: true,
        isNewArrival: false
    },
    {
        id: 12,
        name: "Support Trépied Mobile Peak Design",
        category: "Accessoires Téléphone",
        price: 49,
        originalPrice: 49,
        rating: 4.6,
        reviewCount: 42,
        image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=600&auto=format&fit=crop&q=80"
        ],
        description: "Un trépied ultra-léger et de précision qui se glisse à plat dans votre poche. La fixation magnétique SlimLink s'associe instantanément avec les coques MagSafe ou coques Peak Design.",
        specs: {
            "Matériau": "Aluminium usiné et anodisé",
            "Rotule": "Rotule à bille micro-friction réglable",
            "Stabilité": "Pieds antidérapants en caoutchouc",
            "Épaisseur": "Seulement 5,5 mm une fois plié",
            "Poids": "96 grammes"
        },
        isFeatured: true,
        isBestSeller: false,
        isNewArrival: true
    }
];

// 2. État actif de l'application
let cart = JSON.parse(localStorage.getItem('tech_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('tech_wishlist')) || [];
let currentCategory = 'Tous';
let currentTab = 'Tous';
let searchQuery = '';
let currentSort = 'featured';
let activeSlideIndex = 0;
let slideTimer;

// Sélecteurs DOM
document.addEventListener('DOMContentLoaded', () => {
    // Initialisation
    initTheme();
    initHeroSlider();
    renderCategories();
    filterAndSortProducts();
    renderCart();
    initEventListeners();
});

// ==========================================================================
// Gestion du Thème (Clair / Sombre)
// ==========================================================================
function initTheme() {
    const savedTheme = localStorage.getItem('tech_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('tech_theme', newTheme);
    updateThemeIcon(newTheme);
    showToast(`Passé en mode ${newTheme === 'dark' ? 'sombre' : 'clair'}`, 'info');
}

function updateThemeIcon(theme) {
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (!themeBtn) return;
    if (theme === 'dark') {
        themeBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
            </svg>
        `;
    } else {
        themeBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
        `;
    }
}

// ==========================================================================
// Carrousel de la Bannière Héro
// ==========================================================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (!slides.length) return;
    
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(idx));
            dotsContainer.appendChild(dot);
        });
    }
    
    startSlideShow();
}

function startSlideShow() {
    stopSlideShow();
    slideTimer = setInterval(() => {
        nextSlide();
    }, 5000);
}

function stopSlideShow() {
    if (slideTimer) clearInterval(slideTimer);
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    const nextIndex = (activeSlideIndex + 1) % slides.length;
    goToSlide(nextIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    const prevIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    if (!slides.length) return;
    
    slides[activeSlideIndex].classList.remove('active');
    if (dots[activeSlideIndex]) dots[activeSlideIndex].classList.remove('active');
    
    activeSlideIndex = index;
    
    slides[activeSlideIndex].classList.add('active');
    if (dots[activeSlideIndex]) dots[activeSlideIndex].classList.add('active');
    
    startSlideShow();
}

// ==========================================================================
// Section Catégories
// ==========================================================================
function renderCategories() {
    const categoryContainer = document.getElementById('category-container');
    if (!categoryContainer) return;
    
    const rawCategories = products.map(p => p.category);
    const uniqueCategories = ['Tous', ...new Set(rawCategories)];
    
    const categoryIcons = {
        'Tous': '⚡',
        'AirPods': '🎧',
        'Écouteurs': '🎵',
        'Chargeurs': '🔌',
        'Batteries Externes': '🔋',
        'Montres Connectées': '⌚',
        'Enceintes': '🔊',
        'Accessoires Téléphone': '📱'
    };
    
    categoryContainer.innerHTML = uniqueCategories.map(cat => `
        <button class="category-card ${currentCategory === cat ? 'active' : ''}" data-category="${cat}">
            <div class="category-icon-wrapper">
                <span class="category-icon">${categoryIcons[cat] || '🔌'}</span>
            </div>
            <span class="category-name">${cat}</span>
        </button>
    `).join('');
    
    categoryContainer.querySelectorAll('.category-card').forEach(btn => {
        btn.addEventListener('click', () => {
            categoryContainer.querySelectorAll('.category-card').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            filterAndSortProducts();
            
            const shopSection = document.getElementById('shop-section');
            if (shopSection) {
                shopSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ==========================================================================
// Filtres et Tri du Catalogue
// ==========================================================================
function filterAndSortProducts() {
    let filtered = [...products];
    
    // 1. Filtrage par Catégorie
    if (currentCategory !== 'Tous') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    
    // 2. Filtrage par Onglet (Vedettes, Meilleures Ventes, Nouveautés)
    if (currentTab === 'Vedettes') {
        filtered = filtered.filter(p => p.isFeatured);
    } else if (currentTab === 'Meilleures Ventes') {
        filtered = filtered.filter(p => p.isBestSeller);
    } else if (currentTab === 'Nouveautés') {
        filtered = filtered.filter(p => p.isNewArrival);
    }
    
    // 3. Barre de recherche
    if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }
    
    // 4. Tri des éléments
    if (currentSort === 'price-low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high-low') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else {
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
    
    renderProductsGrid(filtered);
}

function renderProductsGrid(items) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    if (items.length === 0) {
        grid.innerHTML = `
            <div class="no-products-msg">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
                <p>Aucun produit ne correspond à vos critères. Essayez un autre mot-clé ou filtre !</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = items.map(p => {
        const hasDiscount = p.originalPrice > p.price;
        const discountPct = hasDiscount ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
        const isWishlisted = wishlist.includes(p.id);
        
        let starHTML = '';
        const fullStars = Math.floor(p.rating);
        const hasHalf = p.rating % 1 >= 0.5;
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                starHTML += '★';
            } else if (i === fullStars + 1 && hasHalf) {
                starHTML += '½';
            } else {
                starHTML += '☆';
            }
        }
        
        return `
            <div class="product-card" data-id="${p.id}">
                <div class="product-badges">
                    ${p.isBestSeller ? '<span class="badge badge-blue">Top Vente</span>' : ''}
                    ${p.isNewArrival ? '<span class="badge badge-orange">Nouveau</span>' : ''}
                    ${hasDiscount ? `<span class="badge badge-red">-${discountPct}%</span>` : ''}
                </div>
                
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${p.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                </button>
                
                <div class="product-image-box" onclick="openProductModal(${p.id})">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                    <div class="product-quick-view-overlay">
                        <button class="quick-view-btn" onclick="event.stopPropagation(); openProductModal(${p.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                            </svg>
                            Aperçu Rapide
                        </button>
                    </div>
                </div>
                
                <div class="product-info">
                    <span class="product-meta">${p.category}</span>
                    <h3 class="product-title" onclick="openProductModal(${p.id})">${p.name}</h3>
                    
                    <div class="product-rating">
                        <span class="stars">${starHTML}</span>
                        <span>(${p.reviewCount})</span>
                    </div>
                    
                    <div class="product-price-row">
                        <div class="price-container">
                            ${hasDiscount ? `<span class="price-original">${p.originalPrice} DH</span>` : ''}
                            <span class="price-current">${p.price} DH</span>
                        </div>
                        <button class="add-to-cart-btn" onclick="event.stopPropagation(); handleAddToCart(${p.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"/><path d="M12 5v14"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================================================
// Logique des Favoris (Liste d'envies)
// ==========================================================================
function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (idx === -1) {
        wishlist.push(productId);
        showToast(`${product.name} ajouté aux favoris`, 'love');
    } else {
        wishlist.splice(idx, 1);
        showToast(`${product.name} retiré des favoris`, 'info');
    }
    
    localStorage.setItem('tech_wishlist', JSON.stringify(wishlist));
    updateWishlistBadges();
    filterAndSortProducts();
}

function updateWishlistBadges() {
    const countBadge = document.getElementById('wishlist-badge');
    if (countBadge) {
        countBadge.textContent = wishlist.length;
        countBadge.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
}

function toggleWishlistFilter() {
    const wishlistIconBtn = document.getElementById('wishlist-nav-btn');
    
    if (currentTab === 'Favoris') {
        currentTab = 'Tous';
        wishlistIconBtn.classList.remove('active');
        updateShopTabUI('Tous');
    } else {
        currentTab = 'Favoris';
        wishlistIconBtn.classList.add('active');
        updateShopTabUI('Favoris');
    }
    filterAndSortProducts();
}

function updateShopTabUI(activeTabName) {
    const tabs = document.querySelectorAll('.shop-tab');
    tabs.forEach(tab => {
        if (tab.textContent.trim() === activeTabName || (activeTabName === 'Tous' && tab.textContent.trim() === 'Tous les produits')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// ==========================================================================
// Système de Panier d'Achat
// ==========================================================================
function handleAddToCart(productId) {
    addToCart(productId, 1);
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingIndex = cart.findIndex(item => item.product.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({ product, quantity });
    }
    
    saveCart();
    renderCart();
    showToast(`${product.name} ajouté au panier`, 'success');
    toggleCartDrawer(true);
}

function removeFromCart(productId) {
    const product = products.find(p => p.id === productId);
    cart = cart.filter(item => item.product.id !== productId);
    saveCart();
    renderCart();
    if (product) {
        showToast(`${product.name} retiré du panier`, 'info');
    }
}

function updateCartQuantity(productId, delta) {
    const itemIndex = cart.findIndex(item => item.product.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += delta;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        saveCart();
        renderCart();
    }
}

function saveCart() {
    localStorage.setItem('tech_cart', JSON.stringify(cart));
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('cart-subtotal');
    const shippingEl = document.getElementById('cart-shipping');
    const grandTotalEl = document.getElementById('cart-total');
    const cartCountBadge = document.getElementById('cart-badge');
    
    if (!cartItemsContainer) return;
    
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountBadge) {
        cartCountBadge.textContent = totalCount;
        cartCountBadge.style.display = totalCount > 0 ? 'flex' : 'none';
    }
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                <p>Votre panier est vide.</p>
            </div>
        `;
        
        if (subtotalEl) subtotalEl.textContent = '0,00 DH';
        if (shippingEl) shippingEl.textContent = '0,00 DH';
        if (grandTotalEl) grandTotalEl.textContent = '0,00 DH';
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.product.image}" alt="${item.product.name}">
            </div>
            
            <div class="cart-item-details">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div>
                        <h4 class="cart-item-title">${item.product.name}</h4>
                        <p class="cart-item-category">${item.product.category}</p>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart(${item.product.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
                        </svg>
                    </button>
                </div>
                
                <div class="cart-item-footer">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.product.id}, -1)">−</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.product.id}, 1)">+</button>
                    </div>
                    <span class="cart-item-price">${item.product.price * item.quantity} DH</span>
                </div>
            </div>
        </div>
    `).join('');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const shipping = subtotal > 150 ? 0 : 15; // Livraison gratuite au dessus de 150 DH
    const total = subtotal + shipping;
    
    if (subtotalEl) subtotalEl.textContent = `${subtotal.toFixed(2)} DH`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'GRATUIT' : `${shipping.toFixed(2)} DH`;
    if (grandTotalEl) grandTotalEl.textContent = `${total.toFixed(2)} DH`;
}

function toggleCartDrawer(open) {
    const overlay = document.getElementById('cart-overlay');
    const drawer = document.getElementById('cart-drawer');
    if (!overlay || !drawer) return;
    
    if (open) {
        overlay.classList.add('active');
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        overlay.classList.remove('active');
        drawer.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function checkout() {
    if (cart.length === 0) return;
    showToast("Simulation du paiement. Traitement de la commande...", "success");
    setTimeout(() => {
        cart = [];
        saveCart();
        renderCart();
        toggleCartDrawer(false);
        showToast("Commande passée avec succès ! Merci de votre confiance.", "success");
    }, 1500);
}

// ==========================================================================
// Modal Détails Produit & Spécifications
// ==========================================================================
let activeModalProductId = null;

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    activeModalProductId = productId;
    
    const overlay = document.getElementById('modal-overlay');
    const container = document.getElementById('modal-container-body');
    if (!overlay || !container) return;
    
    let starHTML = '';
    const fullStars = Math.floor(product.rating);
    const hasHalf = product.rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starHTML += '★';
        } else if (i === fullStars + 1 && hasHalf) {
            starHTML += '½';
        } else {
            starHTML += '☆';
        }
    }
    
    const specsRows = Object.entries(product.specs).map(([name, val]) => `
        <tr>
            <td class="spec-name">${name}</td>
            <td class="spec-value">${val}</td>
        </tr>
    `).join('');
    
    const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);
        
    let relatedHTML = '';
    if (related.length > 0) {
        relatedHTML = `
            <div class="modal-related">
                <h3>Vous aimerez aussi</h3>
                <div class="products-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                    ${related.map(p => `
                        <div class="product-card" data-id="${p.id}" onclick="openProductModal(${p.id})">
                            <div class="product-image-box" style="height:160px; padding:12px;">
                                <img src="${p.image}" alt="${p.name}">
                            </div>
                            <div class="product-info" style="padding:12px;">
                                <h4 style="font-size:0.85rem; margin-bottom:4px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${p.name}">${p.name}</h4>
                                <span style="font-size:0.9rem; font-weight:700; color:var(--text-primary);">${p.price} DH</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    const isWish = wishlist.includes(product.id);
    
    container.innerHTML = `
        <div class="modal-product-grid">
            <!-- Côté gauche : Galerie d'images -->
            <div class="modal-gallery">
                <div class="gallery-main">
                    <img id="modal-main-img" src="${product.image}" alt="${product.name}">
                </div>
                <div class="gallery-thumbs">
                    ${product.gallery.map((imgUrl, i) => `
                        <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="swapModalImage(this, '${imgUrl}')">
                            <img src="${imgUrl}" alt="${product.name} angle ${i+1}">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Côté droit : Détails & Specs -->
            <div class="modal-content-col">
                <div class="modal-product-meta">
                    <span class="badge badge-blue">${product.category}</span>
                    ${product.isBestSeller ? '<span class="badge badge-orange">Top Vente</span>' : ''}
                </div>
                
                <h2 class="modal-product-title">${product.name}</h2>
                
                <div class="modal-product-rating">
                    <span class="stars">${starHTML}</span>
                    <span>${product.rating} / 5.0 (${product.reviewCount} avis clients)</span>
                </div>
                
                <div class="modal-product-price">
                    <span class="modal-price-current">${product.price} DH</span>
                    ${product.originalPrice > product.price ? `<span class="modal-price-original">${product.originalPrice} DH</span>` : ''}
                </div>
                
                <p class="modal-product-desc">${product.description}</p>
                
                <table class="specs-table">
                    <tbody>
                        ${specsRows}
                    </tbody>
                </table>
                
                <!-- Actions -->
                <div class="modal-actions">
                    <div class="modal-qty-container">
                        <button class="modal-qty-btn" onclick="updateModalQty(-1)">−</button>
                        <span class="modal-qty-value" id="modal-qty-counter">1</span>
                        <button class="modal-qty-btn" onclick="updateModalQty(1)">+</button>
                    </div>
                    
                    <button class="btn btn-primary modal-add-btn" onclick="addModalItemToCart()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:6px;">
                            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                        </svg>
                        Ajouter au Panier
                    </button>
                    
                    <button class="modal-wish-btn ${isWish ? 'active' : ''}" onclick="toggleWishlist(${product.id}); updateModalWishState(this, ${product.id});">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Produits recommandés -->
        ${relatedHTML}
    `;
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('modal-container').scrollTop = 0;
}

function swapModalImage(thumbEl, imgUrl) {
    document.getElementById('modal-main-img').src = imgUrl;
    const thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
}

function updateModalQty(delta) {
    const qtyCounter = document.getElementById('modal-qty-counter');
    if (!qtyCounter) return;
    let qty = parseInt(qtyCounter.textContent);
    qty += delta;
    if (qty < 1) qty = 1;
    qtyCounter.textContent = qty;
}

function updateModalWishState(btnEl, productId) {
    const isWish = wishlist.includes(productId);
    btnEl.classList.toggle('active', isWish);
    btnEl.querySelector('svg').setAttribute('fill', isWish ? 'currentColor' : 'none');
}

function addModalItemToCart() {
    const qtyCounter = document.getElementById('modal-qty-counter');
    if (!qtyCounter || !activeModalProductId) return;
    const qty = parseInt(qtyCounter.textContent);
    addToCart(activeModalProductId, qty);
    closeProductModal();
}

function closeProductModal() {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    
    const cartDrawer = document.getElementById('cart-drawer');
    if (cartDrawer && !cartDrawer.classList.contains('active')) {
        document.body.style.overflow = '';
    }
    
    activeModalProductId = null;
}

// ==========================================================================
// Système d'Alertes Flottantes (Toasts)
// ==========================================================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = '';
    if (type === 'success') {
        icon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="color:var(--accent-green)">
                <path d="M20 6 9 17l-5-5"/>
            </svg>
        `;
    } else if (type === 'love') {
        icon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color:var(--accent-red)">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
        `;
    } else {
        icon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent-blue)">
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
            </svg>
        `;
    }
    
    toast.innerHTML = `
        <div class="toast-content" style="display:flex; align-items:center; gap:8px;">
            ${icon}
            <span>${message}</span>
        </div>
    `;
    
    Object.assign(toast.style, {
        backgroundColor: 'var(--secondary-bg)',
        color: 'var(--text-primary)',
        padding: '12px 20px',
        borderRadius: 'var(--border-radius-full)',
        boxShadow: 'var(--box-shadow-lg)',
        border: '1px solid var(--border-color)',
        fontSize: '0.85rem',
        fontWeight: '500',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        backdropFilter: 'blur(10px)'
    });
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 50);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// ==========================================================================
// Liaison des Événements
// ==========================================================================
function initEventListeners() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterAndSortProducts();
        });
    }

    const tabs = document.querySelectorAll('.shop-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const wishlistIconBtn = document.getElementById('wishlist-nav-btn');
            if (wishlistIconBtn) wishlistIconBtn.classList.remove('active');
            
            const tabName = tab.textContent.trim();
            if (tabName === 'Tous les produits') {
                currentTab = 'Tous';
            } else {
                currentTab = tabName;
            }
            filterAndSortProducts();
        });
    });

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            filterAndSortProducts();
        });
    }

    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartToggleBtn) {
        cartToggleBtn.addEventListener('click', () => toggleCartDrawer(true));
    }
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => toggleCartDrawer(false));
    }
    if (cartOverlay) {
        cartOverlay.addEventListener('click', () => toggleCartDrawer(false));
    }

    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeProductModal();
            }
        });
    }

    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    const nextBtn = document.getElementById('slider-next');
    const prevBtn = document.getElementById('slider-prev');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopSlideShow();
            nextSlide();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopSlideShow();
            prevSlide();
        });
    }

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input');
            if (emailInput.value.trim()) {
                showToast(`Inscription réussie avec l'adresse ${emailInput.value} !`, 'success');
                emailInput.value = '';
            }
        });
    }

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    const wishlistIconBtn = document.getElementById('wishlist-nav-btn');
    if (wishlistIconBtn) {
        wishlistIconBtn.addEventListener('click', toggleWishlistFilter);
    }
    
    updateWishlistBadges();
}
