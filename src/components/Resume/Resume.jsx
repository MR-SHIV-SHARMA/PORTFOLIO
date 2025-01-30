import { useState } from "react";
import { FiDownload, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Resume() {
  const [fileUrl] = useState("/CV.pdf");
  return (
    <div className="bg-black text-white py-12 px-4 2xs:px-[5%] lg:px-[12%] relative">
      <div className="max-w-7xl mx-auto">
        {/* Scrolling Text */}
        <div className="overflow-hidden mb-8 relative group">
          <div className="flex">
            <div
              className="scrolling-text flex items-center space-x-4 text-xl font-medium uppercase tracking-widest text-gray-400"
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = "paused";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = "running";
              }}
            >
              {[...Array(16)].map((_, i) => (
                <span key={i} className="flex items-center">
                  STAY IN TOUCH
                  <span className="mx-4 text-2xl">•</span>
                </span>
              ))}
            </div>
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
      </div>

      {/* CSS styles for seamless scrolling */}
      <style jsx>{`
        .scrolling-text {
          animation: scroll-left 20s linear infinite;
          white-space: nowrap;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default Resume;