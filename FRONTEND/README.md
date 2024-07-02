# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

profile card
// import { FaBug } from "@react-icons/all-files/fa/FaBug";
// import { FaMicrochip } from "@react-icons/all-files/fa/FaMicrochip";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import { FaCode } from "@react-icons/all-files/fa/FaCode";
// import { FaProjectDiagram } from "@react-icons/all-files/fa/FaProjectDiagram";
{/_ <Link to="#" className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 text-white"><FaProjectDiagram /></Link>
<Link to="#" className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400 text-white"><FaCode /></Link>
<Link to="#" className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white"><FaBug /></Link>
<Link to="#" className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-teal-600 to-teal-400 text-white"><FaMicrochip /></Link>
<Link to="#" className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-gray-600 to-gray-400 text-white"><FaBeer /></Link> _/}



signup
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "@react-icons/all-files/fa/FaHome";

function Signup() {
  const [theme] = useState("dark"); // or "light"

  const themeClass =
    theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900";

  return (
    <div
      className={`flex min-h-screen justify-center items-center ${themeClass}`}
    >
      <div
        className={`w-full sm:w-96 border-gray-900 relative px-4 sm:px-12 items-center justify-center sm:border flex flex-col bg-transparent shadow-none rounded-xl bg-clip-border ${
          theme === "dark" ? "border-gray-900" : ""
        }`}
      >
        <h4 className="block sm:mt-2 font-sans text-2xl font-semibold leading-snug tracking-normal">
          Sign Up
        </h4>
        <p className="block mt-1 font-sans text-base font-normal leading-relaxed">
          Nice to meet you! Enter your details to register.
        </p>
        <form
          className={`max-w-screen-lg sm:p-4 items-center mt-4 mb-2 w-full sm:w-80 sm:max-w-sm ${
            theme === "dark" ? "border-gray-900" : ""
          }`}
        >
          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="name"
              className="font-sans text-base font-semibold leading-relaxed"
            >
              Your Fullname
            </label>
            <input
              id="name"
              placeholder="Enter your full name"
              className="h-11 px-3 py-3 rounded-md border border-gray-700 bg-transparent text-sm text-gray-200 outline-none placeholder-gray-400 focus:border-gray-200 focus:outline-none focus:border-opacity-50 disabled:bg-gray-800"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="name"
              className="font-sans text-base font-semibold leading-relaxed"
            >
              Your Username
            </label>
            <input
              id="name"
              placeholder="Enter your username"
              className="h-11 px-3 py-3 rounded-md border border-gray-700 bg-transparent text-sm text-gray-200 outline-none placeholder-gray-400 focus:border-gray-200 focus:outline-none focus:border-opacity-50 disabled:bg-gray-800"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="email"
              className="font-sans text-base font-semibold leading-relaxed"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-11 px-3 py-3 rounded-md border border-gray-700 bg-transparent text-sm text-gray-200 outline-none placeholder-gray-400 focus:border-gray-200 focus:outline-none focus:border-opacity-50 disabled:bg-gray-800"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="password"
              className="font-sans text-base font-semibold leading-relaxed"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="h-11 px-3 py-3 rounded-md border border-gray-700 bg-transparent text-sm text-gray-200 outline-none placeholder-gray-400 focus:border-gray-200 focus:outline-none focus:border-opacity-50 disabled:bg-gray-800"
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              id="remember"
              className="h-5 w-5 border border-gray-700 rounded cursor-pointer focus:ring-0 focus:border-gray-200 focus:outline-none"
            />
            <label
              htmlFor="remember"
              className="text-sm font-normal leading-normal text-gray-300"
            >
              I agree to the{" "}
              <a href="#" className="font-medium hover:text-gray-200">
                Terms and Conditions
              </a>
            </label>
          </div>
          <button
            className={`w-full h-11 rounded-lg ${
              theme === "dark"
                ? "bg-gray-200 text-gray-900"
                : "bg-gray-900 text-white"
            } shadow-md hover:shadow-lg focus:ring-2 focus:ring-gray-200 focus:outline-none disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed`}
            type="button"
          >
            Sign Up
          </button>
          <p className="flex flex-row mt-4 font-sans text-base font-normal leading-relaxed text-center">
            Already have an account?
            <NavLink
              className={`font-medium mx-2 ${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
              to="/login"
            >
              Sign In
            </NavLink>
            <NavLink className="font-medium mx-2 text-2xl text-blue-500" to="/">
              <FaHome />
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

















contect.jsx
import { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

function Contact() {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
    policy: false,
  });

  const [successMessage, setSuccessMessage] = useState(""); // State to manage the success message

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "policy") {
        console.log("Policy checkbox state:", updatedFormData.policy);
      }

      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/users/register", formData); // Send POST request to backend
      console.log("Contact form submitted:", response.data);
      // Optionally reset form fields or show success message
      setSuccessMessage("Message sent successfully!"); // Show success message
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        message: "",
        policy: false,
      }); // Reset form fields
    } catch (error) {
      console.error("Error submitting contact form:", error);
      // Handle error, show error message, etc.
      setSuccessMessage("Failed to send the message."); // Show error message
    }
  };

  return (
    <>
      <div
        className={`min-h-screen
          text-gray-900"
        `}
      >
        <div className="bg-slate-400 px-6 pb-8 pt-16 sm:pt-20 sm:pb-10 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Contact me
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-700">
              Let&apos;s connect! Ask your questions, give suggestions.
            </p>
          </div>
          <form
            onSubmit={handleSubmit} // Handle form submission
            className="mx-auto mt-4 max-w-xl sm:mt-8"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <select
                      id="country"
                      name="country"
                      className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-1 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    id="phone-number"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    className="block w-full gap-2 rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id="message"
                    placeholder="Write your message..."
                    rows="4"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <input
                    type="checkbox"
                    name="policy"
                    checked={formData.policy}
                    onChange={handleChange}
                    className="ml-2 form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="text-sm leading-6 text-gray-600">
                    By selecting this, you agree to our{" "}
                    <a href="#" className="font-semibold text-indigo-600">
                      privacy policy
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let&apos;s talk
              </button>
            </div>
            {successMessage && (
              <p className="mt-4 text-center text-lg font-medium text-green-600">
                {successMessage}
              </p>
            )}
            <h1 className="mt-10 text-2xl font-bold text-gray-900">
              Connect with me
            </h1>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <ul className="list-none space-y-2">
                <li className="text-lg font-medium text-indigo-600 hover:underline">
                  <a href="#">LinkedIn</a>
                </li>
                <li className="text-lg font-medium text-indigo-600 hover:underline">
                  <a href="#">GitHub</a>
                </li>
              </ul>
              <ul className="list-none space-y-2">
                <li className="text-lg font-medium text-indigo-600 hover:underline">
                  <a href="#">About Me</a>
                </li>
                <li className="text-lg font-medium text-indigo-600 hover:underline">
                  <a href="#">Projects</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;







resume 
Professional Summary:

Self-motivated BCA student and dedicated self-learner with strong proficiency in JavaScript, HTML, CSS, and modern frameworks like Tailwind CSS, ReactJS, and NextJS. Experienced in backend development using NodeJS and database management with MongoDB. Adept at creating responsive and dynamic web applications with a keen eye for detail and a passion for coding and problem-solving.




Professional Experience Summary:

Passionate and detail-oriented BCA student with hands-on experience in full-stack web development. Developed a portfolio website utilizing ReactJS, MongoDB, and JavaScript, showcasing a strong grasp of frontend and backend technologies. Successfully created a comprehensive music academy website using HTML, CSS, Tailwind CSS, ReactJS, NextJS, NodeJS, MongoDB, and TypeScript, demonstrating versatility in modern web development frameworks. Currently engaged in developing a basic e-commerce website, further enhancing skills in creating dynamic and user-friendly web applications.




Skills:

Programming Languages: JavaScript, basic knowledge of TypeScript
Frontend Technologies: HTML, CSS, Tailwind CSS, ReactJS, NextJS
Backend Technologies: NodeJS
Database: MongoDB



Skills:

Programming Languages: JavaScript, basic knowledge of TypeScript
Frontend Technologies: HTML, CSS, Tailwind CSS, ReactJS, NextJS
Backend Technologies: NodeJS, ExpressJS
Database: MongoDB



Based on your recent work and projects, here’s how you can describe your experience, starting with your most recent project:

Title: Junior Web Developer (Self-Employed)
What Was Your Title?

Junior Web Developer (Self-Employed)

Experience Description:
Junior Web Developer (Self-Employed)
Date Range: [Month, Year] – Present

Key Responsibilities and Achievements:

E-Commerce Website Development: Currently working on developing a basic e-commerce website, focusing on creating a user-friendly interface and robust backend functionality.
Portfolio Website Creation: Designed and developed a personal portfolio website using ReactJS, MongoDB, and JavaScript to showcase projects and skills.
Music Academy Website Development: Created a comprehensive music academy website using HTML, CSS, Tailwind CSS, ReactJS, NextJS, NodeJS, MongoDB, and TypeScript, demonstrating skills in both frontend and backend development.
Technologies Used: ReactJS, MongoDB, JavaScript, HTML, CSS, Tailwind CSS, NextJS, NodeJS, TypeScript, ExpressJS
Key Skills Gained:

Full-stack web development experience
Proficiency in modern web development frameworks and libraries
Experience in managing projects from conception to deployment
Additional Tips:

Start with Your Most Recent Experience: Begin with your current project or role.
Be Specific About Your Responsibilities: Highlight what you did and what technologies you used.
Mention Achievements: Include any specific outcomes or skills gained.
Feel free to modify the dates and any specific details based on your actual experiences and the timeline of your projects.


2/2




Given your background as a student and your projects, a suitable title might be:

Full-Stack Web Developer (Freelance)


1/2













// "build": "vite build",


        // target: 'https://shivs-io.vercel.app',
