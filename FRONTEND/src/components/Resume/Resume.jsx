import { useState } from "react";
import { FiDownload } from "react-icons/fi";

function Resume() {
  const [fileUrl] = useState("/CV.pdf");

  return (
    <div className="bg-gray-500 min-h-screen flex flex-col items-center">
      <div className="pt-10"></div>
      <div className="mt-10 w-full flex justify-center">
        <div className="w-full max-w-4xl border-2 border-white">
          <div className="bg-white p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">SHIV PRASAD SHARMA</h1>
              <a
                href={fileUrl}
                download="CV.pdf"
                className="flex items-center bg-gray-300 p-2 rounded-full hover:text-blue-700"
              >
                <FiDownload size={24} />
              </a>
            </div>
            <p>65 Khejri Bujurg</p>
            <p>Jaipur, Rajasthan, 303901</p>
            <p>6377930902</p>
            <p>shivps7568@gmail.com</p>
            <p>
              <a
                href="https://www.linkedin.com/in/shiv-prasad-sharma-490b732a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href="https://shiv-io.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Portfolio
              </a>
            </p>
            <p>
              <a
                href="https://shiv-vibes.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Project
              </a>
            </p>

            <h2 className="text-lg font-semibold mt-4">PROFESSIONAL SUMMARY</h2>
            <p>
              Self-motivated BCA student and dedicated self-learner with strong
              proficiency in JavaScript, HTML, CSS, and modern frameworks like
              Tailwind CSS, ReactJS, and NextJS. Experienced in backend
              development using NodeJS and database management with MongoDB.
              Adept at creating responsive and dynamic web applications with a
              keen eye for detail and a passion for coding and problem-solving.
            </p>

            <h2 className="text-lg font-semibold mt-4">SKILLS</h2>
            <ul className="list-disc list-inside">
              <li>
                Programming Languages: JavaScript, basic knowledge of TypeScript
              </li>
              <li>
                Frontend Technologies: HTML, CSS, Tailwind CSS, ReactJS, NextJS
              </li>
              <li>Backend Technologies: NodeJS, ExpressJS</li>
              <li>Database: MongoDB</li>
            </ul>

            <h2 className="text-lg font-semibold mt-4">
              PROFESSIONAL EXPERIENCE
            </h2>
            <h3 className="text-md font-medium mt-2">
              Full-Stack Web Developer (Freelance)
            </h3>
            <p className="italic">SELF-EMPLOYED/PERSONAL PROJECTS</p>
            <p>Jaipur (Remote) | January 2023 - Current</p>
            <ul className="list-disc list-inside">
              <li>
                Developed a portfolio website utilizing ReactJS, MongoDB, and
                JavaScript, showcasing a strong grasp of frontend and backend
                technologies.
              </li>
              <li>
                Created a comprehensive music academy website using HTML, CSS,
                Tailwind CSS, ReactJS, NextJS, NodeJS, MongoDB, and TypeScript,
                demonstrating versatility in modern web development frameworks.
              </li>
              <li>
                Currently engaged in developing a basic e-commerce website,
                further enhancing skills in creating dynamic and user-friendly
                web applications.
              </li>
            </ul>

            <h2 className="text-lg font-semibold mt-4">EDUCATION</h2>
            <p>
              Bachelor of Computer Applications (BCA) in Computer Science and
              Programming
            </p>
            <p>
              University of Technology, Vatika | Expected Graduation: June 2025
            </p>
            <p>
              Area of Study: Web Development, Database Management Systems,
              Software Engineering, Data Structures, and Algorithms
            </p>
            <p>
              School: Deepshikha Group of Colleges (Regional College),
              University of Technology
            </p>
            <p>Percentage/CGPA/GPA: 60 to 70%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
