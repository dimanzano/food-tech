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
    name: "Lesumer Hof",
    image:  "/src/assets/images/restaurants/lesumer-rest.jpg",
    description: "A unique dining and entertainment experience in the heart of Bremen!",
    specialties: ["Schnitzel", "French fries", "Grünkohl"],
    address: "Oberreihe 8, 28717 Bremen",
  },
  {
    id: 8,
    name: "Loui & Jules im Loretta",
    image: "/src/assets/images/restaurants/schnitzel.jpeg",
    description: "Hello everyone, welcome to Loui & Jules. We serve you fresh and modern cuisine, that makes you happy.",
    specialties: ["Juicy Vegan Burger", "Schnitzel", "Ice cream by Giovanni"],
    address: " Alte Hafenstraße 29, 28757 Bremen",
  },
  {
    id: 9,
    name: "Mr.Trung Viet Cuisine",
    image:  "/src/assets/images/restaurants/sushi-vegesack.jpg",
    description: "From traditional nigiri to innovative rolls bursting with unique combinations, our offerings cater to both sushi connoisseurs and those exploring this delectable world for the first time.",
    specialties: ["Nigiri", "Yakimeshi", "Rolls"],
    address: "Rohrstraße 1, 28757 Bremen",
  },
  {
    id: 10,
    name: "Restaurant Shelale",
    image: "/src/assets/images/restaurants/turk-rest.jpg",
    description: "Our traditional Turkish restaurant “Shelale” (translated as waterfall) with Anatolian specialties from the clay oven has been located in the middle of the old town of Bremen-Vegesack for 12 years.",
    specialties: ["Mercimek Corbasi", "Kizarmisi Beyaz Peynir", "Sigara Boregi"],
    address: "Jaburgstraße 21, 28757 Bremen",
  },
  {
    id: 11,
    name: "Mersin 33 Tantuni & Cigkofte haus",
    image: "/src/assets/images/restaurants/pitta-rest.jpg",
    description: "At Doner Delight, we pride ourselves on using only the finest ingredients, from succulent slices of marinated meat to crisp, fresh vegetables.",
    specialties: ["Donner box"],
    address: "Sagerstraße 27, 28757 Bremen",
  },
  {
    id: 12,
    name: "Restaurant Olympia",
    image: "/src/assets/images/restaurants/greek-rest.jpg",
    description: "Indulge in our extensive selection of mezedes (appetizers) featuring olives, feta, and other delights that embody the essence of Greek dining",
    specialties: ["Pitta", "Greek salad", "Amygdalota"],
    address: "Friedrich-Humbert-Straße 151, 28759 Bremen",
  },
  {
    id: 13,
    name: "Pizzeria La Veranda",
    image: "/src/assets/images/restaurants/pizza-rest.jpg",
    description: "Pair your meal with a selection from our curated wine list or choose from a variety of refreshing beverages to complement your pizza feast.",
    specialties: ["Olives", "Veranda pizza"],
    address: "Vegesacker Heerstraße 156, 28757 Bremen",
  },
  {
    id: 14,
    name: "Blue Chilli Food",
    image:  "/src/assets/images/restaurants/spinach-rest.jpg",
    description: "Indulge in a diverse menu featuring an array of pizzas, from the timeless Margherita to inventive creations inspired by global flavors.",
    specialties: ["American burger", "Schnitzel", "Pepperoni"],
    address: "Stader Landstraße 32, 28719 Bremen",
  },
];
