import React, { useState } from "react";
import { Link } from "react-router-dom";

function Project({ title, thumbnail, description, link, subtitle }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <article
      className={`border border-gray-300 rounded-lg overflow-hidden shadow-lg w-full transition-transform transform ${
        isClicked ? "scale-95 shadow-xl" : ""
      }`}
      onClick={handleClick}
    >
      <Link to={link}>
        <div className="relative overflow-hidden h-60 sm:h-68 md:h-76 lg:h-[460px]">
          <img
            src={thumbnail}
            alt={`${title} Thumbnail`}
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black flex items-center justify-center text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-extrabold p-2">
            {subtitle}
          </div>
        </div>
      </Link>
      <div className="p-3 md:p-3 lg:p-4 xl:p-5 bg-white">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
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
    {
      title: "Blogging Services",
      subtitle: "Welcome to NextGen Thinkers",
      thumbnail: "/images/Screenshot (150).png",
      description:
        "Our blogging platform, NextGen Thinkers, provides insightful articles on various topics, fostering a community of curious minds. We ensure a user-friendly experience, encouraging engagement and discussion among our readers.",
      link: "https://nextgen-thinkers.vercel.app/",
    },
    // Add more projects as needed
  ];

  return (
    <div className="App">
      <main className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
        <section className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
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
