import React, { useState, useEffect } from "react";
/** @jsxImportSource theme-ui */

import { BrowserRouter } from "react-router-dom";
import {
  About, Contact, Experience, Feedbacks,
  Hero, Navbar, Tech, Projects, StarsCanvas, Footer
} from './components'
import { lightTheme, darkTheme } from "./theme";
import { useColorMode, ThemeProvider } from "theme-ui";
import { set, get } from 'local-storage';


const App = ({ setTheme }) => {
  const [colorMode, setColorMode] = useColorMode(() => get('colorMode') || "dark");

  useEffect(() => {
    set('colorMode', colorMode);
    setTheme(colorMode === "light" ? lightTheme : darkTheme);
  }, [colorMode]);


  const toggleTheme = () => {

    setTheme(colorMode === "light" ? darkTheme : lightTheme);
    setColorMode(colorMode === "light" ? "dark" : "light")
    console.log("TOGGLING to ", colorMode)
  };


  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div
        className="relative z-0"
        sx={{ background: "backgroundPrimary" }}
      >
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar toggleTheme={toggleTheme} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        {/* <Feedbacks /> */}
        {/* <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div> */}
        <Contact />

        <Footer />

      </div>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

const ThemeWrapper = () => {
  const [theme, setTheme] = useState(darkTheme);
  return (
    <ThemeProvider theme={theme}>
      <App setTheme={setTheme} />
    </ThemeProvider>
  );
}




export default ThemeWrapper;
