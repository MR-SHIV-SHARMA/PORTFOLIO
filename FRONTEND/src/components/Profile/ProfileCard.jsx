import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import projectIcon1 from "/src/components/Profile/icons8-project-64.png";
import projectIcon2 from "/src/components/Profile/icons8-project-48.png";

function New_ProfileCard() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex flex-col bg-customBlue items-center justify-center sm:min-h-screen px-10 sm:px-16  pt-10 sm:pt-10 lg:mb-0">
            <img
              src="/images/WhatsApp-Image.jpeg"
              alt="Profile Photo"
              className="object-cover mb-4 h-[500px] w-96 sm:h-96 sm:w-64"
            />
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-black mb-2">
                Shiv Prasad Sharma
              </h2>
              {/* <p className="text-gray-900">CEO / Co-Founder</p> */}
              <p className="text-gray-900">Jaipur, Full Stack Developer</p>
            </div>
            <hr className="border-t border-white w-28 my-8" />
          </div>

          <div className="bg-white rounded-lg pl-6 sm:pl-24 flex flex-col items-center justify-between">
            <div className="pt-3 sm:pt-32 relative items-start text-black w-full max-w-4xl justify-center">
              <h3 className="text-4xl font-serif absolute text-gray-800 ml-5 sm:ml-10">
                My Profile
              </h3>
              <div className="space-y-1 mt-5 w-full text-black justify-center">
                <div className="bg-customBeige pl-5 sm:pl-10 pt-10 flex flex-col items-start">
                  <div className="grid grid-cols-1 items-center">
                    <span className="col-span-3 text-left font-sans overflow-hidden">
                      <p className="font-sans text-base antialiased font-medium leading-relaxed">
                        I&apos;m a full-stack web developer and I work remotely
                        from Bharat
                      </p>
                      Hello! I&apos;m Shiv Sharma, a full-stack web developer
                      with a passion for creating dynamic web applications. As
                      CEO and Co-Founder of my startup, I blend technical
                      expertise with entrepreneurial spirit. My skills include
                      JavaScript, React, Node.js, and more. I focus on writing
                      clean, maintainable code and staying updated with industry
                      trends. Based in Bharat, I enjoy remote work, exploring
                      new technologies, contributing to open-source projects,
                      and collaborating with diverse teams globally. My goal is
                      to grow as a developer and leader, contributing to the
                      tech industry and helping others through technology.
                    </span>
                  </div>
                  <div className="flex justify-start gap-3 my-3 flex-wrap overflow-x-auto no-scrollbar">
                    <SocialIcon
                      network="twitter"
                      url="https://twitter.com/Shiv_Sharma_786"
                    />
                    <SocialIcon
                      network="github"
                      url="https://github.com/mrshivsharma"
                    />
                    <SocialIcon
                      network="instagram"
                      url="https://www.instagram.com/mr_shiv_sharma_1/"
                    />
                    <SocialIcon
                      network="linkedin"
                      url="https://www.linkedin.com/in/shiv-prasad-sharma-490b732a1/"
                    />
                    <SocialIcon
                      network="whatsapp"
                      url="https://wa.link/kjykce"
                    />
                    <Link
                      to="https://shiv-vibes.vercel.app"
                      className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                    >
                      <img
                        src={projectIcon1}
                        alt="Project Icon"
                        className="w-10 h-10"
                      />
                      <p className="hidden md:block text-sm">Music</p>
                    </Link>
                    <Link
                      to="https://shivs.vercel.app"
                      className="block font-sans text-5xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                    >
                      <img
                        src={projectIcon2}
                        alt="Project Icon"
                        className="w-10 h-10"
                      />
                      <p className="hidden md:block text-sm">E-commerce</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-gray-900 w-full items-end mt-5 mb-5 sm:mb-10 justify-end">
              <span className="text-lg font-semibold px-6 font-serif flex items-center">
                <hr className="border-t border-black w-28 mr-2" />
                <Link to="https://shiv-vibes.vercel.app">Shiv Vibes</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New_ProfileCard;
