// juiceProductData.js
import juiceImage1 from '../../assets/MOsambi.png';
import juiceImage2 from '../../assets/Pineapple.png';
import juiceImage3 from '../../assets/Pommo.png';
import juiceImage4 from '../../assets/Orange.png';
import juiceImage5 from '../../assets/Mixedjuice.png';

const juiceProducts = [
  {
    id: 1,
    name: "Fresh Mosambi Juice",
    image: juiceImage1,
    price: 200,
    description:
      "Freshly squeezed orange juice made from 100% natural oranges. No added sugar.",
    quantity: 50,
    category: "Energy Booster",
    rating: 4.8,

    // 🆕 Added
    ingredients: ["Fresh Oranges","no sugar","No artificial colors","No preservatives"],
    nutrition: {
      calories: 110,
      sugar: "20g",
      vitaminC: "90mg",
      carbs: "25g",
    }
  },

  {
    id: 2,
    name: "Orange Juice",
    image: juiceImage4,
    price: 3.49,
    oldPrice: 4.50,
    description:
      "Pure apple juice with a sweet and crisp flavor. Cold-pressed to retain nutrients.",
    quantity: 40,
    category: "Diabetes Friendly",
    rating: 4.6,

    // 🆕 Added
    ingredients: ["Orange Pulp", "Natural sugar","No artificial colors","No preservatives"],
    nutrition: {
      calories: 100,
      sugar: "18g",
      vitaminC: "85mg",
      carbs: "23g",
    }
  },

  {
    id: 3,
    name: "Pomegranate Juice",
    image: juiceImage3,
    price: 5.99,
    oldPrice: 7.99,
    description:
      "Fresh pomegranate juice packed with antioxidants and natural sweetness.",
    quantity: 30,
    category: "Antioxidant Rich",
    rating: 4.9,

    // 🆕 Added
    ingredients: ["Pomegranate Seeds","No artificial colors","No preservatives"],
    nutrition: {
      calories: 130,
      sugar: "24g",
      antioxidants: "High",
      carbs: "28g",
    }
  },

  {
    id: 4,
    name: "Pineapple Juice",
    image: juiceImage2,
    price: 4.49,
    oldPrice: 5.99,
    description:
      "Sweet and tangy pineapple juice made from selected ripe pineapples.",
    quantity: 25,
    category: "Tropical Delight",
    rating: 4.7,

    // 🆕 Added
    ingredients: ["Pineapple Chunks","No artificial colors","No preservatives"],
    nutrition: {
      calories: 120,
      sugar: "22g",
      vitaminC: "70mg",
      carbs: "26g",
    }
  },
  {
    id: 5,
name: "Mixed Fruit Juice",
image: juiceImage5,
price: 4.99,
oldPrice: 6.49,
description:
  "A refreshing blend of handpicked tropical and seasonal fruits for a perfectly balanced taste.",
quantity: 30,
category: "Mixed",
rating: 4.8,

// 🆕 Added
ingredients: ["Orange", "Pineapple", "Apple", "Mango", "No artificial colors", "No preservatives"],
nutrition: {
  calories: 130,
  sugar: "24g",
  vitaminC: "60mg",
  carbs: "28g",
},

  }
  
];

export default juiceProducts;
  