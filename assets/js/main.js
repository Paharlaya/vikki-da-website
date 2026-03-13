// Sample itinerary data
const itineraries = [
    {
        id: 1,
        title: "Bali Paradise Escape",
        category: "beach",
        duration: "7 days",
        price: "$1,299",
        description: "Experience the magic of Bali with pristine beaches, ancient temples, and vibrant culture.",
        features: ["Beach Resort", "Temple Tours", "Cultural Shows", "Spa Treatments"],
        detailed: "Discover the enchanting island of Bali with our 7-day paradise escape. Visit stunning beaches in Seminyak and Nusa Dua, explore ancient temples like Tanah Lot and Uluwatu, enjoy traditional Balinese cultural performances, and indulge in world-class spa treatments. Includes accommodation in 4-star beach resort, daily breakfast, guided tours, and airport transfers."
    },
    {
        id: 2,
        title: "Swiss Alps Adventure",
        category: "mountain",
        duration: "8 days",
        price: "$2,199",
        description: "Breathtaking mountain views, hiking trails, and charming Alpine villages await you.",
        features: ["Mountain Hiking", "Cable Cars", "Alpine Villages", "Swiss Chocolate"],
        detailed: "Embark on an unforgettable journey through the Swiss Alps. Take scenic train rides, hike through pristine mountain trails, visit picturesque villages like Zermatt and Grindelwald, and experience thrilling cable car rides with panoramic views of the Matterhorn. Includes luxury mountain lodges, all meals, guided hikes, and chocolate factory tour."
    },
    {
        id: 3,
        title: "Tokyo City Explorer",
        category: "city",
        duration: "6 days",
        price: "$1,799",
        description: "Immerse yourself in the bustling metropolis of Tokyo with modern attractions and traditional experiences.",
        features: ["City Tours", "Sushi Making", "Shopping", "Nightlife"],
        detailed: "Explore the vibrant city of Tokyo with visits to iconic landmarks like Tokyo Tower and Senso-ji Temple, experience traditional sushi making classes, shop in the trendy districts of Shibuya and Harajuku, and enjoy the electric nightlife. Includes centrally located hotel, breakfast, guided tours, and transportation pass."
    },
    {
        id: 4,
        title: "African Safari Quest",
        category: "adventure",
        duration: "10 days",
        price: "$3,499",
        description: "Witness the Big Five in their natural habitat on an unforgettable African safari adventure.",
        features: ["Game Drives", "Big Five", "Cultural Village", "Bush Dinners"],
        detailed: "Experience the ultimate African safari adventure in Kenya and Tanzania. Witness the Great Migration, spot the Big Five, visit Masai cultural villages, and enjoy romantic bush dinners under the stars. Stay in luxury safari lodges with expert guides, all meals included, and internal flights between parks."
    },
    {
        id: 5,
        title: "Greek Island Hopping",
        category: "cultural",
        duration: "9 days",
        price: "$1,899",
        description: "Explore ancient history and stunning islands across the beautiful Greek archipelago.",
        features: ["Island Ferry", "Ancient Ruins", "Local Cuisine", "Sunset Views"],
        detailed: "Discover the beauty of Greek islands including Santorini, Mykonos, and Crete. Explore ancient ruins, enjoy authentic Greek cuisine, witness breathtaking sunsets, and relax on pristine beaches. Includes boutique hotels, inter-island ferries, guided archaeological tours, and traditional Greek cooking classes."
    },
    {
        id: 6,
        title: "Maldives Luxury Retreat",
        category: "beach",
        duration: "5 days",
        price: "$2,999",
        description: "Ultimate relaxation in overwater bungalows with crystal-clear waters and white sand beaches.",
        features: ["Overwater Villa", "Snorkeling", "Spa Resort", "Private Dining"],
        detailed: "Indulge in the ultimate luxury experience in the Maldives. Stay in exclusive overwater villas, enjoy world-class snorkeling and diving, relax at award-winning spas, and dine privately on secluded beaches. Includes seaplane transfers, all-inclusive dining, water sports, and couples spa treatments."
    },
    {
        id: 7,
        title: "Himalayan Base Camp Trek",
        category: "adventure",
        duration: "14 days",
        price: "$2,799",
        description: "Challenge yourself with an epic trek to Everest Base Camp through stunning Himalayan landscapes.",
        features: ["High Altitude", "Sherpa Guides", "Mountain Views", "Tea Houses"],
        detailed: "Embark on the adventure of a lifetime with our Everest Base Camp trek. Experience breathtaking mountain views, stay in traditional tea houses, learn from experienced Sherpa guides, and reach the base camp of the world's highest peak. Includes all permits, accommodation, meals, guides, and helicopter return option."
    },
    {
        id: 8,
        title: "Paris Romance Package",
        category: "city",
        duration: "4 days",
        price: "$1,599",
        description: "Fall in love with the City of Light featuring iconic landmarks and romantic experiences.",
        features: ["Eiffel Tower", "Seine Cruise", "Wine Tasting", "Art Museums"],
        detailed: "Experience the romance of Paris with visits to iconic landmarks like the Eiffel Tower and Louvre Museum, enjoy sunset Seine river cruises, indulge in wine tasting sessions, and dine at Michelin-starred restaurants. Includes luxury hotel near Champs-Élysées, breakfast, guided tours, and concert tickets."
    },
    {
        id: 9,
        title: "Costa Rica Eco Adventure",
        category: "adventure",
        duration: "8 days",
        price: "$1,999",
        description: "Explore rainforests, volcanoes, and diverse wildlife in this eco-friendly adventure.",
        features: ["Zip Lining", "Wildlife Tours", "Volcano Hikes", "Beach Time"],
        detailed: "Discover Costa Rica's incredible biodiversity with zip-lining through cloud forests, wildlife watching in Manuel Antonio, hiking active volcanoes, and relaxing on Pacific coast beaches. Includes eco-lodges, all transportation, guided nature walks, and sustainable tourism experiences."
    },
    {
        id: 10,
        title: "Morocco Cultural Journey",
        category: "cultural",
        duration: "7 days",
        price: "$1,499",
        description: "Experience the exotic culture of Morocco with vibrant markets, desert camps, and imperial cities.",
        features: ["Desert Camping", "Medina Tours", "Camel Riding", "Local Crafts"],
        detailed: "Immerse yourself in Moroccan culture with tours of imperial cities like Marrakech and Fez, sleep under stars in Sahara desert camps, ride camels through sand dunes, and explore bustling souks. Includes traditional riads, desert camping, guided tours, and authentic Moroccan meals."
    },
    {
        id: 11,
        title: "Norwegian Fjords Cruise",
        category: "mountain",
        duration: "8 days",
        price: "$2,399",
        description: "Sail through dramatic fjords and witness the stunning beauty of Norway's coastline.",
        features: ["Fjord Cruise", "Northern Lights", "Glacier Views", "Viking History"],
        detailed: "Cruise through Norway's magnificent fjords including Geiranger and Nærøyfjord, witness the Northern Lights (seasonal), explore historic Viking sites, and enjoy dramatic glacier views. Includes luxury cruise ship accommodation, all meals, shore excursions, and onboard entertainment."
    },
    {
        id: 12,
        title: "Bangkok Street Food Tour",
        category: "cultural",
        duration: "5 days",
        price: "$999",
        description: "Taste authentic Thai cuisine and explore vibrant temples in Thailand's bustling capital.",
        features: ["Street Food", "Temple Tours", "Floating Market", "Thai Cooking"],
        detailed: "Dive deep into Bangkok's incredible street food scene with guided food tours, visit golden temples like Wat Pho and Wat Arun, explore floating markets, and learn authentic Thai cooking. Includes boutique hotel, breakfast, food tours, temple guides, and cooking class."
    },
    {
        id: 13,
        title: "Patagonia Wilderness",
        category: "adventure",
        duration: "12 days",
        price: "$3,199",
        description: "Explore the untamed wilderness of Patagonia with glaciers, mountains, and unique wildlife.",
        features: ["Glacier Walks", "Wildlife Viewing", "Mountain Hikes", "Remote Lodges"],
        detailed: "Adventure through the remote wilderness of Patagonia spanning Chile and Argentina. Trek to glaciers, spot unique wildlife like condors and guanacos, hike in Torres del Paine, and stay in remote eco-lodges. Includes all accommodation, meals, expert guides, and internal transportation."
    },
    {
        id: 14,
        title: "Dubai Luxury Experience",
        category: "city",
        duration: "6 days",
        price: "$2,299",
        description: "Experience luxury and innovation in Dubai with world-class shopping and dining.",
        features: ["Burj Khalifa", "Desert Safari", "Gold Souk", "Luxury Shopping"],
        detailed: "Experience the pinnacle of luxury in Dubai with visits to Burj Khalifa, desert safaris with dune bashing, shopping at world-famous malls, and dining at celebrity chef restaurants. Includes 5-star hotel, breakfast, desert safari, city tours, and Dubai Mall experiences."
    },
    {
        id: 15,
        title: "Caribbean Island Paradise",
        category: "beach",
        duration: "7 days",
        price: "$1,799",
        description: "Relax on pristine beaches and enjoy crystal-clear waters in the Caribbean.",
        features: ["Private Beach", "Water Sports", "Rum Tasting", "Sunset Sailing"],
        detailed: "Escape to Caribbean paradise with private beach access, unlimited water sports including snorkeling and kayaking, rum distillery tours, and romantic sunset sailing. Stay in beachfront resorts with all-inclusive packages, spa treatments, and island hopping excursions."
    }
];

