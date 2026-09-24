
const products = [
  // =====================================================
  // GROUNDNUT OIL
  // =====================================================

  {
    id: 1,
    name: "Cold-Pressed Groundnut Oil - 1L Plastic Bottle",
    category: "groundnut-oil",
    categoryName: "Groundnut",
    price: 499,
    salePrice: 425,
    rating: 4.8,
    reviews: 1276,
    badge: "Best Seller",
    discount: "15% OFF",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 2,
    name: "Cold-Pressed Groundnut Oil - 2L Can",
    category: "groundnut-oil",
    categoryName: "Groundnut",
    price: 925,
    salePrice: 833,
    rating: 4.8,
    reviews: 1276,
    badge: "Best Seller",
    discount: "10% OFF",
    image:
      "https://th.bing.com/th/id/OIP.Rj7MIniY7L_0zhAhqBtRJAHaHa?w=191&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },

  {
    id: 3,
    name: "Cold-Pressed Groundnut Oil - 5L Can",
    category: "groundnut-oil",
    categoryName: "Groundnut",
    price: 2000,
    salePrice: 1880,
    rating: 4.8,
    reviews: 1276,
    badge: "Selling Fast",
    discount: "6% OFF",
    image:
      "https://th.bing.com/th/id/OIP.n5W0oSQLoAKsOmZ4WVoj7QHaMt?w=190&h=327&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },

  {
    id: 4,
    name: "Cold-Pressed Groundnut Oil - 1L Glass Bottle",
    category: "groundnut-oil",
    categoryName: "Groundnut",
    price: 600,
    salePrice: 564,
    rating: 4.8,
    reviews: 1276,
    badge: "Best Seller",
    discount: "6% OFF",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.i6ktFUqPBB-K2nn8uAe5EwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },

  // =====================================================
  // MUSTARD OIL
  // =====================================================

  {
    id: 5,
    name: "Cold-Pressed Mustard Oil - 1L Bottle",
    category: "mustard-oil",
    categoryName: "Mustard",
    price: 499,
    salePrice: 449,
    rating: 4.8,
    reviews: 856,
    badge: "Best Seller",
    discount: "10% OFF",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2026/2/584947041/KN/PC/ZP/263866263/1l-shri-krishna-yellow-kachi-ghani-mustard-oil-1000x1000.jpg",
  },

  {
    id: 6,
    name: "Cold-Pressed Mustard Oil - 2L Bottle",
    category: "mustard-oil",
    categoryName: "Mustard",
    price: 950,
    salePrice: 855,
    rating: 4.7,
    reviews: 642,
    badge: "Popular",
    discount: "10% OFF",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/3/496016303/RW/TP/AI/67806880/crude-degummed-rapeseed-oil-1000x1000.jpeg",
  },

  // =====================================================
  // SUNFLOWER OIL
  // =====================================================

  {
    id: 7,
    name: "Cold-Pressed Sunflower Oil - 1L Bottle",
    category: "sunflower-oil",
    categoryName: "Sunflower",
    price: 550,
    salePrice: 499,
    rating: 4.8,
    reviews: 512,
    badge: "Best Seller",
    discount: "9% OFF",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/343975501/XA/VS/YB/117215203/1l-shrikrupa-cold-pressed-sunflower-oil-1000x1000.jpg",
  },

  {
    id: 8,
    name: "Cold-Pressed Sunflower Oil - 2L Bottle",
    category: "sunflower-oil",
    categoryName: "Sunflower",
    price: 1050,
    salePrice: 949,
    rating: 4.7,
    reviews: 388,
    badge: "Popular",
    discount: "10% OFF",
    image:
      "https://shreecoldpressoil.com/wp-content/uploads/2026/04/sunflower_oil_2ltr-1.png"

  },

  // =====================================================
  // OLIVE OIL
  // =====================================================

  {
    id: 9,
    name: "Pure Olive Oil - 500ml Bottle",
    category: "olive-oil",
    categoryName: "Olive",
    price: 899,
    salePrice: 799,
    rating: 4.8,
    reviews: 425,
    badge: "Premium",
    discount: "11% OFF",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.KtJEZwIJcOnzyyTzsc0degHaR7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },

  {
    id: 10,
    name: "Pure Olive Oil - 1L Bottle",
    category: "olive-oil",
    categoryName: "Olive",
    price: 1599,
    salePrice: 1449,
    rating: 4.8,
    reviews: 318,
    badge: "Popular",
    discount: "9% OFF",
    image:
      "https://th.bing.com/th/id/OIP.yPUkXEnF5r_AK0htxyNIBwHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },

  // =====================================================
  // COCONUT OIL
  // =====================================================

  {
    id: 11,
    name: "Cold-Pressed Coconut Oil - 500ml Bottle",
    category: "coconut-oil",
    categoryName: "Coconut",
    price: 450,
    salePrice: 399,
    rating: 4.9,
    reviews: 721,
    badge: "Best Seller",
    discount: "11% OFF",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/6/425407786/FS/NX/EV/82443982/cold-pressed-groundnut-oil-1000x1000.jpg"
  },

  {
    id: 12,
    name: "Cold-Pressed Coconut Oil - 1L Bottle",
    category: "coconut-oil",
    categoryName: "Coconut",
    price: 799,
    salePrice: 699,
    rating: 4.9,
    reviews: 624,
    badge: "Popular",
    discount: "12% OFF",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/3/492936894/CV/OP/TX/217127857/1-l-wood-pressed-coconut-oil-500x500.webp"
  },

  // =====================================================
  // SESAME OIL
  // =====================================================

  {
    id: 13,
    name: "Cold-Pressed Sesame Oil - 1L Bottle",
    category: "sesame-oil",
    categoryName: "Sesame",
    price: 699,
    salePrice: 629,
    rating: 4.8,
    reviews: 457,
    badge: "Best Seller",
    discount: "10% OFF",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/5/ST/OZ/CL/28494361/cold-pressed-sesame-oil-200ml-500x500.jpeg"
  },

  {
    id: 14,
    name: "Cold-Pressed Sesame Oil - 2L Bottle",
    category: "sesame-oil",
    categoryName: "Sesame",
    price: 1350,
    salePrice: 1199,
    rating: 4.7,
    reviews: 312,
    badge: "Popular",
    discount: "11% OFF",
    image:
      "https://standardcoldpressedoil.com/wp-content/uploads/2022/11/buy-sesame-oil-online.webp"
  },
  // wood press 
  {
  id: 15,
  name: "Wood Pressed Groundnut Oil - 1L Bottle",
  category: "wood-pressed-oil",
  categoryName: "Wood Pressed Oil",
  price: 499,
  salePrice: 425,
  rating: 4.8,
  reviews: 500,
  badge: "Best Seller",
  discount: "15% OFF",
  image: "https://m.media-amazon.com/images/I/4151Cr3EuLL.jpg",
},
{
  id: 16,
  name: "Wood Pressed Groundnut Oil - 2L Bottle",
  category: "wood-pressed-oil",
  categoryName: "Wood Pressed Oil",
  price: 1099,
  salePrice: 949,
  rating: 4.8,
  reviews: 520,
  badge: "Popular",
  discount: "14% OFF",
  image:
    "https://5.imimg.com/data5/SELLER/Default/2023/7/327148231/FL/EC/XS/154202314/2l-natural-wood-pressed-groundnut-oil-500x500.jpg"
},
];

export default products;