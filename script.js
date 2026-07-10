// ==========================================================================
// Application E-Commerce - État et Logique (Version Française)
// ==========================================================================

// 1. Base de données des produits électroniques
const products = [
    {
        id: 1,
        name: "AirPods Pro 3",
        category: "AirPods",
        price: 100, // Prix modifié par l'utilisateur
        originalPrice: 279,
        rating: 4.9,
        reviewCount: 184,
        image: "IMG_4642.jpg",
        gallery: [
            "IMG_4642.jpg",
        ],
        description: "Immergez-vous dans un son purement immersif avec les AirPods Pro 3, conçus pour offrir une qualité audio exceptionnelle, une réduction du bruit ultra-efficace et un confort optimal au quotidien. Idéals pour les appels, la musique, les voyages et les séances de travail, ils allient technologie premium, design élégant et performance sans compromis.",
        specs: {
            "Audio Premium": "Son haute fidélité, audio spatial immersif et réglage automatique selon votre environnement",
            "Réduction du Bruit": "Réduction active du bruit ultra performante avec mode Transparence pour rester connecté au monde",
            "Confort & Design": "Design discret, léger et confortable pour une utilisation toute la journée",
            "Connectivité": "Connexion Bluetooth rapide et stable avec tous vos appareils Apple et Android",
            "Autonomie": "Jusqu'à 6 heures d'écoute sur une seule charge et recharge pratique au boîtier",
            "Résistance": "Protection contre la poussière, la sueur et l'eau pour un usage quotidien fiable"
        },
        isFeatured: true,
        isBestSeller: true,
        isNewArrival: false
    },
    {
        id: 2,
        name: "AirPods 4",
        category: "AirPods",
        price: 249,
        originalPrice: 299,
        rating: 4.8,
        reviewCount: 95,
        image: "image copy 7.png",
        gallery: [
            "image copy 7.png",
            "IMG_4642.jpg",
            "airpods-max.png"
        ],
        description: "Découvrez les AirPods 4, un compagnon audio moderne pensé pour offrir un son immersif, une excellente réduction du bruit et un confort exceptionnel au quotidien. Parfaits pour la musique, les appels et vos déplacements, ils allient élégance, simplicité et technologie haut de gamme.",
        specs: {
            "Audio Immersif": "Son clair et équilibré avec une expérience d'écoute naturelle et précise",
            "Réduction du Bruit": "Mode réduction active du bruit pour profiter d'un environnement plus calme",
            "Confort": "Design léger et confortable pour une utilisation longue durée",
            "Connectivité": "Connexion Bluetooth rapide et stable avec vos appareils préférés",
            "Autonomie": "Autonomie fiable pour toute la journée avec recharge pratique",
            "Charge Rapide": "Recharge rapide et pratique pour ne jamais rester sans musique"
        },
        isFeatured: true,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 3,
        name: "AirPods Pro 2",
        category: "AirPods",
        price: 199,
        originalPrice: 249,
        rating: 4.7,
        reviewCount: 142,
        image: "image copy 8.png",
        gallery: [
            "image copy 8.png",
            "IMG_4642.jpg",
            "image copy 7.png"
        ],
        description: "Un produit audio élégant et performant, pensé pour offrir une expérience d'écoute moderne avec un design soigné et des fonctionnalités pratiques au quotidien. Idéal pour les amateurs de musique, les appels et les déplacements.",
        specs: {
            "Qualité Audio": "Son clair, équilibré et agréable à écouter",
            "Confort": "Design léger et facile à porter toute la journée",
            "Connectivité": "Connexion rapide et stable avec vos appareils",
            "Autonomie": "Autonomie fiable pour plusieurs heures d'utilisation",
            "Style": "Aspect premium et moderne qui s'adapte à votre quotidien"
        },
        isFeatured: false,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 4,
        name: "AirPods Pro 5s",
        category: "AirPods",
        price: 299,
        originalPrice: 349,
        rating: 4.8,
        reviewCount: 128,
        image: "image copy 9.png",
        gallery: [
            "image copy 9.png",
            "image copy 8.png",
            "IMG_4642.jpg"
        ],
        description: "Profitez d'un son premium, d'une réduction du bruit performante et d'un design moderne avec les AirPods Pro 5s. Parfaits pour une utilisation quotidienne, les appels et la détente, ils offrent un excellent équilibre entre confort, technologie et élégance.",
        specs: {
            "Audio Premium": "Qualité sonore claire, détaillée et immersive",
            "Réduction du Bruit": "Isolation acoustique avancée pour un meilleur confort d'écoute",
            "Confort": "Design léger et agréable à porter toute la journée",
            "Connectivité": "Connexion Bluetooth rapide et stable avec vos appareils",
            "Autonomie": "Autonomie durable pour plusieurs heures d'écoute continue",
            "Style": "Esthétique moderne et premium qui attire les clients"
        },
        isFeatured: true,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 10,
        name: "20W Power Adapter",
        category: "Chargeurs",
        price: 49,
        originalPrice: 69,
        rating: 4.6,
        reviewCount: 87,
        image: "image copy 10.png",
        gallery: [
            "image copy 10.png",
            "charger-anker-120w.png",
            "magsafe-station.jpg"
        ],
        description: "Chargez rapidement vos appareils avec cet adaptateur compact de 20W, conçu pour offrir une recharge fiable et pratique au quotidien. Idéal pour votre téléphone, votre tablette ou vos accessoires USB-C.",
        specs: {
            "Puissance": "20W de charge rapide",
            "Connecteur": "USB-C compatible avec plusieurs appareils",
            "Compacité": "Design compact et facile à transporter",
            "Sécurité": "Protection contre la surchauffe et les surtensions",
            "Utilisation": "Parfait pour la maison, le bureau ou les déplacements"
        },
        isFeatured: false,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 11,
        name: "USB-C to Lightning Cable(1m)",
        category: "Chargeurs",
        price: 29,
        originalPrice: 39,
        rating: 4.7,
        reviewCount: 64,
        image: "image copy 11.png",
        gallery: [
            "image copy 11.png",
            "image copy 10.png",
            "IMG_4642.jpg"
        ],
        description: "Un câble fiable et pratique en 1 mètre pour recharger et synchroniser vos appareils Apple avec rapidité. Compact, solide et parfait pour le quotidien.",
        specs: {
            "Longueur": "1 mètre",
            "Connecteur": "USB-C vers Lightning",
            "Compatibilité": "iPhone, iPad et autres appareils Apple",
            "Durabilité": "Conception robuste pour une utilisation quotidienne",
            "Utilisation": "Recharge et transfert de données simple et rapide"
        },
        isFeatured: false,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 12,
        name: "USB-C 25W Power Adapter",
        category: "Chargeurs",
        price: 39,
        originalPrice: 49,
        rating: 4.8,
        reviewCount: 72,
        image: "image copy 12.png",
        gallery: [
            "image copy 12.png",
            "image copy 10.png",
            "magsafe-station.jpg"
        ],
        description: "Profitez d'une charge rapide et fiable avec cet adaptateur USB-C de 25W, parfait pour votre smartphone, votre tablette ou vos accessoires du quotidien.",
        specs: {
            "Puissance": "25W de charge rapide",
            "Connecteur": "USB-C polyvalent et pratique",
            "Mobilité": "Design compact pour le bureau et les déplacements",
            "Sécurité": "Protection contre la surchauffe et les surtensions",
            "Compatibilité": "Compatible avec de nombreux appareils USB-C"
        },
        isFeatured: false,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 13,
        name: "USB-C Charge Cable (1m)",
        category: "Chargeurs",
        price: 19,
        originalPrice: 29,
        rating: 4.6,
        reviewCount: 58,
        image: "image copy 13.png",
        gallery: [
            "image copy 13.png",
            "image copy 12.png",
            "image copy 11.png"
        ],
        description: "Un câble USB-C pratique et fiable pour recharger vos appareils en toute simplicité. Compact, robuste et idéal pour une utilisation maison ou en déplacement.",
        specs: {
            "Longueur": "1 mètre",
            "Connecteur": "USB-C vers USB-C",
            "Compatibilité": "Compatible avec de nombreux appareils USB-C",
            "Durabilité": "Conception solide pour un usage quotidien",
            "Utilisation": "Recharge rapide et pratique au quotidien"
        },
        isFeatured: false,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 14,
        name: "Oraimo SpaceBuds Air",
        category: "AirPods",
        price: 129,
        originalPrice: 159,
        rating: 4.6,
        reviewCount: 73,
        image: "image copy 15.png",
        gallery: [
            "image copy 15.png",
            "image copy 14.png",
            "image copy 13.png"
        ],
        description: "Découvrez les Oraimo SpaceBuds Air, des écouteurs sans fil confortables et élégants offrant une expérience audio agréable pour la musique, les appels et les déplacements. Un excellent choix pour qui cherche un produit moderne à prix accessible.",
        specs: {
            "Audio": "Son clair et équilibré pour musique et appels",
            "Confort": "Design léger et pratique pour une utilisation longue durée",
            "Connectivité": "Connexion Bluetooth rapide et stable",
            "Autonomie": "Autonomie fiable pour plusieurs heures d'écoute",
            "Style": "Élégants et discrets, parfaits au quotidien"
        },
        isFeatured: false,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 15,
        name: "Oraimo OTW-324s",
        category: "AirPods",
        price: 99,
        originalPrice: 129,
        rating: 4.5,
        reviewCount: 61,
        image: "image copy 14.png",
        gallery: [
            "image copy 14.png",
            "image copy 15.png",
            "image copy 13.png"
        ],
        description: "Les Oraimo OTW-324s offrent un design moderne, un confort agréable et une expérience audio fiable pour la musique et les appels. Un choix pratique pour les utilisateurs qui recherchent un produit accessible et élégant.",
        specs: {
            "Audio": "Qualité sonore claire et agréable au quotidien",
            "Confort": "Design léger et confortable à porter",
            "Connectivité": "Connexion Bluetooth simple et stable",
            "Autonomie": "Autonomie pratique pour plusieurs heures d'écoute",
            "Style": "Aspect moderne et discret"
        },
        isFeatured: false,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 16,
        name: "Oraimo Opn-373",
        category: "AirPods",
        price: 89,
        originalPrice: 119,
        rating: 4.4,
        reviewCount: 54,
        image: "image copy 16.png",
        gallery: [
            "image copy 16.png",
            "image copy 15.png",
            "image copy 14.png"
        ],
        description: "Les Oraimo Opn-373 combinent confort, design moderne et une expérience audio agréable pour la musique, les appels et les déplacements. Un produit accessible pour profiter d'un son simple et pratique au quotidien.",
        specs: {
            "Audio": "Son clair et agréable pour la musique et les appels",
            "Confort": "Design léger et pratique à porter",
            "Connectivité": "Connexion Bluetooth stable et facile",
            "Autonomie": "Autonomie fiable pour plusieurs heures d'écoute",
            "Style": "Élégant et discret"
        },
        isFeatured: false,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 17,
        name: "Oraimo Opn-373 Light Gold",
        category: "AirPods",
        price: 95,
        originalPrice: 125,
        rating: 4.5,
        reviewCount: 57,
        image: "image copy 17.png",
        gallery: [
            "image copy 17.png",
            "image copy 16.png",
            "image copy 15.png"
        ],
        description: "L'édition Oraimo Opn-373 Light Gold apporte un style élégant et une expérience audio agréable pour la musique, les appels et les déplacements. Un produit raffiné, pratique et accessible au quotidien.",
        specs: {
            "Audio": "Son clair et agréable pour la musique et les appels",
            "Style": "Design Light Gold élégant et moderne",
            "Confort": "Confort optimal pour une utilisation prolongée",
            "Connectivité": "Connexion Bluetooth stable et simple",
            "Autonomie": "Autonomie pratique pour plusieurs heures d'écoute"
        },
        isFeatured: false,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 18,
        name: "Mini Ventillateure",
        category: "Enceintes",
        price: 59,
        originalPrice: 79,
        rating: 4.3,
        reviewCount: 42,
        image: "Mini.PNG",
        gallery: [
            "Mini.PNG",
            "image copy 17.png",
            "image copy 16.png"
        ],
        description: "Le Mini Ventillateure offre une ventilation pratique et portable pour les espaces personnels, les bureaux et les déplacements. Compact, léger et facile à utiliser au quotidien.",
        specs: {
            "Portable": "Design compact et facile à transporter",
            "Ventilation": "Souffle léger et pratique pour rafraîchir l'air",
            "Utilisation": "Parfait pour bureau, chambre ou voyages",
            "Économie": "Consommation légère et usage simple",
            "Style": "Apparence moderne et discrète"
        },
        isFeatured: false,
        isBestSeller: false,
        isNewArrival: true
    },
    {
        id: 5,
        name: "Écouteurs sans fil Sony WF-1000XM5",
        category: "Écouteurs",
        price: 299,
        originalPrice: 299,
        rating: 4.7,
        reviewCount: 142,
        image: "sony-wf1000xm5.png",
        gallery: [
            "sony-wf1000xm5.png",
            "airpods-max.png",
            "projct/les images/b_Luxury_social_media_.png"
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
        image: "projct/les images/b_Luxury_social_media_.png",
        gallery: [
            "projct/les images/b_Luxury_social_media_.png",
            "airpods-max.png"
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
        image: "magsafe-station.jpg",
        gallery: [
            "magsafe-station.jpg",
            "airpods-max.png"
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
        image: "charger-anker-120w.png",
        gallery: [
            "charger-anker-120w.png",
            "sony-wf1000xm5.png"
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
        image: "apple-watch-ultra2.jpg",
        gallery: [
            "apple-watch-ultra2.jpg",
            "galaxy-watch6-classic.jpg",
            "airpods-max.png"
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
        image: "galaxy-watch6-classic.jpg",
        gallery: [
            "galaxy-watch6-classic.jpg",
            "apple-watch-ultra2.jpg"
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

const WHATSAPP_NUMBER = '212694350619';

function getWhatsAppOrderLink(product) {
    const currentUrl = new URL(window.location.href);
    currentUrl.hash = '';
    currentUrl.searchParams.set('product', product.id);
    const productPageUrl = currentUrl.toString();
    const imageUrl = getAssetUrl(product.image);
    const message = `Bonjour, je suis intéressé(e) par le produit : ${product.name} (${product.price} DH).\nLien du produit : ${productPageUrl}\nImage du produit : ${imageUrl}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getAssetUrl(src) {
    if (!src) return src;
    if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(src)) {
        return src;
    }
    const encoded = encodeURI(src);
    return new URL(encoded, window.location.href).href;
}

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
    const desiredCategoryOrder = ['Tous', 'AirPods', 'casque', 'Chargeurs', 'Écouteurs', 'Batteries Externes', 'Montres Connectées', 'Enceintes'];
    const sortedCategories = desiredCategoryOrder.filter(cat => uniqueCategories.includes(cat)).concat(uniqueCategories.filter(cat => !desiredCategoryOrder.includes(cat) && cat !== 'Tous' && cat !== 'Accessoires Téléphone'));
    
    const categoryImageMap = rawCategories.reduce((map, category, index) => {
        if (!map[category]) {
            map[category] = products[index].image;
        }
        return map;
    }, {});
    const categoryLabelMap = {
        'Chargeurs': 'chargeures',
        'Écouteurs': 'casque',
        'Batteries Externes': 'baf',
        'casque': 'power bank',
        'Enceintes': 'ventilateure'
    };
    categoryImageMap['Tous'] = 'airpods-max.png';
    categoryImageMap['AirPods'] = 'image copy.png';
    categoryImageMap['Écouteurs'] = 'image copy 5.png';
    categoryImageMap['Chargeurs'] = 'image copy 2.png';
    categoryImageMap['Batteries Externes'] = 'image copy 3.png';
    categoryImageMap['casque'] = 'image copy 4.png';
    categoryImageMap['Enceintes'] = 'image copy 6.png';
    categoryImageMap['Montres Connectées'] = 'image.png';
    
    categoryContainer.innerHTML = sortedCategories.map(cat => {
        const label = categoryLabelMap[cat] || cat;
        const isTous = cat === 'Tous';
        if (isTous) {
            return `
                <button class="category-card category-card-tous ${currentCategory === cat ? 'active' : ''}" data-category="${cat}">
                    <div class="category-name category-name-tous">${label}</div>
                </button>
            `;
        }
        return `
            <button class="category-card ${currentCategory === cat ? 'active' : ''}" data-category="${cat}">
                <div class="category-image-wrapper">
                    <img src="${getAssetUrl(categoryImageMap[cat] || categoryImageMap['Tous'])}" alt="${cat}" />
                </div>
                <div class="category-name">${label}</div>
            </button>
        `;
    }).join('');
    
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
    
    // 2. Filtrage par Onglet (Vedettes)
    if (currentTab === 'Vedettes') {
        filtered = filtered.filter(p => p.isFeatured);
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
                </div>
                
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${p.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                </button>
                
                <div class="product-image-box" onclick="openProductModal(${p.id})">
                    <img src="${getAssetUrl(p.image)}" alt="${p.name}" loading="lazy">
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
                            <span class="price-current">${p.price} DH</span>
                        </div>
                        <button class="add-to-cart-btn" onclick="event.stopPropagation(); handleAddToCart(${p.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"/><path d="M12 5v14"/>
                            </svg>
                        </button>
                    </div>
                    <div class="product-card-action-row">
                        <a href="${getWhatsAppOrderLink(p)}" class="whatsapp-order-btn" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.767.967-.94 1.165-.173.198-.345.223-.642.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.478-1.761-1.651-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.298-.497.099-.198.05-.372-.025-.52-.075-.149-.672-1.619-.92-2.216-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.075-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.27-.198-.567-.347Z"/>
                                <path d="M12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-18.5c-4.694 0-8.5 3.806-8.5 8.5S7.306 20.5 12 20.5 20.5 16.694 20.5 12 16.694 3.5 12 3.5Z"/>
                            </svg>
                            Commander via WhatsApp
                        </a>
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
                <img src="${getAssetUrl(item.product.image)}" alt="${item.product.name}">
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
                            <div class="product-info" style="padding:16px; display:flex; flex-direction:column; gap:8px; min-height:160px; justify-content:center;">
                                <h4 style="font-size:0.95rem; margin:0; font-weight:700; line-height:1.3;" title="${p.name}">${p.name}</h4>
                                <span style="font-size:0.9rem; font-weight:700; color:var(--text-primary);">${p.price} DH</span>
                                <span style="font-size:0.8rem; color:var(--text-secondary);">${p.category}</span>
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
            <div class="modal-gallery">
                <div class="gallery-main">
                    <img id="modal-main-img" src="${getAssetUrl(product.image)}" alt="${product.name}">
                </div>
            </div>
            
            <div class="modal-content-col">
                <div class="modal-product-meta">
                    <span class="badge badge-blue">${product.category}</span>
                </div>
                
                <h2 class="modal-product-title">${product.name}</h2>
                
                <div class="modal-product-rating">
                    <span class="stars">${starHTML}</span>
                    <span>${product.rating} / 5.0 (${product.reviewCount} avis clients)</span>
                </div>
                
                <div class="modal-product-price">
                    <span class="modal-price-current">${product.price} DH</span>
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
                    <a href="${getWhatsAppOrderLink(product)}" class="btn whatsapp-order-btn modal-whatsapp-btn" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" style="margin-right:6px;">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.767.967-.94 1.165-.173.198-.345.223-.642.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.478-1.761-1.651-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.298-.497.099-.198.05-.372-.025-.52-.075-.149-.672-1.619-.92-2.216-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.075-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.27-.198-.567-.347Z" fill="currentColor"/>
                            <path d="M12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-18.5c-4.694 0-8.5 3.806-8.5 8.5S7.306 20.5 12 20.5 20.5 16.694 20.5 12 16.694 3.5 12 3.5Z" fill="currentColor"/>
                        </svg>
                        Commander via WhatsApp
                    </a>
                    
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
