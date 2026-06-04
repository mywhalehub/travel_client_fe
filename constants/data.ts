export const AGENCY_DATA = {
  name: "Green Island Tours and Travels",
  description: "Your ultimate gateway to the pristine islands of Andaman & Nicobar. Specializing in luxury resorts, private cruises, scuba diving, and customized family beach holidays.",
  rating: 4.9,
  reviewsCount: "2.4k",
  experienceYears: 15,
  agencyLogo: "https://picsum.photos/seed/logo/100/100",
  coverImage: "https://picsum.photos/seed/cover/1200/800",
  gallery: [
    "https://andamaninternationaltravels.com/images/about-img.jpg",
    "https://pbs.twimg.com/media/Gp3WOj7bEAEQULU?format=jpg&name=large",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/29/13/b9/team-experience-andamans.jpg",
    "https://www.andamanislands.com/uploads/andamanislands/attachchments/main/6738544d37f11182_scuba_diving.jpg",
    "https://picsum.photos/seed/gal5/1200/800",
  ]
};

export const CATEGORIES = [
  "Scuba Diving",
  "Honeymoon",
  "Family",
  "Island Hopping",
  "Adventure",
  "Luxury"
];



export const VIDEO_REVIEWS = [
  {
    id: 1,
    reviewer: "Priya Sharma",
    duration: "0:45",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4ZK5VdgSMJboTe-0CQSeCkoQnEwfGk_tKQ&s",
    views: "12k"
  },
  {
    id: 2,
    reviewer: "Rahul Verma",
    duration: "1:12",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQadsU4RnPs6jMb9iOqZ69y90C_WkQ-Gt9yA&s",
    views: "8.5k"
  },
  {
    id: 3,
    reviewer: "Ananya Patel",
    duration: "0:59",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVDA73mC_FaAi-HqmlfcPE92DPUUoQW_dxw&s",
    views: "21k"
  }
];

export const TEXT_REVIEWS = [
  {
    id: 1,
    name: "Vikram Singh",
    handle: "@vikram_travels",
    date: "Oct 12",
    text: "Just got back from Havelock! The scuba diving experience arranged by Green Island Tours and Travels was out of this world. Highly recommend the sunset cruise! 🌅🐠",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
    attachment: "https://www.andamanislands.com/uploads/andamanislands/attachchments/main/6738544d37f11182_scuba_diving.jpg",
    likes: 245,
    retweets: 12
  },
  {
    id: 2,
    name: "Neha Gupta",
    handle: "@neha_explores",
    date: "Oct 10",
    text: "The bioluminescence tour at Radhanagar beach was pure magic. Huge thanks to our guide Rohit for making it so special! #Andaman #Travel",
    avatar: "https://www.havelockislandbeachresort.com/storage/blog/bioluminescence-view-kayaling-at-night-at-havelock-island.png",
    attachment: null,
    likes: 189,
    retweets: 5
  },
  {
    id: 3,
    name: "Karan Desai",
    handle: "@karan_d",
    date: "Oct 8",
    text: "Seamless booking experience. From airport pickup at Port Blair to the ferry transfers, everything was clockwork. 10/10 service. 👏",
    avatar: "https://images.nativeplanet.com/img/2023/06/andamanandnicobarislands3-1685957165.jpg",
    attachment: null,
    likes: 312,
    retweets: 24
  }
];

export const PACKAGE_FILTERS = {
  destinations: ["All", "Havelock", "Port Blair", "Neil Island", "Baratang"],
  budgets: ["All", "Under ₹20k", "₹20k - ₹40k", "Luxury"],
  durations: ["All", "1-3 Days", "4-6 Days", "1 Week+"],
  types: ["All", "Ready-Made", "Semi-Custom", "Fully Custom"]
};

