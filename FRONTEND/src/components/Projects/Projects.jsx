import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Project({ title, thumbnail, description, link }) {
  return (
    <article className="border border-gray-300 p-4 mt-4 sm:m-4 w-full md:w-1/1 lg:w-1/1">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <Link to={link}>
        <img
          src={thumbnail}
          alt={`${title} Thumbnail`}
          className="w-full h-72 lg:h-[453px] mb-2"
        />
      </Link>
      <p>{description}</p>
    </article>
  );
}
Project.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

function Projects1() {
  const projectData = [
    {
      title: "Music accedmy",
      // thumbnail: "/images/pexels-cottonbro-5081386.jpg",
      thumbnail: "/images/luca-bravo-9l_326FISzk-unsplash.jpg",
      description:
        "Our music academy enriches music education by offering a versatile learning experience. We prepare students to achieve their musical aspirations through interactive dialogues, extensive music collections, and advanced study materials.",
      link: "https://shiv-vibes.vercel.app",
    },
    {
      title: "E-Commerce",
      thumbnail: "/images/header2.jpg",
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
      </main>
    </div>
  );
}

export default Projects1;
