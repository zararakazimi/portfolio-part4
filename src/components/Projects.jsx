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
    details:
      "Users can browse movies, watch trailers, and enjoy a responsive design.",
  },
  {
    title: "Invoice App",
    image: invoiceImg,
    description: "An application for creating and managing invoices.",
    technology: "JavaScript",
    featured: false,
    details:
      "Create invoices, calculate totals automatically, and export invoices.",
  },
  {
    title: "School Portal",
    image: schoolImg,
    description: "A responsive school management portal.",
    technology: "React",
    featured: true,
    details:
      "Students and teachers can manage courses, grades, and announcements.",
  },
  {
    title: "Book Reading Log",
    image: booksImg,
    description: "Track books and monitor reading progress.",
    technology: "HTML/CSS",
    featured: false,
    details:
      "Keep a reading history, ratings, and reading goals.",
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
      <h2>My Projects</h2>

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
              <span className="featured">
                 Featured
              </span>
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
                <p>{project.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;