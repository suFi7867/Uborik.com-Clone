import createProduct from "./createProduct.js";
import productsData from "./data.js";

const productContainer = document.querySelector(".products-cont");

console.log(productsData);

const allDataStr = Object.keys(productsData)
  .map((key) => createProduct(productsData[key],key))
  .join("\n");

productContainer.innerHTML = allDataStr;
