import "./App.css";
import styled, { ThemeConsumer, ThemeProvider } from "styled-components";
import Home from "./components/Home.js";
import ProductList from "./components/ProductList.js";
import { GlobalStyle } from "./styles.js";

function App() {
  const theme = {
    mainColor: "#000000",
    backgroundColor: "#d9d9d9",
    extraColor: "green",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
