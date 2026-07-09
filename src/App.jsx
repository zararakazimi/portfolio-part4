import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <h1>Welcome to my Developer Portfolio!</h1>


      <Profile
      name=" Hi I'm Zarara Kazimi"
      title="Frontend Developer"
      bio="I am a creative Frontend Developer who loves turning ideas into beautiful and modern websites. I enjoy learning new technologies and growing my skills every day to build meaningful digital experiences."
      />

      <About/>
      <Projects/>
      <Contact />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
