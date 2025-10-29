import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { FiDownloadCloud } from "react-icons/fi";

const projects = [
  {
    name: "Shiv Vibes Platform",
    url: "https://shiv-vibes.vercel.app",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    description:
      "An advanced music education platform with integrated CMS and payment gateway.",
  },
  {
    name: "Shiv Wares E-Commerce",
    url: "https://shivs.vercel.app",
    tech: ["React", "Redux Toolkit", "Tailwind CSS"],
    description: "A scalable e-commerce solution with robust cart management.",
  },
  {
    name: "NextGen Thinkers Blog",
    url: "https://nextgen-thinkers.vercel.app/",
    tech: ["Next.js", "Appwrite", "SSR"],
    description:
      "A modern blogging platform with real-time collaboration features.",
  },
];

const ProfileCard = () => {
  const [fileUrl] = useState("/CV.pdf");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-12">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 flex flex-col items-center bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <img
              src="/images/20250810_2155_Professional Profile Picture_remix_01k2acm1hye4tsjawn0496qrgc.png"
              alt="Shiv Prasad Sharma"
              className="w-64 h-64 object-contain rounded-full border-4 border-gray-700 shadow-xl"
            />
          </motion.div>

          <h2 className="mt-6 text-3xl font-bold text-white">
            Shiv Prasad Sharma
          </h2>
          <p className="mt-2 text-gray-200 text-lg">Full Stack Engineer</p>
          <p className="text-gray-300 uppercase text-sm tracking-widest">
            Jaipur, India
          </p>

          <div className="flex space-x-4 mt-6">
            {[
              {
                network: "github",
                url: "https://github.com/MR-SHIV-SHARMA",
              },
              {
                network: "linkedin",
                url: "https://www.linkedin.com/in/shiv-prasad-sharma-490b732a1/",
              },
              {
                network: "twitter",
                url: "https://x.com/Shiv_Sharma_786",
              },
              {
                network: "facebook",
                url: "https://www.facebook.com/profile.php?id=100073756635769",
              },
            ].map((item, index) => (
              <SocialIcon
                key={index}
                network={item.network}
                url={item.url}
                target="_blank"
                className="hover:scale-110 transition-transform"
                bgColor="transparent"
                fgColor="#fff"
                style={{ height: 36, width: 36 }}
              />
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="w-full mt-8">
            <a
              href={fileUrl}
              download="Shiv_Prasad_Sharma_Resume.pdf"
              className="flex items-center justify-center space-x-2 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl border border-gray-700 transition-all text-white"
            >
              <FiDownloadCloud className="text-white" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-2/3 bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700"
        >
          <h3 className="text-4xl font-bold mb-8 text-white">
            Technical Architect & Engineering Lead
          </h3>

          <p className="text-lg leading-relaxed text-gray-300 font-light">
            Experienced full-stack engineer specializing in building scalable
            web solutions. Currently leading technical strategy at a high-growth
            SaaS startup, managing distributed engineering teams. Passionate
            about modern web technologies and building enterprise-grade
            applications.
          </p>

          <h4 className="text-xl font-semibold mt-8 text-white">Projects</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.map((project) => (
              <motion.a
                whileHover={{ y: -3 }}
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all text-white"
              >
                <h5 className="text-lg font-semibold">{project.name}</h5>
                <p className="text-sm text-gray-300">{project.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;
