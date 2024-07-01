import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Project({ title, thumbnail, description, link }) {
  return (
    <article className="border border-gray-300 p-4 m-4 w-full md:w-1/2 lg:w-1/3">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <img
        src={thumbnail}
        alt={`${title} Thumbnail`}
        className="w-full h-72 mb-2"
      />
      <p className="mb-4">{description}</p>
      <Link to={link} className="text-blue-500 hover:underline">
        More Details
      </Link>
    </article>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

function Projects() {
  const projectData = [
    {
      title: "Music accedmy",
      thumbnail: "/src/components/Projects/pexels-cottonbro-5081386.jpg",
      description:
        "Our music academy enriches music education by offering a versatile learning experience. We prepare students to achieve their musical aspirations through interactive dialogues, extensive music collections, and advanced study materials.",
      link: "https://shiv-vibes.vercel.app",
    },
    {
      title: "E-Commerce",
      thumbnail: "/src/components/Projects/header2.jpg",
      description:
        "Our e-commerce platform offers a diverse range of top-brand products, ensuring a convenient shopping experience with secure transactions and excellent customer service.",
      link: "project2-details.html",
    },
    // Add more projects as needed
  ];

  return (
    <div className="App">
      <main className="p-3">
        <section className="flex flex-wrap justify-center mt-10">
          {projectData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              thumbnail={project.thumbnail}
              description={project.description}
              link={project.link}
            />
          ))}
        </section>
        <nav className="text-center">
          <Link to="/About" className="text-blue-500 hover:underline mx-2">
            About Me
          </Link>{" "}
          |
          <Link to="/Contact" className="text-blue-500 hover:underline mx-2">
            Contact Me
          </Link>
        </nav>
      </main>
    </div>
  );
}

export default Projects;
