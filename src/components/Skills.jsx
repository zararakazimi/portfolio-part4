function Skills() {
  const skills = [
    { name: "HTML", level: 95, fact: "I enjoy building clean page structures." },
    { name: "CSS", level: 90, fact: "I love creating beautiful interfaces." },
    { name: "JavaScript", level: 85, fact: "I enjoy solving programming problems." },
    { name: "React", level: 80, fact: "My favorite library for building UIs." },
    { name: "Git & GitHub", level: 75, fact: "I use Git to manage my projects." },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>💖 My Skills</h2>

      {skills.map((skill, index) => (
        <div className="skill-item" key={index}>
          <div className="skill-header">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>

          <small className="skill-fact">{skill.fact}</small>
        </div>
      ))}
    </section>
  );
}

export default Skills;