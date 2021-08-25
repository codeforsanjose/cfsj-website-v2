import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "normalize.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size:62.5%;
    font-family: 'Rubik', sans-serif;
  }
  a {
    text-decoration: none;
    }
    
`;
const mainTheme = {
	lemonadeColor: "#FCFF6C",
	fogColor: "#E7ECEF",
	navColor: "#274C77",
	skyColor: "#6096BA",
	midnightColor: "#1B263B",
};

const Layout = ({ children }) => {
	return (
		<>
			<ThemeProvider theme={mainTheme}>
				<Navbar />
				<GlobalStyle />
				{children}
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default Layout;
