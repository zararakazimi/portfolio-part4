function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>

      <ul className="menu">
        <li><a href="#profile">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#feedback">Feedback</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        className="modeBtn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;

