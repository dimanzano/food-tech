interface Restaurant {
  id: number;
  name: string;
  image: string;
  description: string;
  specialties: string[];
  address: string;
}

export const restaurantData: Restaurant[] = [
  {
    id: 1,
    name: "Gül Restaurant",
    image: "/src/assets/images/restaurants/guel-rest.jpg",
    description: "Discover a taste of Turkey in the heart of Bremen at Halal Turkish restaurant. Step into a warm, inviting ambiance adorned with Turkish decor. ",
    specialties: ["Pide","Baklava"],
    address: "Vegesacker Bahnhofspl. 1a, 28757 Bremen",
  },
  {
    id: 2,
    name: "L'Angolino",
    image: "/src/assets/images/restaurants/Ita-rest.jpg",
    description: "The rustic ambiance, adorned with vintage posters, sets the stage for a culinary journey. Attentive staff and a menu featuring authentic Italian dishes, from wood-fired pizzas to handmade pasta, promise a delightful dining experience",
    specialties: ["Vitelto Tonnato", "Parmesiana Aguileto", "Parmesiana Pinza"],
    address: "Richthofenstraße 30, 28759 Bremen",
  },
  {
    id: 3,
    name: "Neco grill",
    image: "/src/assets/images/restaurants/Donner-rest.jpg",
    description: "As you step inside, the enticing aroma of seasoned halal meats grilling on open flames fills the air, creating an immediate sense of anticipation. The décor is modern and welcoming, with subtle nods to Mediterranean influences. ",
    specialties: ["Donner Kebab", "Rollo mit fleisch"],
    address: "Unter den Linden 12, 28759 Bremen",
  },
  {
    id: 4,
    name: "Kunstcafé Kränholm",
    image: "/src/assets/images/restaurants/Cafe-rest.jpg",
    description: "The menu features a curated selection of premium coffee blends, from robust espressos to velvety lattes, ensuring a delightful experience for every palate.",
    specialties: ["Cheesecake (Strawberry)", "Vegan cake"],
    address: "Auf dem Hohen Ufer 35, 28759 Bremen",
  },
  {
    id: 5,
    name: "Waldgaststätte Brunnenhof",
    image:  "/src/assets/images/restaurants/Meat-rest.jpeg",
    description: "Herzlich willkommen! The menu showcases the diverse and robust flavors of German cuisine, featuring everything from crispy schnitzels to creamy potato salads",
    specialties: ["Fleisch mit Kartoffel", "Grünkohl"],
    address: "Grüner Weg 15, 28790 Schwanewede",
  },
  {
    id: 6,
    name: "TINTO",
    image: "/src/assets/images/restaurants/Spain-rest.jpg",
    description: "Each plate is a testament to the authenticity of Spanish culinary artistry, utilizing fresh, quality ingredients. A carefully curated wine list featuring Spanish varietals complements the dining experience. ",
    specialties: ["Pulpo a la Gallega", "Tapas", "Tortilla Española"],
    address: "Alte Hafenstraße 7, 28757 Bremen",
  },
  {
    id: 7,
    name: "Restaurant 7",
    image:  "/src/assets/images/restaurants/bakery-rest.jpg",
    description: "This is a description for Restaurant 5",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 8,
    name: "Restaurant 8",
    image: "/src/assets/images/restaurants/korean-rest.jpg",
    description: "This is a description for Restaurant 6",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 9,
    name: "Restaurant 9",
    image:  "/src/assets/images/restaurants/mediterranean-rest.jpg",
    description: "This is a description for Restaurant 5",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 10,
    name: "Restaurant 10",
    image: "/src/assets/images/restaurants/mexican-rest.jpg",
    description: "This is a description for Restaurant 6",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 11,
    name: "Restaurant 11",
    image: "/src/assets/images/restaurants/korean2-rest.jpg",
    description: "This is a description for Restaurant 6",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 12,
    name: "Restaurant 12",
    image: "/src/assets/images/restaurants/chinese-rest.jpg",
    description: "This is a description for Restaurant 6",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 13,
    name: "Restaurant 13",
    image: "/src/assets/images/restaurants/pho-rest.jpg",
    description: "This is a description for Restaurant 6",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 14,
    name: "Restaurant 14",
    image:  "/src/assets/images/restaurants/bakery2-rest.jpg",
    description: "This is a description for Restaurant 5",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
];
