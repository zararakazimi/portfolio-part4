import { useState } from "react";

function About() {
  const [message, setMessage] = useState(
    "Welcome to my portfolio!"
  );

  const changeMessage = () => {
    const messages = [
      "🌸 Thank you for visiting!",
      "💻 I love building React applications.",
      "✨ Every project teaches me something new.",
      "💜 Let's create something amazing together!",
      "😊 Have a wonderful day!",
    ];

    const random =
      messages[Math.floor(Math.random() * messages.length)];

    setMessage(random);
  };

  return (
    <section className="about" id="about">
      <div className="about-card">

        <div
          className="avatar"
          onClick={changeMessage}
          title="Click to see a message"
        >
          👩 Click Me
        </div>

        <h2>About Me</h2>

        <p>
          I am a passionate Frontend Developer who enjoys creating
          modern, responsive, and user-friendly web applications using
          React, JavaScript, HTML, and CSS.
        </p>

        <h3>🎯 Career Goal</h3>

        <p>
          My goal is to become a professional React Developer,
          building high-quality applications that provide excellent
          user experiences and solve real-world problems.
        </p>

        <h3>🚀 Learning Journey</h3>

        <p>
          Throughout my React learning journey, I have developed
          projects that strengthened my skills in components,
          state management, React Hooks, routing, forms,
          conditional rendering, and modern UI design.
        </p>

        <h3>💡 My Philosophy</h3>

        <p>
          I believe every project is an opportunity to learn,
          improve, and create meaningful digital experiences.
        </p>

        <h3>🛠 Technologies</h3>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Python</span>
          <span>Git & GitHub</span>
        </div>

        <h3>{message}</h3>

      </div>
    </section>
  );
}

export default About;