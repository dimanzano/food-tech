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
    name: "Restaurant 1",
    image: "https://via.placeholder.com/150", // replace with actual image url
    description: "This is a description for Restaurant 1",
    specialties: ["Specialty 1", "Specialty 2"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 2,
    name: "Restaurant 2",
    image: "https://via.placeholder.com/150", // replace with actual image url
    description: "This is a description for Restaurant 2",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 3,
    name: "Restaurant 3",
    image: "https://via.placeholder.com/150", // replace with actual image url
    description: "This is a description for Restaurant 2",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 4,
    name: "Restaurant 4",
    image: "https://via.placeholder.com/150", // replace with actual image url
    description: "This is a description for Restaurant 4",
    specialties: ["Specialty 1", "Specialty 2"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 5,
    name: "Restaurant 5",
    image: "https://via.placeholder.com/150", // replace with actual image url
    description: "This is a description for Restaurant 5",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
  {
    id: 6,
    name: "Restaurant 6",
    image: "https://via.placeholder.com/150", // replace with actual image url
    description: "This is a description for Restaurant 6",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
    address: "123 Main St, City, State, 12345",
  },
];
