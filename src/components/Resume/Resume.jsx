import { useState } from "react";
import { FiDownload, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Resume() {
  const [fileUrl] = useState("/CV.pdf");
  return (
    <div className="bg-black text-white py-12 px-4 2xs:px-[5%] lg:px-[12%] relative">
      <div className="relative overflow-hidden w-[30%] sm:w-[10%] h-8 text-white mt-16">
        <div
          className="scrolling-text text-sm sm:text-base font-bold underline whitespace-nowrap cursor-default"
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
        >
          STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH
          STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH
          STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH
          STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH
          STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH
          STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH
          STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH STAY IN TOUCH
        </div>
      </div>
      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Social Links */}
        <div className="flex flex-col space-y-6">
          <a
            href="#"
            className="group flex items-center space-x-4 hover:text-green-400 transition-colors"
          >
            <FaWhatsapp className="w-6 h-6 text-gray-400 group-hover:text-green-400" />
            <span className="text-lg font-medium">WhatsApp</span>
            <span className="ml-2 text-gray-400 group-hover:text-green-400 transition-transform transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#"
            className="group flex items-center space-x-4 hover:text-purple-400 transition-colors"
          >
            <FiInstagram className="w-6 h-6 text-gray-400 group-hover:text-purple-400" />
            <span className="text-lg font-medium">Instagram</span>
            <span className="ml-2 text-gray-400 group-hover:text-purple-400 transition-transform transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#"
            className="group flex items-center space-x-4 hover:text-sky-400 transition-colors"
          >
            <FiTwitter className="w-6 h-6 text-gray-400 group-hover:text-sky-400" />
            <span className="text-lg font-medium">Twitter</span>
            <span className="ml-2 text-gray-400 group-hover:text-sky-400 transition-transform transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Download Button */}
        <a
          href={fileUrl}
          download="CV.pdf"
          className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all group"
        >
          <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
          <span className="font-medium">Download Resume</span>
        </a>
      </div>

      {/* Updated CSS styles */}
      <style jsx>{`
        .scrolling-text {
          display: inline-block;
          animation: scroll-left 10s linear infinite;
          position: absolute;
          white-space: nowrap;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-12%);
          }
        }
      `}</style>
    </div>
  );
}

export default Resume;
