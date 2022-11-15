import React, { useState, createContext } from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Project from './components/Projects/Project';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import ScrollToTop from 'react-scroll-to-top';
import "./App.css";
import NavbarMobileView from './components/Sidebar/NavbarMobileView';

export const ThemeContext = createContext(null)
const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme}}>
      <div id={theme}>
        <NavbarMobileView changeTheme={changeTheme} theme={theme}/>
        <Sidebar changeTheme={changeTheme} theme={theme}/>
        <About />
        <WorkExperience />
        <TechStack />
        <Education />
        <Project />
        <Testimonial />
        <Contact />
      </div>
      <ScrollToTop 
        smooth={true}
        top="20"
        color="white"
        height="20"
        width="20"
      style={{ borderRadius:"90px", backgroundColor: "#38004c" }}/>
    </ThemeContext.Provider>
  )
}

export default App;