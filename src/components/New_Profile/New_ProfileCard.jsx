import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { FiDownloadCloud } from "react-icons/fi";

const skills = [
  { name: "JavaScript", level: 92 },
  { name: "React & Ecosystem", level: 89 },
  { name: "Node.js & Express", level: 88 },
  { name: "MongoDB", level: 85 },
  { name: "Next.js Framework", level: 87 },
];

const projects = [
  {
    name: "Shiv Vibes Platform",
    url: "https://shiv-vibes.vercel.app",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    description:
      "An advanced music education platform with integrated CMS and payment gateway.",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Shiv Wares E-Commerce",
    url: "https://shivs.vercel.app",
    tech: ["React", "Redux Toolkit", "Tailwind CSS"],
    description: "A scalable e-commerce solution with robust cart management.",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "NextGen Thinkers Blog",
    url: "https://nextgen-thinkers.vercel.app/",
    tech: ["Next.js", "Appwrite", "SSR"],
    description:
      "A modern blogging platform with real-time collaboration features.",
    color: "from-green-500 to-green-700",
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
          className="w-full lg:w-1/3 flex flex-col items-center bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full animate-pulse" />
            <img
              src="/images/WhatsApp-Image.jpeg"
              alt="Shiv Prasad Sharma"
              className="w-64 h-64 object-cover rounded-full border-4 border-gray-700 shadow-xl"
            />
          </motion.div>

          <h2 className="mt-6 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text">
            Shiv Prasad Sharma
          </h2>
          <p className="mt-2 text-gray-300 text-lg">Full Stack Engineer</p>
          <p className="text-gray-400 uppercase text-sm tracking-widest">
            Jaipur, India
          </p>

          <div className="flex space-x-4 mt-6">
            {[
              { network: "github", url: "https://github.com/MR-SHIV-SHARMA" },
              {
                network: "linkedin",
                url: "https://linkedin.com/in/shiv-prasad-sharma",
              },
              {
                network: "twitter",
                url: "https://twitter.com/Shiv_Sharma_786",
              },
            ].map((social) => (
              <SocialIcon
                key={social.network}
                network={social.network}
                url={social.url}
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
              download="Shiv_Sharma_CV.pdf"
              className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl border border-gray-700 transition-all"
            >
              <FiDownloadCloud className="text-cyan-300" />
              <span className="text-cyan-100 font-medium">Download CV</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-2/3 bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700"
        >
          <h3 className="text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text">
            Technical Architect & Engineering Lead
          </h3>

          <p className="text-lg leading-relaxed text-gray-300 font-light">
            Experienced full-stack engineer specializing in building scalable
            web solutions. Currently leading technical strategy at a high-growth
            SaaS startup, managing distributed engineering teams. Passionate
            about modern web technologies and building enterprise-grade
            applications.
          </p>

          <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/30 mt-6">
            <h4 className="text-xl font-semibold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text">
              Core Skills
            </h4>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm text-cyan-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h4 className="text-xl font-semibold mt-8 text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text">
            Projects
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.map((project) => (
              <motion.a
                whileHover={{ y: -3 }}
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-cyan-500 transition-all"
              >
                <h5 className="text-lg font-semibold text-cyan-100">
                  {project.name}
                </h5>
                <p className="text-sm text-gray-400">{project.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;
