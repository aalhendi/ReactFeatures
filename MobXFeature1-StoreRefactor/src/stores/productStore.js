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
}

const productStore = new ProductStore();

export default productStore;
