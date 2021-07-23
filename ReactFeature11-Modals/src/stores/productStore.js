//Imports
import slugify from "react-slugify";
//Data
import products from "../products";
//State & Store
import { makeAutoObservable } from "mobx";

class ProductStore {
  products = products;
  constructor() {
    makeAutoObservable(this);
  }
  deleteProduct = (productID) => {
    this.products = this.products.filter((product) => product.id !== productID);
  };

  createProduct = (newProduct) => {
    this.products.push({
      ...newProduct,
      id: this.products.length + 1,
      slug: slugify(newProduct.name),
    });
  };
}

const productStore = new ProductStore();

export default productStore;