// DOM Elements
const itineraryGrid = document.getElementById('itineraryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayItineraries(itineraries);
    setupFilterButtons();
    setupSmoothScroll();
});

// Display itineraries
function displayItineraries(itinerariesToShow) {
    itineraryGrid.innerHTML = '';

    itinerariesToShow.forEach((itinerary, index) => {
        const card = createItineraryCard(itinerary, index);
        itineraryGrid.appendChild(card);
    });
}

// Create individual itinerary card
function createItineraryCard(itinerary, index) {
    const card = document.createElement('div');
    card.className = 'itinerary-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.setAttribute('data-category', itinerary.category);

    card.innerHTML = `
        <div class="card-image">
            <div class="card-badge">${itinerary.category.charAt(0).toUpperCase() + itinerary.category.slice(1)}</div>
        </div>
        <div class="card-content">
            <h3>${itinerary.title}</h3>
            <div class="card-details">
                <div class="duration">
                    <span>📅</span>
                    <span>${itinerary.duration}</span>
                </div>
                <div class="price">${itinerary.price}</div>
            </div>
            <p class="card-description">${itinerary.description}</p>
            <div class="card-features">
                ${itinerary.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <button class="book-btn" onclick="openModal(${itinerary.id})">View Details</button>
        </div>
    `;

    return card;
}

