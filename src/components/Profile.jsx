import profileImg from "../assets/profile.jpg";

function Profile() {
  return (
    <section className="profile" id="home">
      <div className="profile-card">

        <img
          src={profileImg}
          alt="Portrait of Zarara Kazimi"
          className="profile-img"
        />

        <h1>Hi, I'm Zarara Kazimi 👋</h1>

        <h3>Frontend React Developer</h3>

        <p>
          I build responsive, accessible, and modern web applications
          using React, JavaScript, HTML, and CSS. I enjoy turning ideas
          into beautiful user experiences while continuously learning
          new technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn">
            💼 View My Projects
          </a>

          <a href="#contact" className="hero-btn secondary">
            📩 Let's Connect
          </a>
        </div>

      </div>
    </section>
  );
}

export default Profile;