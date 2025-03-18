import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="p-2 2xs:px-[5%] lg:px-[9%] w-full pt-12 bg-black text-white">
      <div className="sm:flex space-y-16 sm:space-y-0 justify-between items-start py-6 mb-10">
        {/* Left Section */}
        <div className="space-y-2 w-full">
          <h1 className="text-2xl sm:text-4xl font-semibold">Don't be shy,</h1>
          <h1 className="text-[28px] sm:text-4xl font-bold">
            Make the first Move.
          </h1>
        </div>

        {/* Centered Section */}
        <div className="w-full">
          <div className="space-y-4 text-start">
            {/* Scrolling Text */}
            <div className="relative overflow-hidden w-[30%] sm:w-[20%] h-8">
              <div
                className="scrolling-text text-sm sm:text-base font-bold underline whitespace-nowrap cursor-default"
                onMouseEnter={(e) => {
                  e.currentTarget.style.animationPlayState = "paused";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animationPlayState = "running";
                }}
              >
                ME ON STALK ME ON STALK ME ON STALK ME ON STALK ME ON STALK ME
                ON STALK ME ON STALK ME ON STALK ME ON STALK ME ON STALK ME ON
                STALK ME ON STALK ME ON STALK ME ON STALK ME ON STALK ME ON
                STALK ME ON STALK ME ON STALK ME ON STALK ME ON STALK ME ON
                STALK ME ON STALK ME ON STALK ME ON STALK ME ON STALK ME ON
                STALK ME ON STALK ME ON STALK ME ON STALK ME ON STALK ME ON
                STALK ME ON STALK ME ON STALK
              </div>
            </div>

            {/* Social Links */}
            <div className="pb-10 flex justify-between items-center">
              <div className="flex flex-col flex-wrap justify-between items-start space-y-4">
                <Link
                  to="https://github.com/MR-SHIV-SHARMA"
                  className="font-bold underline text-lg sm:text-xl hover:text-amber-500 transition-colors duration-1000"
                >
                  Github
                </Link>
                <Link
                  to="https://wa.link/kjykce"
                  className="font-bold underline text-lg sm:text-xl hover:text-amber-500 transition-colors duration-1000"
                >
                  Whatsapp
                </Link>
              </div>
              <div className="flex flex-col flex-wrap justify-between items-start space-y-4">
                <Link
                  to="https://twitter.com/Shiv_Sharma_786"
                  className="font-bold underline text-lg sm:text-xl hover:text-amber-500 transition-colors duration-1000"
                >
                  Twitter
                </Link>
                <Link
                  to="/instagram"
                  className="font-bold underline text-lg sm:text-xl hover:text-amber-500 transition-colors duration-1000"
                >
                  Facebook
                </Link>
              </div>
              <div className="flex flex-col flex-wrap justify-between items-start space-y-4">
                <Link
                  to="https://www.linkedin.com/in/shiv-prasad-sharma-490b732a1/"
                  className="font-bold underline text-lg sm:text-xl hover:text-amber-500 transition-colors duration-1000"
                >
                  LinkedIn
                </Link>
                <Link
                  to="https://www.instagram.com/mr_shiv_sharma_1/"
                  className="font-bold underline text-lg sm:text-xl hover:text-amber-500 transition-colors duration-1000"
                >
                  Instagram
                </Link>
              </div>
            </div>

            {/* Email Section */}
            <h1 className="text-sm sm:text-base font-bold underline">
              START A CONVERSATION
            </h1>
            <a
              href="mailto:shivps7568@gmail.com"
              className="text-lg sm:text-2xl font-bold hover:text-amber-500 transition-colors duration-1000"
              aria-label="Send an email to shivps7568@gmail.com"
            >
              hey shivps7568@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* CSS styles for seamless scrolling */}
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

export default Contact;