// Setup filter functionality
function setupFilterButtons() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter itineraries
            const filter = btn.getAttribute('data-filter');
            const filteredItineraries = filter === 'all'
                ? itineraries
                : itineraries.filter(item => item.category === filter);

            displayItineraries(filteredItineraries);
        });
    });
}

// Setup smooth scrolling
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Modal functions
function openModal(itineraryId) {
    const itinerary = itineraries.find(item => item.id === itineraryId);
    if (itinerary) {
        modalContent.innerHTML = `
            <div style="padding: 2rem;">
                <div style="height: 300px; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 12px; margin-bottom: 2rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: bold;">
                    ${itinerary.title}
                </div>
                <h2 style="color: var(--dark-color); margin-bottom: 1rem;">${itinerary.title}</h2>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <span style="background: var(--accent-color); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600;">${itinerary.category.charAt(0).toUpperCase() + itinerary.category.slice(1)}</span>
                        <span style="color: var(--text-color);">📅 ${itinerary.duration}</span>
                    </div>
                    <span style="font-size: 2rem; font-weight: bold; color: var(--primary-color);">${itinerary.price}</span>
                </div>
                <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-color); margin-bottom: 2rem;">${itinerary.detailed}</p>
                <div style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem; color: var(--dark-color);">Included Features:</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${itinerary.features.map(feature => `<span style="background: var(--light-color); padding: 0.5rem 1rem; border-radius: 15px; color: var(--text-color);">${feature}</span>`).join('')}
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <button style="flex: 1; padding: 1rem; background: var(--primary-color); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; min-width: 200px;" onclick="bookNow(${itinerary.id})">Book Now</button>
                    <button style="flex: 1; padding: 1rem; background: var(--light-color); color: var(--text-color); border: 1px solid var(--primary-color); border-radius: 8px; font-weight: 600; cursor: pointer; min-width: 200px;" onclick="contactUs(${itinerary.id})">Contact for Details</button>
                </div>
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function bookNow(itineraryId) {
    const itinerary = itineraries.find(item => item.id === itineraryId);
    alert(`Thank you for your interest in "${itinerary.title}"! We'll redirect you to our booking system.`);
    closeModal();
}

function contactUs(itineraryId) {
    const itinerary = itineraries.find(item => item.id === itineraryId);
    alert(`We'll be happy to provide more details about "${itinerary.title}". Our travel specialist will contact you soon!`);
    closeModal();
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});