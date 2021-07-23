// Styling
import { GlobalStyle } from "./styles";

// Components
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar.js";
import ProductDetail from "./components/ProductDetail.js";

//Imports
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

// Data
import products from "./products";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_products, setProducts] = useState(products);

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const deleteProduct = (productID) => {
    setProducts(_products.filter((product) => product.id !== productID));
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:productSlug">
          <ProductDetail products={_products} deleteProduct={deleteProduct} />
      </Route>
        <Route path="/products">
          <ProductList products={_products} deleteProduct={deleteProduct} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
