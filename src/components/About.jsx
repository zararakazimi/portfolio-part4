import { useState } from "react";
import { motion } from "framer-motion";


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
          title="Click Me!"
        >
          👩‍💻
        </div>

        <h2>About Me</h2>

        <p>
          I am a creative Frontend Developer who loves turning ideas
          into beautiful and modern websites. I enjoy learning new
          technologies and improving my skills every day to build
          meaningful digital experiences.
        </p>

        <h3>{message}</h3>

      </div>
      
    </section>
  );
}

export default About;