function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>

      <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        className="modeBtn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;

