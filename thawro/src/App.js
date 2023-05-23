import { BrowserRouter } from "react-router-dom";
import {
  About, Contact, Experience, Feedbacks,
  Hero, Navbar, Tech, Projects, StarsCanvas, Footer
} from './components'


const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#080d1c]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
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

  );
}

export default App;
