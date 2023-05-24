import React, { useState } from "react";
/** @jsxImportSource theme-ui */
import { BrowserRouter } from "react-router-dom";
import {
  About, Contact, Experience, Feedbacks,
  Hero, Navbar, Tech, Projects, StarsCanvas, Footer
} from './components'
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "theme-ui";


const App = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div
          className="relative z-0"
          sx={{ background: "backgroundPrimary" }}
        >
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar toggleTheme={toggleTheme} />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Projects />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
