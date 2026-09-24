import products from "./products";
import gheeProducts from "./gheeProducts";
import superfoodProducts from "./superfoodProducts";
import jaggeryProducts from "./jaggeryProducts";
import comboProducts from "./comboProducts";

const allProducts = [
  ...products,
  ...gheeProducts,
  ...superfoodProducts,
  ...jaggeryProducts,
  ...comboProducts,
];

const hotDeals = allProducts.filter(
  (product) =>
    product.salePrice &&
    product.salePrice < product.price
);

export default hotDeals;