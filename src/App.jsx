import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import FeedbackWall from "./components/FeedbackWall";
import ProjectUpdates from "./components/ProjectUpdates";




function App() {
  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("darkMode");
  return savedTheme === "true";

});

useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);


  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    <main>
      <Profile
        name="Hi I'm Zarara Kazimi"
        title="Frontend Developer"
        bio="I am a creative Frontend Developer who loves turning ideas into beautiful and modern websites. I enjoy learning new technologies and growing my skills every day to build meaningful digital experiences."
      />

      <About />

      <Skills />

      <Projects />

      <ProjectUpdates />

      <Contact />

      <FeedbackWall />

      <Footer />

    </main>
    
    </div>
  );
}

export default App;
