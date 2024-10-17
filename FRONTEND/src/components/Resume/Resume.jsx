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
            <p>
              Full stack developer with frontend and backend expertise, equipped
              with a strong foundation and eager to contribute as a fresher in a
              dynamic environment.
            </p>
            <h2 className="text-lg font-semibold mt-4">TECHNICAL SKILLS</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Programming Languages: JavaScript</li>
              <li>Frontend: JavaScript, ReactJS, Redux, NextJS</li>
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
              Tailwind CSS, ReactJS, NodeJS, Appwrite
              <br />
              <span className="italic font-bold">Overview:</span> Developed
              user-friendly interfaces using React.js and Tailwind CSS for
              responsive design. Integrated Appwrite for backend services
              including authentication and database management.
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
                - Full Stack Development
              </strong>
              <br />
              <span className="italic font-bold">Tech Stack:</span> HTML, CSS,
              Tailwind CSS, ReactJS, NextJS, NodeJS, MongoDB, Redis
              <br />
              <span className="italic font-bold">Overview:</span> Developed a
              fully functional music academy website using Next.js for
              server-side rendering and Tailwind CSS for responsive design.
              Managed backend logic and API routes, ensuring smooth
              communication with Axios.
              <br />
              <span className="italic font-bold">Database:</span> Utilized
              MongoDB with Mongoose for structured data handling and Redis for
              caching and real-time processing.
              <br />
              <span className="italic font-bold">Authentication:</span>{" "}
              Implemented JWT for secure user sessions integrated with Next.js
              for authentication.
              <br />
              <span className="italic font-bold">User Experience:</span>{" "}
              Enhanced user interaction with React Toastify for real-time
              notifications and feedback.
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
              Tailwind CSS, Vite, ReactJS, Redux
              <br />
              <span className="italic font-bold">Overview:</span> Developed a
              responsive and intuitive UI with features like product browsing
              and filtering using Vite and Tailwind CSS.
              <br />
              <span className="italic font-bold">State Management:</span>{" "}
              Utilized Redux for efficient global state management and seamless
              user experience.
              <br />
              <span className="italic font-bold">Performance:</span> Optimized
              build processes and enhanced performance through lazy loading
              techniques.
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
              Passionate about personal projects and coding challenges to
              improve technical skills and problem-solving abilities. Actively
              exploring emerging technologies and their applications in full
              stack development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