export const ALL_PACKAGES = [
  {
    id: 1,
    title: "Andaman Premium Explorer",
    loc: "Port Blair & Havelock",
    duration: "4N/5D",
    price: "₹24,500",
    rating: 4.9,
    type: "Ready-Made",
    gallery: ["https://www.emperortraveline.com/wp-content/uploads/2022/07/Andaman.jpg", "https://www.andamanislands.com/uploads/andamanislands/blog/main/5fa4011d9f7f4152_how_to_reach_the_andaman_islands.jpeg", "https://milesexpedition.com/wp-content/uploads/2021/09/Andaman-and-Nicobar-Island.jpg"],
    inclusions: ["4-Star Hotel", "Private Transfers", "Breakfast Included", "Ferry Tickets"],
    overview: 'Experience the ultimate tropical getaway with our handcrafted itinerary. Perfect for those seeking relaxation and adventure in equal measure.',
    quickFacts: { "destination": "Andaman Islands", "duration": "4N/5D", "citiesCovered": "Port Blair, Havelock", "travelType": "Leisure & Adventure" },
    exclusions: ["Flights to/from Port Blair", "Personal Expenses", "Travel Insurance", "Meals not specified"],
    departureBatches: [{ "date": "15 Oct 2024", "returnDate": "20 Oct 2024", "price": "₹24,500", "seatsLeft": 4 }, { "date": "22 Oct 2024", "returnDate": "27 Oct 2024", "price": "₹25,000", "seatsLeft": 12 }],
    reviews: [{ "rating": 5, "title": "Absolutely amazing trip!", "text": "The arrangements were perfect. Hotels were top notch and the scuba diving was breathtaking.", "name": "Rahul S.", "date": "Aug 2024", "verified": true }],
    agencyContact: { "name": "Green Island Tours and Travels", "whatsapp": "+919876543210", "call": "+919876543210" },
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair",
        summary: "Arrive in Port Blair, settle into your premium resort, and explore the historic Cellular Jail.",
        activities: [
          { startTime: "10:30 AM", endTime: "11:30 AM", title: "Arrival at Veer Savarkar Airport", type: "flight", desc: "Private cab transfer to your premium sea-facing resort." },
          { startTime: "04:00 PM", endTime: "06:00 PM", title: "Cellular Jail Tour", type: "activity", desc: "Guided tour of the historic national monument." }
        ]
      },
      {
        day: 2,
        title: "Ferry to Havelock",
        summary: "Take a luxury cruise to Havelock Island and spend the afternoon at Asia's best beach.",
        activities: [
          { startTime: "09:00 AM", endTime: "11:30 AM", title: "Private Cruise", type: "ship", desc: "Board the luxury catamaran to Havelock Island." },
          { startTime: "03:00 PM", endTime: "05:30 PM", title: "Radhanagar Beach", type: "activity", desc: "Voted Asia's best beach. Perfect for swimming." }
        ]
      },
      {
        day: 3,
        title: "Scuba & Elephant Beach",
        summary: "An adventurous day of jungle trekking and deep sea scuba diving amongst the coral reefs.",
        activities: [
          { startTime: "11:00 AM", endTime: "01:00 PM", title: "Deep Sea Scuba", type: "activity", desc: "PADI certified dive amongst coral reefs." }
        ]
      },
      {
        day: 4,
        title: "Leisure Day",
        summary: "A relaxing day featuring a beachside stroll and a private candlelight dinner.",
        activities: [
          { startTime: "07:30 PM", endTime: "10:00 PM", title: "Private Dinner", type: "meal", desc: "Candlelight dinner on the private beach." }
        ]
      },
      {
        day: 5,
        title: "Departure",
        summary: "Morning cruise back to Port Blair and private transfer to the airport.",
        activities: [
          { startTime: "08:00 AM", endTime: "10:30 AM", title: "Ferry to Port Blair", type: "ship", desc: "Morning cruise back to the capital." },
          { startTime: "12:00 PM", endTime: "01:00 PM", title: "Airport Drop", type: "flight", desc: "Private transfer to the airport." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Classic Andaman Leisure Tour",
    loc: "Port Blair & Neil",
    duration: "3N/4D",
    price: "₹18,200",
    rating: 4.7,
    type: "Semi-Custom",
    gallery: ["https://www.andamantourism.org/wp-content/uploads/2024/06/Adventure-Activities-in-andaman-1.jpg", "https://blog.wanderlustplanet.com/wp-content/uploads/2022/07/48451395-26bb-489b-aa2c-d4d86aa263c2.jpg"],
    inclusions: ["3-Star Hotel", "Breakfast", "Sightseeing", "Guided Tours"],
    overview: 'Ideal sightseeing itinerary for leisure travelers wanting a rich cultural experience across Port Blair and Neil Island.',
    quickFacts: { "destination": "Andaman Islands", "duration": "3N/4D", "citiesCovered": "Port Blair, Neil Island", "travelType": "Heritage & Leisure" },
    exclusions: ["Flights to/from Port Blair", "Personal Expenses", "Travel Insurance"],
    departureBatches: [{ "date": "18 Oct 2024", "returnDate": "21 Oct 2024", "price": "₹18,200", "seatsLeft": 6 }],
    reviews: [{ "rating": 4, "title": "Wonderful tour", "text": "Very relaxed and highly informative guide. Ross Island tour was amazing!", "name": "Meera D.", "date": "Sep 2024", "verified": true }],
    agencyContact: { "name": "Green Island Tours and Travels", "whatsapp": "+919876543210", "call": "+919876543210" },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Corbyn's Cove",
        summary: "Check-in and enjoy a relaxing evening at Corbyn's Cove Beach.",
        activities: [
          { startTime: "12:00 PM", endTime: "01:30 PM", title: "Check-in", type: "hotel", desc: "Settle into your premium Port Blair suite." },
          { startTime: "04:00 PM", endTime: "06:30 PM", title: "Corbyn's Cove Beach", type: "activity", desc: "Relaxing evening by the sea." }
        ]
      },
      {
        day: 2,
        title: "Port Blair City Tour",
        summary: "Explore the Anthropological Museum and the historic Chatham Saw Mill.",
        activities: [
          { startTime: "09:30 AM", endTime: "11:30 AM", title: "Anthropological Museum", type: "activity", desc: "Learn about indigenous tribes." },
          { startTime: "02:00 PM", endTime: "04:00 PM", title: "Chatham Saw Mill", type: "activity", desc: "Visit Asia's oldest operating saw mill." }
        ]
      },
      {
        day: 3,
        title: "Ross Island Excursion",
        summary: "Explore the ruins of British administrative headquarters on Ross Island.",
        activities: [
          { startTime: "03:00 PM", endTime: "04:00 PM", title: "Boat to Ross Island", type: "ship", desc: "Short transfer to the historic ruins." }
        ]
      },
      {
        day: 4,
        title: "Departure",
        summary: "Drop off at Veer Savarkar Airport.",
        activities: [
          { startTime: "12:30 PM", endTime: "01:30 PM", title: "Airport Transfer", type: "flight", desc: "Drop off at the airport." }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Best of Andaman Adventure Tour",
    loc: "Havelock & Neil",
    duration: "5N/6D",
    price: "₹32,000",
    rating: 4.8,
    type: "Fully Custom",
    gallery: ["https://www.andamanocean.in/wp-content/uploads/2023/04/Ross-Island-activites.jpg", "https://www.tourmyindia.com/states/andaman/images/best.jpg"],
    inclusions: ["PADI Scuba", "Luxury Resort", "Speedboat", "All Meals"],
    overview: 'For thrill-seekers looking to unlock the underwater marvels of Andaman via scuba diving, snorkeling, and trekking.',
    quickFacts: { "destination": "Andaman Islands", "duration": "5N/6D", "citiesCovered": "Havelock, Neil Island", "travelType": "Adventure & Sports" },
    exclusions: ["Flights", "Hard Drinks", "Tipping"],
    departureBatches: [{ "date": "10 Oct 2024", "returnDate": "15 Oct 2024", "price": "₹32,000", "seatsLeft": 5 }],
    reviews: [{ "rating": 5, "title": "Mindblowing scuba!", "text": "Saw sea turtles and beautiful corals. Very professional dive masters!", "name": "Amit R.", "date": "Sep 2024", "verified": true }],
    agencyContact: { "name": "Green Island Tours and Travels", "whatsapp": "+919876543210", "call": "+919876543210" },
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        summary: "Arrive at Port Blair and prepare for transfer.",
        activities: [
          { startTime: "11:00 AM", endTime: "12:00 PM", title: "Arrival", type: "flight", desc: "Airport pickup." }
        ]
      },
      {
        day: 2,
        title: "Havelock Ferry & Scuba",
        summary: "Ferry to Havelock and deep sea scuba diving at Nemo Reef.",
        activities: [
          { startTime: "08:00 AM", endTime: "10:00 AM", title: "Cruise to Havelock", type: "ship", desc: "Board high-speed cruise." },
          { startTime: "02:00 PM", endTime: "04:30 PM", title: "Nemo Reef Scuba", type: "activity", desc: "Introductory dive with underwater photos." }
        ]
      },
      {
        day: 3,
        title: "Elephant Beach Snorkeling",
        summary: "Speedboat ride to Elephant Beach for pristine snorkeling.",
        activities: [
          { startTime: "09:00 AM", endTime: "01:00 PM", title: "Snorkeling Safari", type: "activity", desc: "Explore coral reefs via snorkeling." }
        ]
      },
      {
        day: 4,
        title: "Neil Island Transit",
        summary: "Take the afternoon ferry to Neil Island for natural coral views.",
        activities: [
          { startTime: "02:00 PM", endTime: "03:30 PM", title: "Ferry to Neil", type: "ship", desc: "Short inter-island hop." }
        ]
      },
      {
        day: 5,
        title: "Laxmanpur Beach Sunset",
        summary: "Sunset view and coral exploration on Neil Island.",
        activities: [
          { startTime: "04:00 PM", endTime: "06:00 PM", title: "Laxmanpur Beach", type: "camera", desc: "Enjoy the sunset." }
        ]
      },
      {
        day: 6,
        title: "Departure",
        summary: "Return ferry and airport drop.",
        activities: [
          { startTime: "08:00 AM", endTime: "10:30 AM", title: "Ferry to Port Blair", type: "ship", desc: "Return to capital." },
          { startTime: "01:00 PM", endTime: "02:00 PM", title: "Fly Out", type: "flight", desc: "Airport drop-off." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Andaman Honeymoon Luxury Beach Cruise",
    loc: "Havelock & Neil",
    duration: "6N/7D",
    price: "₹42,000",
    rating: 4.9,
    type: "Semi-Custom",
    gallery: ["https://www.andamantourism.org/wp-content/uploads/2018/10/honeymoon-packages.jpg", "https://www.andamanocean.in/wp-content/uploads/2024/01/Andaman-Nicobar-Islands-Honeymoon-Package-7.webp", "https://www.andamanocean.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-09-at-12.35.17-1.jpg"],
    inclusions: ["Beachfront Villa", "Candlelight Dinner", "Couples Spa", "Scooter Rental"],
    overview: 'A romantic escape featuring a beachfront villa stay, private beachfront dining, and couple treatments in Havelock and Neil Islands.',
    quickFacts: { "destination": "Andaman Islands", "duration": "6N/7D", "citiesCovered": "Havelock, Neil Island", "travelType": "Romantic Honeymoon" },
    exclusions: ["Flights", "Tips", "Laundry"],
    departureBatches: [{ "date": "12 Oct 2024", "returnDate": "19 Oct 2024", "price": "₹42,000", "seatsLeft": 4 }],
    reviews: [{ "rating": 5, "title": "Perfect Honeymoon!", "text": "The beach candlelight dinner was beautiful. Unforgettable honeymoon.", "name": "Suresh & Ritu", "date": "Sep 2024", "verified": true }],
    agencyContact: { "name": "Green Island Tours and Travels", "whatsapp": "+919876543210", "call": "+919876543210" },
    itinerary: [
      { day: 1, title: "Romantic Welcome", summary: "Welcome drinks and checking in to Port Blair resort.", activities: [{ startTime: "02:00 PM", endTime: "03:00 PM", title: "Resort Check-in", type: "hotel", desc: "Welcome drinks and floral decor." }] },
      { day: 2, title: "Havelock Luxury Ferry", summary: "Board the luxury cruise to Havelock and check into beach villa.", activities: [{ startTime: "09:00 AM", endTime: "11:00 AM", title: "Ferry", type: "ship", desc: "Luxury cruise travel." }] },
      { day: 3, title: "Sunset Photoshoot", summary: "Professional sunset couple's photoshoot at Radhanagar Beach.", activities: [{ startTime: "05:00 PM", endTime: "08:00 PM", title: "Beach Photoshoot", type: "camera", desc: "Sunset beach photography session followed by dinner." }] },
      { day: 4, title: "Neil Island Honeymoon Suite", summary: "Ferry to Neil Island and stay in beachfront cottage.", activities: [{ startTime: "11:00 AM", endTime: "12:30 PM", title: "Ferry to Neil", type: "ship", desc: "Transfer." }] },
      { day: 5, title: "Couple's Spa Day", summary: "Enjoy a couples aromatherapy spa and explore Neil Island on a scooter.", activities: [{ startTime: "10:00 AM", endTime: "12:00 PM", title: "Massage Session", type: "hotel", desc: "Full body aromatherapy massage." }] },
      { day: 6, title: "Return Cruise", summary: "Cruise back to Port Blair for the final night.", activities: [{ startTime: "02:00 PM", endTime: "04:00 PM", title: "Return Ferry", type: "ship", desc: "Ferry back to Port Blair." }] },
      { day: 7, title: "Departure", summary: "Departure flight.", activities: [{ startTime: "10:00 AM", endTime: "11:30 AM", title: "Airport Drop", type: "flight", desc: "Fly back home with sweet memories." }] }
    ]
  },
  {
    id: 5,
    title: "Romantic Sunset Honeymoon Special",
    loc: "Havelock Island",
    duration: "4N/5D",
    price: "₹36,500",
    rating: 4.8,
    type: "Ready-Made",
    gallery: ["https://cdn.experienceandamans.com/images/photography-in-andaman-islands.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/6f/08/98.jpg", "https://ttw.wlimg.com/package-images/photo-big/dir_54/1604357/391143.jpg"],
    inclusions: ["Luxury Cottage", "Sunset Cruise", "Photoshoot", "Champagne Dinner"],
    overview: 'A compact beachfront escape curated specifically for newlyweds seeking high luxury and privacy in Havelock.',
    quickFacts: { "destination": "Havelock Island", "duration": "4N/5D", "citiesCovered": "Havelock", "travelType": "Romantic Honeymoon" },
    exclusions: ["Port Blair Sightseeing", "Personal Expenses"],
    departureBatches: [{ "date": "14 Oct 2024", "returnDate": "19 Oct 2024", "price": "₹36,500", "seatsLeft": 5 }],
    reviews: [{ "rating": 5, "title": "Beautiful and private", "text": "Perfect arrangements for couples. Loved the luxury pool villa.", "name": "Vikram M.", "date": "Aug 2024", "verified": true }],
    agencyContact: { "name": "Green Island Tours and Travels", "whatsapp": "+919876543210", "call": "+919876543210" },
    itinerary: [
      { day: 1, title: "Arrival", summary: "Arrive at Havelock.", activities: [{ startTime: "12:00 PM", endTime: "02:00 PM", title: "Resort Check-in", type: "hotel", desc: "Settle into pool villa." }] },
      { day: 2, title: "Private Beach Day", summary: "Full day of beach relaxation and swimming.", activities: [{ startTime: "09:00 AM", endTime: "12:00 PM", title: "Swim at Radhanagar", type: "activity", desc: "Swim in the azure waters." }] },
      { day: 3, title: "Sunset Catamaran Cruise", summary: "Private catamaran cruise with champagne toast.", activities: [{ startTime: "04:30 PM", endTime: "07:00 PM", title: "Sunset Sailing", type: "ship", desc: "Toast the sunset." }] },
      { day: 4, title: "Candlelight Dinner", summary: "Romantic beachfront candlelight dinner.", activities: [{ startTime: "07:30 PM", endTime: "10:00 PM", title: "Private Dining", type: "meal", desc: "5-course premium dinner." }] },
      { day: 5, title: "Departure", summary: "Ferry and flight drop.", activities: [{ startTime: "09:00 AM", endTime: "11:30 AM", title: "Ferry to Port Blair", type: "ship", desc: "Return ferry transfer." }] }
    ]
  },
  {
    id: 6,
    title: "Andaman Grand Family Beach Vacation",
    loc: "Port Blair & Havelock",
    duration: "5N/6D",
    price: "₹28,900",
    rating: 4.8,
    type: "Ready-Made",
    gallery: ["https://cdn.experienceandamans.com/images/andaman-family-package-with-kid.jpeg", "https://andamantravelbooking.com/public/frontend/img/blog/family1.jpg", "https://www.forsomethingmore.com/wp-content/uploads/2020/07/Andaman-Islands-with-Kids-and-Infants-6.jpg"],
    inclusions: ["Premium Resort", "Kids Free Play", "Glass Boat Ride", "Group Tour"],
    overview: 'Specially created for families traveling with kids and elderly members, offering comfortable transfers and light sightseeing.',
    quickFacts: { "destination": "Andaman Islands", "duration": "5N/6D", "citiesCovered": "Port Blair, Havelock", "travelType": "Family Vacation" },
    exclusions: ["Extreme Water Sports", "Dinner unless specified"],
    departureBatches: [{ "date": "15 Oct 2024", "returnDate": "21 Oct 2024", "price": "₹28,900", "seatsLeft": 8 }],
    reviews: [{ "rating": 5, "title": "Perfect for families", "text": "The glass bottom boat was loved by the kids. Safe and family-friendly hotels.", "name": "Dr. Sharma & Family", "date": "Sep 2024", "verified": true }],
    agencyContact: { "name": "Green Island Tours and Travels", "whatsapp": "+919876543210", "call": "+919876543210" },
    itinerary: [
      { day: 1, title: "Arrival & Light Show", summary: "Arrive at Port Blair and watch Light & Sound show.", activities: [{ startTime: "11:30 AM", endTime: "12:30 PM", title: "Arrival", type: "flight", desc: "Spacious tempo traveler drop." }] },
      { day: 2, title: "Havelock Ferry", summary: "Comfortable cruise ride to Havelock for the family.", activities: [{ startTime: "08:30 AM", endTime: "11:00 AM", title: "Luxury Ferry", type: "ship", desc: "Smooth cruise ride." }] },
      { day: 3, title: "Radhanagar Beach Picnic", summary: "Enjoy a family beach day with refreshments.", activities: [{ startTime: "10:00 AM", endTime: "02:00 PM", title: "Beach Picnic", type: "meal", desc: "Enjoy snacks and games on the white sands." }] },
      { day: 4, title: "Coral viewing by Glass Boat", summary: "A safe coral viewing tour using a glass bottom boat.", activities: [{ startTime: "09:00 AM", endTime: "11:00 AM", title: "Glass Boat Tour", type: "ship", desc: "View corals without getting wet." }] },
      { day: 5, title: "Port Blair Return & Shopping", summary: "Return ferry and shopping at Sagarika Emporium.", activities: [{ startTime: "02:00 PM", endTime: "04:30 PM", title: "Shopping Tour", type: "activity", desc: "Buy authentic shell crafts." }] },
      { day: 6, title: "Fly Home", summary: "Airport drop off.", activities: [{ startTime: "10:00 AM", endTime: "11:00 AM", title: "Drop-off", type: "flight", desc: "Flight back." }] }
    ]
  },
  {
    id: 7,
    title: "Fun-filled Andaman Family Explorer",
    loc: "Neil & Port Blair",
    duration: "4N/5D",
    price: "₹22,400",
    rating: 4.7,
    type: "Semi-Custom",
    gallery: ["https://cdn.experienceandamans.com/images/andaman-grouptours-havelock-island.jpeg", "https://holidays.tripfactory.com/blogs/wp-content/uploads/sites/6/2024/04/Family-Friendly-Activities-in-andaman-2.webp"],
    inclusions: ["Family Suite", "Private Transfers", "Snorkeling Tour", "All Breakfasts"],
    overview: 'A budget-friendly yet fun-filled island hopping tour designed to keep families engaged and relaxed.',
    quickFacts: { "destination": "Andaman Islands", "duration": "4N/5D", "citiesCovered": "Port Blair, Neil Island", "travelType": "Family Vacation" },
    exclusions: ["Lunch and Dinner", "Ferry upgrades"],
    departureBatches: [{ "date": "20 Oct 2024", "returnDate": "25 Oct 2024", "price": "₹22,400", "seatsLeft": 4 }],
    reviews: [{ "rating": 4, "title": "Great budget family trip", "text": "Clean hotels and prompt drivers. Recommended.", "name": "Pooja V.", "date": "Sep 2024", "verified": true }],
    agencyContact: { "name": "Green Island Tours and Travels", "whatsapp": "+919876543210", "call": "+919876543210" },
    itinerary: [
      { day: 1, title: "Arrival", summary: "Check-in at family suite in Port Blair.", activities: [{ startTime: "12:00 PM", endTime: "01:30 PM", title: "Check-in", type: "hotel", desc: "Check in." }] },
      { day: 2, title: "Neil Island Ferry", summary: "Travel to Neil Island and visit Bharatpur Beach.", activities: [{ startTime: "08:00 AM", endTime: "10:30 AM", title: "Ferry", type: "ship", desc: "Ferry ride." }] },
      { day: 3, title: "Coral Snorkeling", summary: "Family snorkeling tour under professional supervision.", activities: [{ startTime: "09:00 AM", endTime: "11:00 AM", title: "Snorkeling", type: "activity", desc: "Safe snorkeling tour." }] },
      { day: 4, title: "Port Blair Return", summary: "Return ferry and Corbyn's Cove beach walk.", activities: [{ startTime: "02:00 PM", endTime: "04:30 PM", title: "Return Ferry", type: "ship", desc: "Ferry transfer." }] },
      { day: 5, title: "Departure", summary: "Airport drop.", activities: [{ startTime: "10:30 AM", endTime: "11:30 AM", title: "Drop-off", type: "flight", desc: "Departure." }] }
    ]
  },
  {
    id: 8,
    title: "Havelock & Neil Island Escapade",
    loc: "Havelock & Neil",
    duration: "5N/6D",
    price: "₹34,800",
    rating: 4.9,
    type: "Fully Custom",
    gallery: ["https://stampedmoments.com/wp-content/uploads/2024/01/nemo-beach-havelock-island-andaman.jpg", "https://i0.wp.com/stampedmoments.com/wp-content/uploads/2024/01/elephant-beach-havelock-island-andaman-2.jpg"],
    inclusions: ["Luxury Beachside", "Scuba Session", "Speedboat Ferry", "Island Guide"],
    overview: 'A premium tour exploring the two finest gems of the Andaman archipelago: Havelock and Neil Islands.',
    quickFacts: { "destination": "Havelock, Neil Island", "duration": "5N/6D", "citiesCovered": "Havelock, Neil", "travelType": "Island-Specific Tour" },
    exclusions: ["Flight Tickets", "Meals not mentioned"],
    departureBatches: [{ "date": "18 Oct 2024", "returnDate": "23 Oct 2024", "price": "₹34,800", "seatsLeft": 4 }],
    reviews: [{ "rating": 5, "title": "Best island tour!", "text": "Neil Island and Havelock beachfront stays were incredible. Outstanding service!", "name": "Rohan P.", "date": "Sep 2024", "verified": true }],
    agencyContact: { "name": "Green Island Tours and Travels", "whatsapp": "+919876543210", "call": "+919876543210" },
    itinerary: [
      { day: 1, title: "Port Blair to Havelock", summary: "Ferry straight from Port Blair to Havelock Island.", activities: [{ startTime: "08:00 AM", endTime: "11:00 AM", title: "Board Cruise", type: "ship", desc: "Speed cruise transfer." }] },
      { day: 2, title: "Radhanagar Swim", summary: "Swimming in Radhanagar Beach.", activities: [{ startTime: "03:00 PM", endTime: "05:30 PM", title: "Swim", type: "activity", desc: "Enjoy the pristine water." }] },
      { day: 3, title: "Havelock Scuba", summary: "Scuba diving experience at Nemo Reef.", activities: [{ startTime: "09:00 AM", endTime: "11:30 AM", title: "Scuba Dive", type: "activity", desc: "PADI guided scuba diving session." }] },
      { day: 4, title: "Ferry to Neil Island", summary: "Speedboat cruise to Neil Island.", activities: [{ startTime: "10:00 AM", endTime: "11:30 AM", title: "Speedboat", type: "ship", desc: "Transfer to Neil." }] },
      { day: 5, title: "Natural Bridge", summary: "Visit the famous natural rock bridge formation on Neil.", activities: [{ startTime: "03:30 PM", endTime: "05:30 PM", title: "Rock Bridge", type: "camera", desc: "Walk on natural corals." }] },
      { day: 6, title: "Departure", summary: "Return ferry and flight drop.", activities: [{ startTime: "08:00 AM", endTime: "10:30 AM", title: "Ferry to Port Blair", type: "ship", desc: "Ferry transfer." }] }
    ]
  },
  {
    id: 9,
    title: "Baratang & Port Blair Caves Special",
    loc: "Baratang & Port Blair",
    duration: "3N/4D",
    price: "₹16,500",
    rating: 4.6,
    type: "Ready-Made",
    gallery: ["https://dekhoandaman.com/wp-content/uploads/2022/08/Neil-Island-Honeymoon-1024x576.jpg", "https://i0.wp.com/go2andaman.com/wp-content/uploads/2025/12/JOLLY-BUOY-ISLAND-IMG2025-224-e1765443062187.jpg"],
    inclusions: ["Eco-Resort Stay", "Mangrove Safari", "Cave Entry Permits", "Car Transfers"],
    overview: 'Unlock the wild side of Andaman by visiting the famous limestone caves of Baratang and the historic sites of Port Blair.',
    quickFacts: { "destination": "Baratang Island", "duration": "3N/4D", "citiesCovered": "Baratang, Port Blair", "travelType": "Island-Specific Tour" },
    exclusions: ["Ferry Tickets", "Guide Tips"],
    departureBatches: [{ "date": "22 Oct 2024", "returnDate": "25 Oct 2024", "price": "₹16,500", "seatsLeft": 3 }],
    reviews: [{ "rating": 4, "title": "Adventurous Caves", "text": "Trekking through the caves was challenging but rewarding! Very well organized.", "name": "Siddharth G.", "date": "Aug 2024", "verified": true }],
    agencyContact: { "name": "Green Island Tours and Travels", "whatsapp": "+919876543210", "call": "+919876543210" },
    itinerary: [
      { day: 1, title: "Arrival at Port Blair", summary: "Airport drop and hotel check-in.", activities: [{ startTime: "12:00 PM", endTime: "01:00 PM", title: "Check-in", type: "hotel", desc: "Resort check-in." }] },
      { day: 2, title: "Convoy to Baratang", summary: "Early morning convoy drive through Jarawa reserve to Baratang eco-resort.", activities: [{ startTime: "03:30 AM", endTime: "07:30 AM", title: "Convoy Drive", type: "car", desc: "Drive through tribal reserve forest." }] },
      { day: 3, title: "Limestone Cave Safari", summary: "Speedboat safari through mangrove creeks to trek the caves.", activities: [{ startTime: "09:00 AM", endTime: "12:00 PM", title: "Mangrove Trek", type: "activity", desc: "Speedboat safari and limestone cave walk." }] },
      { day: 4, title: "Return to Port Blair", summary: "Return drive and airport transfer.", activities: [{ startTime: "08:00 AM", endTime: "12:00 PM", title: "Return Convoy", type: "car", desc: "Drive back to Port Blair airport." }] }
    ]
  },
  {
    id: 10,
    title: "Neil Island Bliss & Coral Special",
    loc: "Neil Island",
    duration: "2N/3D",
    price: "₹12,800",
    rating: 4.7,
    type: "Ready-Made",
    gallery: ["https://www.scubalov.in/wp-content/uploads/2024/11/image4.jpg", "https://www.andamantourism.org/wp-content/uploads/2024/06/coral-reefs-2.jpg"],
    inclusions: ["Beachside Stay", "Glass Bottom Boat", "Coral Reef Tour", "Scooter Tour"],
    overview: 'A tranquil short escape dedicated solely to Neil Island, exploring the vibrant corals and relaxing beaches.',
    quickFacts: { "destination": "Neil Island", "duration": "2N/3D", "citiesCovered": "Neil Island", "travelType": "Island-Specific Tour" },
    exclusions: ["Meals outside Breakfast", "Ferry to Havelock"],
    departureBatches: [{ "date": "25 Oct 2024", "returnDate": "27 Oct 2024", "price": "₹12,800", "seatsLeft": 5 }],
    reviews: [{ "rating": 5, "title": "Neil is magical!", "text": "Very peaceful beaches and amazing coral life. Loved the glass bottom ride.", "name": "Deepika T.", "date": "Sep 2024", "verified": true }],
    agencyContact: { "name": "Green Island Tours and Travels", "whatsapp": "+919876543210", "call": "+919876543210" },
    itinerary: [
      { day: 1, title: "Ferry to Neil Island", summary: "Check-in at Neil Island beachfront resort.", activities: [{ startTime: "09:00 AM", endTime: "11:30 AM", title: "Ferry", type: "ship", desc: "Morning ferry transfer." }] },
      { day: 2, title: "Glass Bottom Coral Tour", summary: "Glass bottom boat ride to view the vibrant coral reefs.", activities: [{ startTime: "10:00 AM", endTime: "12:00 PM", title: "Coral View", type: "ship", desc: "Safe coral viewing tour." }] },
      { day: 3, title: "Return to Port Blair", summary: "Afternoon ferry back and airport drop-off.", activities: [{ startTime: "02:00 PM", endTime: "04:30 PM", title: "Return Cruise", type: "ship", desc: "Ferry transfer back to Port Blair." }] }
    ]
  }
];
