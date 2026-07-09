function Header({ message }) {
  return (
    <section className="header" id="home">
      
      <div className="header-text">
        <h1>{message}</h1>

        <h2>
          Hi, I'm Zarara 👋
        </h2>

        <p>
          A creative Frontend Developer who loves building
          beautiful and modern websites.
        </p>

        <button className="hireBtn">
          Hire Me
        </button>
      </div>
    </section>
    
  );
}

export default Header;