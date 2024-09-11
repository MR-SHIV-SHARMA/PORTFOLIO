import React, { useState } from "react";
import { Link } from "react-router-dom";

function Project({ title, thumbnail, description, link, subtitle }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset after animation duration
  };

  return (
    <article
      className={`border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transition-transform transform ${
        isClicked ? "scale-95 shadow-xl" : "hover:scale-105"
      }`}
      onClick={handleClick}
    >
      <Link to={link}>
        <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
          <img
            src={thumbnail}
            alt={`${title} Thumbnail`}
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold p-4">
            {subtitle}
          </div>
        </div>
      </Link>
      <div className="p-6 bg-white">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}

function Projects1() {
  const projectData = [
    {
      title: "Music Academy",
      subtitle: "Welcome To Shiv-Vibes Web",
      thumbnail: "/images/shiv-vibes-vercel-app-1024x768desktop-4a5928.jpg",
      description:
        "Our music academy enriches music education by offering a versatile learning experience. We prepare students to achieve their musical aspirations through interactive dialogues, extensive music collections, and advanced study materials.",
      link: "https://shiv-vibes.vercel.app",
    },
    {
      title: "E-Commerce",
      subtitle: "Welcome To E-Commerce Web",
      thumbnail: "/images/shivs-vercel-app-1024x768desktop-8e9a22.jpg",
      description:
        "Our e-commerce platform offers a diverse range of top-brand products, ensuring a convenient shopping experience with secure transactions and excellent customer service.",
      link: "https://shivs.vercel.app/",
    },
    // Add more projects as needed
  ];

  return (
    <div className="App">
      <main className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
        <section className="flex flex-wrap justify-center gap-8">
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
