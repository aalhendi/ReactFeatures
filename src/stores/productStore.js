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

  productUpdate = (updateProduct) => {
    const product = this.product.find(
      (product) => product.id === updateProduct.id
    );
    product.name = updateProduct.name;
    product.price = updateProduct.price;
    product.description = updateProduct.description;
    product.image = updateProduct.image;
    // TODO: Refactor above (Oneline?)
    product.slug = slugify(updateProduct.name);
  };
}

const productStore = new ProductStore();

export default productStore;
