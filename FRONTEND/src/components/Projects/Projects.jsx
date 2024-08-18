import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Project({ title, thumbnail, description, link, subtitle }) {
  return (
    <article className="border border-gray-300 p-4 mt-4 sm:m-4 w-full md:w-1/1 lg:w-1/1 ">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <Link to={link}>
        <div className="relative isolate overflow-hidden h-72 lg:h-[453px] mb-2">
          <img
            src={thumbnail}
            alt={`${title} Thumbnail`}
            className="w-full h-72 lg:h-[453px] mb-2 absolute inset-0 -z-10"
          />
          <p className="text-white text-3xl font-extrabold p-5 flex justify-center w-full h-72 lg:h-[453px] items-center font-serif ">
            {subtitle}
          </p>
          <div className="absolute inset-0 -z-10 bg-black opacity-25"></div>
        </div>
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
  subtitle: PropTypes.string.isRequired,
};

function Projects1() {
  const projectData = [
    {
      title: "Music accedmy",
      subtitle: "WelCome To Shiv-Vibes Web",
      thumbnail: "/images/shiv-vibes-vercel-app-1024x768desktop-4a5928.jpg",
      description:
        "Our music academy enriches music education by offering a versatile learning experience. We prepare students to achieve their musical aspirations through interactive dialogues, extensive music collections, and advanced study materials.",
      link: "https://shiv-vibes.vercel.app",
    },
    {
      title: "E-Commerce",
      subtitle: "WelCome To E-Commerce Web",
      thumbnail: "/images/shivs-vercel-app-1024x768desktop-8e9a22.jpg",
      description:
        "Our e-commerce platform offers a diverse range of top-brand products, ensuring a convenient shopping experience with secure transactions and excellent customer service.",
      link: "https://shivs.vercel.app/",
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
              subtitle={project.subtitle}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Projects1;
