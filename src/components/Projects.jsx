import { useState } from "react";

import movieImg from "../assets/movie.png";
import invoiceImg from "../assets/invoice.png";
import schoolImg from "../assets/school.png";
import booksImg from "../assets/books.png";

const projects = [
  {
    title: "Movie Theater",
    image: movieImg,
    description: "A modern movie website with beautiful UI.",
    technology: "React",
    featured: true,

    problem:
      "Users needed an easy way to browse movies online.",

    solution:
      "Built a responsive React application with modern navigation and movie cards.",

    outcome:
      "Created a fast, responsive, and user-friendly movie browsing experience.",

    github: "https://github.com/zararakazimi/Responsive-Movie-Theater-Landing-Page",
    demo: " https://zararakazimi.github.io/Responsive-Movie-Theater-Landing-Page/",
  },

  {
    title: "Invoice App",
    image: invoiceImg,
    description: "An application for creating and managing invoices.",
    technology: "JavaScript",
    featured: false,

    problem:
      "Businesses needed a faster and easier way to create invoices.",

    solution:
      "Built an invoice management application with automatic calculations.",

    outcome:
      "Made invoice creation faster, easier, and more organized.",

    github: "https://github.com/zararakazimi/App-Invoices",
    demo: " https://zararakazimi.github.io/App-Invoices/",
  },

  {
    title: "School Portal",
    image: schoolImg,
    description: "A responsive school management portal.",
    technology: "React",
    featured: true,

    problem:
      "Students and teachers needed an organized online school system.",

    solution:
      "Developed a React portal for courses, grades, and announcements.",

    outcome:
      "Provided an organized and responsive school management experience.",

    github: "https://github.com/zararakazimi/School-Portal",
    demo: "https://zararakazimi.github.io/School-Portal/",
  },

  {
    title: "Book Reading Log",
    image: booksImg,
    description: "Track books and monitor reading progress.",
    technology: "HTML/CSS",
    featured: false,

    problem:
      "Readers needed a simple way to track books and reading goals.",

    solution:
      "Designed a clean and responsive reading log using HTML and CSS.",

    outcome:
      "Helped users organize their reading history and monitor progress.",

    github: "https://github.com/zararakazimi/Book-Reading-Log",
    demo: " https://zararakazimi.github.io/Book-Reading-Log/",
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [openProject, setOpenProject] = useState(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.technology === filter
        );

  return (
    <section className="projects" id="projects">
      <h2>💼 My Projects</h2>

      <div className="filter-buttons">
        <button
          className={filter === "All" ? "active-filter" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className={filter === "React" ? "active-filter" : ""}
          onClick={() => setFilter("React")}
        >
          React
        </button>

        <button
          className={filter === "JavaScript" ? "active-filter" : ""}
          onClick={() => setFilter("JavaScript")}
        >
          JavaScript
        </button>

        <button
          className={filter === "HTML/CSS" ? "active-filter" : ""}
          onClick={() => setFilter("HTML/CSS")}
        >
          HTML & CSS
        </button>
      </div>

      <div className="project-container">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.featured && (
              <span className="featured">🌟 Featured</span>
            )}

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="tech-tag">
              {project.technology}
            </span>

            <button
              className="project-btn"
              onClick={() =>
                setOpenProject(
                  openProject === index ? null : index
                )
              }
            >
              {openProject === index
                ? "Hide Details"
                : "View Details"}
            </button>

            {openProject === index && (
              <div className="project-details">

                <p>
                  <strong>Problem:</strong><br />
                  {project.problem}
                </p>

                <p>
                  <strong>Solution:</strong><br />
                  {project.solution}
                </p>

                <p>
                  <strong>Outcome:</strong><br />
                  {project.outcome}
                </p>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    💻 GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    🚀 Live Demo
                  </a>

                </div>

              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;