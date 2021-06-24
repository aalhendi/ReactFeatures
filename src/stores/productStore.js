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

  slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  };

  createProduct = (newProduct) => {
    this.products.push({
      id: this.products.length + 1,
      name: newProduct.name[0],
      price: newProduct.price[0],
      description: newProduct.description[0],
      image: newProduct.image[0],
      slug: this.slugify(newProduct.name[0]),
    });
  };
}

const productStore = new ProductStore();

export default productStore;
