const pizzaData = [
  {
    id: 1,
    name: "Plain Cheese",
    price: 10,
    category: "classic",
    description: "San Marzano tomatoes and cheese",
    rating: 4.7,
    spicy: false,
    vegetarian: true,
    ingredients: ["San Marzano Tomatoes", "Mozzarella Cheese", "Fresh Basil"],
    image: "INSERT_PLAIN_CHEESE_PIZZA_IMAGE_URL_HERE" // INSERT YOUR IMAGE URL
  },
  {
    id: 2,
    name: "Plain Tomato",
    price: 10,
    category: "veggie",
    description: "San Marzano tomatoes (Vegan or Veggie option)",
    rating: 4.5,
    spicy: false,
    vegetarian: true,
    vegan: true,
    ingredients: ["San Marzano Tomatoes", "Fresh Herbs", "Garlic Oil"],
    image: "INSERT_PLAIN_TOMATO_PIZZA_IMAGE_URL_HERE" // INSERT YOUR IMAGE URL
  },
  {
    id: 3,
    name: "Pepperoni",
    price: 12,
    category: "classic",
    description: "San Marzano tomatoes, cheese and pepperoni",
    rating: 4.9,
    spicy: true,
    vegetarian: false,
    ingredients: ["San Marzano Tomatoes", "Mozzarella", "Pepperoni", "Chilli Flakes"],
    image: "INSERT_PEPPERONI_PIZZA_IMAGE_URL_HERE" // INSERT YOUR IMAGE URL
  },
  {
    id: 4,
    name: "Veggie",
    price: 12,
    category: "veggie",
    description: "Loaded with fresh vegetables and pineapple",
    rating: 4.6,
    spicy: true,
    vegetarian: true,
    ingredients: ["San Marzano Tomatoes", "Mozzarella", "Onion", "Peppers", "Chilli", "Sweetcorn", "Pineapple"],
    image: "INSERT_VEGGIE_PIZZA_IMAGE_URL_HERE" // INSERT YOUR IMAGE URL
  }
];

export default pizzaData;