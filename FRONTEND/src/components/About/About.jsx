import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-600">
      <main className="flex-grow p-4 mt-16">
        <section className="text-center max-w-4xl mx-auto">
          <img
            src="/public/1704988810024.jpg"
            alt="Your Photo"
            className="profile-photo mx-auto rounded-full w-32 h-32 sm:w-48 sm:h-48 object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-white">
            Shiv Prasad Sharma
          </h2>
          <p className="text-lg leading-relaxed text-white">
            Hello! I&apos;m Shiv Prasad Sharma, a passionate programmer
            specializing in web development. My career aspiration is to elevate
            my skills and knowledge to become a trailblazer in the technology
            industry. With a strong commitment to excellence, I thrive on
            delivering innovative solutions that make a positive impact. I
            aspire to leverage my expertise to drive meaningful change,
            particularly in education and literacy initiatives. Continual
            learning and growth are paramount to my career journey as I strive
            towards achieving my professional goals.
          </p>
        </section>

        <div className="sm:p-5">
          <div className="mb-9 mt-5 text-white text-center text-3xl font-bold">
            <h1 className="mb-3">Skills</h1>
            <h2 className="mb-3">
              ReactJS, Tailwind CSS, JavaScript, HTML, CSS, Next.js, Node.js,
              Express.js, MongoDB, TypeScript
            </h2>
          </div>

          <section className="mb-9 text-white">
            <h3 className="text-xl font-bold mb-3">Projects</h3>
            <ul className="p-0 list-none">
              <li className="mb-5">
                <h4 className="text-xl font-bold">Portfolio Website</h4>
                <p className="py-1">
                  <strong>Description:</strong> Developed a responsive portfolio
                  website showcasing projects and skills.
                </p>
                <p>
                  <strong>Technologies Used:</strong> ReactJS, Tailwind CSS,
                  JavaScript, MongoDB
                </p>
              </li>
              <li className="mb-5">
                <h4 className="text-xl font-bold">Music Academy Website</h4>
                <p className="py-1">
                  <strong>Description:</strong> Designed and built a dynamic
                  music academy website with a focus on usability and aesthetic
                  appeal.
                </p>
                <p>
                  <strong>Technologies Used:</strong> HTML, CSS, Tailwind CSS,
                  ReactJS, NextJS, MongoDB, TypeScript
                </p>
                {/* Add project link here */}
              </li>
              <li className="mb-5">
                <h4 className="text-xl font-bold">
                  E-Commerce Website (In Progress)
                </h4>
                <p className="py-1">
                  <strong>Description:</strong> Currently developing a
                  user-friendly e-commerce platform with robust backend
                  functionalities.
                </p>
                <p>
                  <strong>Technologies Used:</strong> ReactJS, NodeJS,
                  ExpressJS, MongoDB
                </p>
                {/* Add project link here */}
              </li>
            </ul>
          </section>

          <section className="mb-9 text-white">
            <h3 className="text-xl font-bold">Skills Highlight</h3>
            <div className="p-0">
              <h4 className="text-xl font-bold py-3">ReactJS</h4>
              <ul className="pl-5">
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Developed interactive user interfaces using React components.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Implemented state management with hooks and context API.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Integrated RESTful APIs for data fetching and updating.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Optimized performance by implementing virtual DOM and
                  component lifecycle methods.
                </li>
              </ul>
              <h4 className="text-xl font-bold py-3">Tailwind CSS</h4>
              <ul className="pl-5">
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Designed responsive layouts with utility-first approach.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Customized designs with Tailwind CSS classes.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Ensured cross-browser compatibility and mobile responsiveness.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Utilized Tailwind CSS plugins for enhanced functionality.
                </li>
              </ul>
              <h4 className="text-xl font-bold py-3">JavaScript</h4>
              <ul className="pl-5">
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Proficient in ES6+ syntax and features.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Experience with asynchronous programming and promises.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Implemented event handling and DOM manipulation.
                </li>
              </ul>
              <h4 className="text-xl font-bold py-3">HTML & CSS</h4>
              <ul className="pl-5">
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Strong understanding of semantic HTML5 markup.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Created responsive designs with CSS Grid and Flexbox.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Styled web pages using CSS preprocessors like Sass.
                </li>
              </ul>
              <h4 className="text-xl font-bold py-3">Next.js</h4>
              <ul className="pl-5">
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Built server-side rendered React applications.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Implemented routing and data fetching with Next.js APIs.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Deployed applications with Next.js serverless functions.
                </li>
              </ul>
              <h4 className="text-xl font-bold py-3">Node.js & Express.js</h4>
              <ul className="pl-5">
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Developed RESTful APIs and backend services with Node.js.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Used Express.js for building lightweight and scalable web
                  applications.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Integrated middleware for authentication and data validation.
                </li>
              </ul>
              <h4 className="text-xl font-bold py-3">MongoDB</h4>
              <ul className="pl-5">
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Designed schemas and performed CRUD operations in MongoDB.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Implemented indexing and aggregation pipelines for efficient
                  data querying.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Managed database connections and transactions.
                </li>
              </ul>
              <h4 className="text-xl font-bold py-3">TypeScript</h4>
              <ul className="pl-5">
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Basic knowledge of TypeScript syntax and type system.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Converted JavaScript projects to TypeScript for enhanced type
                  safety.
                </li>
                <li>
                  <span className="inline-block h-3 w-3 mr-2 bg-gray-900 rounded-full"></span>
                  Integrated TypeScript with React and Node.js applications.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-9 text-white">
            <h3 className="mb-3 font-bold text-xl">Contact Me</h3>
            <ul>
              <li className="m-0 p-0 list-none">
                Email:{" "}
                <a
                  href="shivps7568@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  shivps7568@gmail.com
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/shiv-prasad-sharma-490b732a1/"
                  className="text-blue-500 hover:underline"
                >
                  shiv-prasad-sharma
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/MR-SHIV-SHARMA"
                  className="text-blue-500 hover:underline"
                >
                  MR-SHIV-SHARMA
                </a>
              </li>
            </ul>
          </section>

          <div className="flex justify-center mt-4">
            <button className="bg-gray-800 text-white py-4 px-6 rounded">
              <nav>
                <a
                  href="https://shiv-vibes.vercel.app"
                  className="text-blue-500 hover:underline mx-2"
                >
                  Projects
                </a>
                |
                <Link
                  to="/Contact"
                  className="text-blue-500 hover:underline mx-2"
                >
                  Contact Me
                </Link>
              </nav>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
