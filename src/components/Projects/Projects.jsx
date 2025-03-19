import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ title, thumbnail, description, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start below and invisible
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in position
      viewport={{ once: true, amount: 0 }} // Trigger animation immediately when visible
      transition={{
        duration: 1.5, // Smooth and fast transition
        ease: "easeInOut", // Gradual easing
      }}
    >
      <article className="w-full h-[100vh]">
        <Link to={link}>
          <div className="relative overflow-hidden h-[100vh]">
            <img
              src={thumbnail}
              alt={`${title} Thumbnail`}
              loading="lazy"
              className="w-full h-auto object-cover duration-1000 transform hover:scale-105"
            />
          </div>
        </Link>
      </article>
      <div className="py-3 lg:py-5">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">
          {title}
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function Projects() {
  const projectData = [
    {
      title: "Music Academy",
      thumbnail: "/images/pexels-marleneleppanen-17461673.jpg",
      description: "A platform for creative and comprehensive music education.",
      link: "https://shiv-vibes.vercel.app",
    },
    {
      title: "E-Commerce",
      thumbnail: "/images/pexels_voitkevich_6214450.jpg",
      description:
        "Shop top-quality products with secure payments and support.",
      link: "https://shivs.vercel.app/",
    },
    {
      title: "Blogging Services",
      thumbnail: "/images/pexels_ivan_samkov_4240497.jpg",
      description: "Discover insightful blogs and join a vibrant community.",
      link: "https://nextgen-thinkers.vercel.app/",
    },
    {
      title: "Demo Design",
      thumbnail: "/images/pexels_thgusstavo_2102587.jpg",
      description: "Explore creative and modern design concepts.",
      link: "https://demo-design-sand.vercel.app/",
    },
    {
      title: "Grocery Design",
      thumbnail: "/images/pexels_mateodavilah_13566177.jpg",
      description: "Simplify grocery shopping with a user-friendly platform.",
      link: "https://grocery-web-one.vercel.app/",
    },
  ];

  return (
    <div className="App">
      <main className="p-2 2xs:px-[5%] lg:px-[9%] bg-black">
        <div className="relative overflow-hidden w-[30%] sm:w-[10%] h-8 text-white mt-16">
          <div
            className="scrolling-text text-sm sm:text-base font-bold underline whitespace-nowrap cursor-default"
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            WORK SELECTED WORK SELECTED WORK SELECTED WORK SELECTED WORK
            SELECTED WORK ELECTED STALK WORK SELECTED WORK SELECTED WORK
            SELECTED WORK SELECTED WORK SELECTED ME ON STALK WORK SELECTED WORK
            SELECTED WORK SELECTED WORK SELECTED WORK SELECTED WORK SELECTED
            WORK SELECTED WORK SELECTED WORK SELECTED WORK SELECTED WORK ELECTED
            STALK WORK SELECTED WORK SELECTED WORK SELECTED WORK SELECTED WORK
            SELECTED ME ON STALK WORK SELECTED WORK SELECTED WORK SELECTED WORK
            SELECTED
          </div>
        </div>
        <motion.section
          className="grid grid-cols-1 gap-y-10 2xs:grid-cols-2 2xs:gap-x-[5%] lg:gap-x-[9%] 2xs:gap-y-[2%] mt-[20%] 2xs:mt-[40%] sm:mt-[30%] md:mt-[25%] lg:mt-[20%]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.5, // Small delay to animate in groups
              },
            },
          }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 1.5, // Synchronized animations for pairs
                ease: "easeInOut",
              }}
              className={`relative ${index % 2 === 0 ? "2xs:-top-[18%]" : ""}`}
            >
              <Card
                title={project.title}
                thumbnail={project.thumbnail}
                description={project.description}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.section>
      </main>
      <style jsx>{`
        .scrolling-text {
          display: inline-block;
          animation: scroll-left 10s linear infinite;
          position: absolute;
          white-space: nowrap;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-12%);
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
