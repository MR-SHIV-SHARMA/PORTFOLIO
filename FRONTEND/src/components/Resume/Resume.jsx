import { useState } from "react";
import { FiDownload } from "react-icons/fi";

function Resume() {
  const [fileUrl] = useState("/CV.pdf");

  return (
    <div className="bg-gray-500 min-h-screen flex flex-col items-center">
      <div className="mt-4 w-full mb-4 sm:px-4 flex justify-center">
        <div className="w-full max-w-8xl border-2 border-white">
          <div className="bg-white p-2 sm:p-6">
            <div className="text-4xl font-bold text-center">Resume</div>
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
            <div className="flex flex-col sm:flex-row gap-2">
              <p>+91 6377930902 </p>
              <p className="hidden sm:block">|</p>
              <p>
                <a
                  href="https://github.com/MR-SHIV-SHARMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Github
                </a>
              </p>
              <p className="hidden sm:block">|</p>
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
              <p className="hidden sm:block">|</p>
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
              <p className="hidden sm:block">|</p>
              <p>
                <a
                  href="https://x.com/Shiv_Sharma_786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Twitter
                </a>
              </p>
            </div>
            <p className="">shivps7568@gmail.com</p>

            <h2 className="text-lg font-semibold mt-4">PROFESSIONAL SUMMARY</h2>
            <p className="mt-2">
              Full stack developer with frontend and backend expertise, equipped
              with a strong foundation and eager to contribute as a fresher.
            </p>
            <h2 className="text-lg font-semibold mt-4">TECHNICAL SKILLS</h2>
            <ul className="list-disc list-inside mt-2">
              <li>
                Programming Languages: JavaScript, basic knowledge of TypeScript
              </li>
              <li>
                Frontend: JavaScript, ReactJS, Redux, NextJS, basic knowledge of
                TypeScript
              </li>
              <li>Backend: NodeJS, ExpressJS</li>
              <li>Database: MongoDB, Redis</li>
            </ul>
            <h2 className="text-lg font-semibold mt-4">PROJECTS</h2>
            <p className="mt-2">
              <strong>
                <a
                  href="https://nextgen-thinkers.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  NextGen Thinkers (Blogging)
                </a>
                - Frontend and Backend Development
              </strong>
              <br />
              <span className="italic font-bold">Tech Stack:</span> HTML, CSS,
              Tailwind CSS, ReactJS, NodeJS, Appwrite, React-redux
              <br />
              <span className="italic font-bold">Frontend:</span> Next.js for
              server-side rendering and logic, Tailwind CSS for responsive
              design, and React Hooks for state management.
              <br />
              <span className="italic font-bold">Backend:</span> Appwrite
            </p>
            <p className="mt-2">
              <strong>
                <a
                  href="https://shiv-vibes.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Music Academy Website
                </a>
                - Frontend and Backend Development
              </strong>
              <br />
              <span className="italic font-bold">Tech Stack:</span> HTML, CSS,
              Tailwind CSS, ReactJS, NextJS, NodeJS, MongoDB, Redis
              <br />
              <span className="italic font-bold">Frontend:</span> Next.js for
              server-side rendering and logic, Tailwind CSS for responsive
              design, and React Hooks for state management.
              <br />
              <span className="italic font-bold">Backend:</span> Next.js manages
              backend logic and API routes, Axios ensures smooth
              frontend-backend communication for HTTP requests.
              <br />
              <span className="italic font-bold">Database:</span> MongoDB with
              Mongoose for structured schema and efficient data handling, Redis
              for caching and real-time data processing.
              <br />
              <span className="italic font-bold">Authentication:</span> JWT for
              secure user sessions and permissions, integrated with Next.js for
              authentication and authorization.
              <br />
              <span className="italic font-bold">Features:</span> React Toastify
              for customizable notifications, enhancing user interaction with
              real-time feedback and alerts.
            </p>
            <p className="mt-2">
              <strong>
                <a
                  href="https://shivs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Clothing E-Commerce Website
                </a>
                - Frontend Development
              </strong>
              <br />
              <span className="italic font-bold">Tech Stack:</span> HTML, CSS,
              Tailwind CSS, Vite, ReactJS, Redux, Redux Toolkit
              <br />
              <span className="italic font-bold">Frontend:</span> Built using
              Vite for fast development and optimized builds, ReactJS for a
              dynamic, component-based architecture, and Tailwind CSS for a
              responsive, modern design.
              <br />
              <span className="italic font-bold">User Interface:</span> Designed
              an intuitive UI with features like product browsing, filtering,
              and search functionality to enhance user experience.
              <br />
              <span className="italic font-bold">State Management:</span>{" "}
              Implemented Redux and Redux Toolkit for efficient global state
              management, ensuring consistent data flow and scalability across
              the application.
              <br />
              <span className="italic font-bold">Responsive Design:</span> Used
              Tailwind CSS to create a mobile-first, fully responsive design
              that adapts to various devices.
              <br />
              <span className="italic font-bold">Performance:</span> Leveraged
              Vite’s fast build and hot-reloading for optimized development,
              along with lazy loading techniques for images and components to
              enhance performance.
            </p>
            <h2 className="text-lg font-semibold mt-4">EDUCATION</h2>
            <p className="mt-2">
              University of Technology, Vatika | Bachelor of Computer
              Applications | Expected Graduation: June 2025
            </p>
            <h2 className="text-lg font-semibold mt-4">
              ADDITIONAL INFORMATION
            </h2>
            <p className="mt-2">
              Actively engage in personal projects and coding challenges to
              expand technical proficiency and problem-solving skills.
              Enthusiastic learner with a strong interest in exploring emerging
              technologies and their applications in software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
