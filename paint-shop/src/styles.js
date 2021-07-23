import styled, { ThemeConsumer, ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
    };
`;
export const Title = styled.h1`
  text-align: center;
`;

export const HomeImage = styled.img`
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
`;

export const ProductWrapper = styled.div`
  text-align: center;
  img {
    padding: 10px;
    width: 200px;
    height: 250px;
  }
  p.product-name {
    text-align: center;
  }
  p.product-price {
    text-align: center;
    color: red;
  }
`;
