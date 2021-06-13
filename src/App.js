// Styling
import { GlobalStyle, ThemeButton } from "./styles";

// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

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
    const [currentTheme, setTheme] = useState(theme.light);
    const toggleTheme = () => {
        currentTheme === theme.dark
            ? setTheme(theme.light)
            : setTheme(theme.dark);
    };

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <ThemeButton onClick={toggleTheme}>
                {currentTheme === theme.light ? "Dark Mode" : "Light Mode"}
            </ThemeButton>
            <Home />
            <CookieList />
        </ThemeProvider>
    );
}

export default App;
