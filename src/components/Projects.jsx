import movieImg from "../assets/movie.png";
import invoiceImg from "../assets/invoice.png";
import schoolImg from "../assets/school.png";
import booksImg from "../assets/books.png";

const projects = [
  {
    title: "Movie Theater",
    image: movieImg,
    description: "A modern movie website with beautiful UI.",
  },
  {
    title: "Invoice App",
    image: invoiceImg,
    description: "An application for creating and managing invoices.",
  },
  {
    title: "School Portal",
    image: schoolImg,
    description: "A responsive school management portal.",
  },
  {
    title: "Book Reading Log",
    image: booksImg,
    description: "Track books and monitor reading progress.",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects"> 
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <button className="project-btn">
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;