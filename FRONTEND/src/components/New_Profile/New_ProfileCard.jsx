import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import projectIcon1 from "/src/components/Profile/icons8-project-64.png";
import projectIcon2 from "/src/components/Profile/icons8-project-48.png";
import projectIcon3 from "/src/components/Profile/icons8-project-50.png";
import projectIcon4 from "/src/components/Profile/icons8-project-80.png";
import projectIcon5 from "/src/components/Profile/icons8-project.gif";

function ProfileCard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center">
      <div className="relative w-40 h-40 md:w-56 md:h-56 mt-4">
        <img
          className="rounded-full object-cover w-full h-full"
          src="/images/1704988810024.jpg"
          alt="profile-picture"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-800">
          SHIV SHARMA
        </h4>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-800">
          CEO / Co-Founder
        </p>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-800">
          I&apos;m a full-stack web developer and I work remotely from Bharat
        </p>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-700">
          Hello! I&apos;m Shiv Sharma, a full-stack web developer with a passion
          for creating dynamic web applications. As CEO and Co-Founder of my
          startup, I blend technical expertise with entrepreneurial spirit. My
          skills include JavaScript, React, Node.js, and more. I focus on
          writing clean, maintainable code and staying updated with industry
          trends. Based in Bharat, I enjoy remote work, exploring new
          technologies, contributing to open-source projects, and collaborating
          with diverse teams globally. My goal is to grow as a developer and
          leader, contributing to the tech industry and helping others through
          technology.
        </p>
      </div>
      <div className="flex justify-center mb-2 text-xs gap-3 sm:gap-6 flex-wrap overflow-x-auto no-scrollbar">
        <SocialIcon
          network="twitter"
          url="https://twitter.com/Shiv_Sharma_786"
        />
        <SocialIcon network="github" url="https://github.com/mrshivsharma" />
        <SocialIcon
          network="instagram"
          url="https://www.instagram.com/mr_shiv_sharma_1/"
        />
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/shiv-prasad-sharma-490b732a1/"
        />
        <SocialIcon network="whatsapp" url="https://wa.link/kjykce" />
      </div>
      <div className="flex justify-center pt-2 text-xs gap-3 sm:gap-6 flex-wrap overflow-x-auto no-scrollbar">
        <Link
          to="https://shiv-vibes.vercel.app"
          className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
        >
          <img src={projectIcon1} alt="Project Icon" className="w-12 h-12" />
          <p className="hidden md:block text-sm">Music</p>
        </Link>
        <Link
          to="#"
          className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
        >
          <img src={projectIcon2} alt="Project Icon" className="w-12 h-12" />
          <p className="hidden md:block text-sm">E-commerce</p>
        </Link>
        {/* <Link
          to="#"
          className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
        >
          <img src={projectIcon3} alt="Project Icon" className="w-12 h-12" />
          <p className="hidden md:block text-sm">Future</p>
        </Link>
        <Link
          to="#"
          className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
        >
          <img src={projectIcon4} alt="Project Icon" className="w-12 h-12" />
          <p className="hidden md:block text-sm">TuneMart</p>
        </Link>
        <Link
          to="#"
          className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
        >
          <img src={projectIcon5} alt="Project Icon" className="w-12 h-12" />
          <p className="hidden md:block text-sm">AudioBay</p>
        </Link> */}
      </div>
      <div className="flex justify-center p-6 pt-2 sm:pt-6  gap-4">
        <button className="p-2 px-12 bg-black rounded-full">
          <Link
            to="/"
            className="block font-sans text-3xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
          >
            <FaHome />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;