import { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { FiDownloadCloud } from "react-icons/fi";

const skills = [
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Node.js", level: 88 },
  { name: "MongoDB", level: 80 },
];

const projects = [
  {
    name: "Shiv Vibes",
    url: "https://shiv-vibes.vercel.app",
    tech: ["Nextjs", "Tailwind", "Node.js", "MongoDB"],
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Shiv Wares",
    url: "https://shivs.vercel.app",
    tech: ["React", "Javascript", "Tailwind"],
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "NextGen Thinkers",
    url: "https://nextgen-thinkers.vercel.app/",
    tech: ["React", "Javascript"],
    color: "from-green-500 to-green-700",
  },
];

const ProfileCard = () => {
  const [fileUrl] = useState("/CV.pdf");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 flex flex-col items-center bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <img
              src="/images/WhatsApp-Image.jpeg"
              alt="Shiv Prasad Sharma"
              className="w-64 h-64 object-cover rounded-full border-4 border-blue-500/80 shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse" />
          </motion.div>

          <h2 className="mt-6 text-4xl font-bold font-serif text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Shiv Prasad Sharma
          </h2>
          <p className="mt-2 text-gray-300 text-lg">Full Stack Developer</p>
          <p className="text-gray-400">Jaipur, Bharat</p>

          <div className="flex space-x-4 mt-6">
            <SocialIcon
              network="github"
              url="https://github.com/mrshivsharma"
              className="hover:scale-125 transition-transform duration-300"
              bgColor="transparent"
              fgColor="#fff"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              network="linkedin"
              url="https://linkedin.com/in/shiv-prasad-sharma"
              className="hover:scale-125 transition-transform duration-300"
              bgColor="transparent"
              fgColor="#fff"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              network="twitter"
              url="https://twitter.com/Shiv_Sharma_786"
              className="hover:scale-125 transition-transform duration-300"
              bgColor="transparent"
              fgColor="#fff"
              style={{ height: 40, width: 40 }}
            />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} className="w-full mt-8">
            <a
              href={fileUrl}
              download="Resume.pdf"
              className="flex items-center justify-center space-x-2 w-full py-3 bg-blue-600/30 hover:bg-blue-600/50 rounded-xl border border-blue-500/50 transition-all"
            >
              <FiDownloadCloud className="text-blue-400" />
              <span className="text-blue-200">Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-2/3 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700"
        >
          <div className="relative">
            <h3 className="text-5xl font-serif mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              About Me
            </h3>

            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-gray-300">
                As a passionate full-stack developer and CEO/Co-Founder of a
                tech startup, I combine technical expertise with entrepreneurial
                vision to create impactful digital solutions. With 5+ years of
                experience, I've led teams in delivering 50+ projects with a 98%
                client satisfaction rate.
              </p>

              <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/30">
                <h4 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Technical Expertise
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm text-blue-300">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-600 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Featured Projects
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <motion.div
                      whileHover={{ y: -5 }}
                      key={project.name}
                      className="group relative bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-blue-500/50 transition-all"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity`}
                      />
                      <Link
                        to={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h5 className="text-xl font-semibold mb-2">
                          {project.name}
                        </h5>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm bg-gray-600/30 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;
