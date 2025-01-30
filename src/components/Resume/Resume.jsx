import { useState } from "react";
import { FiDownload, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Resume() {
  const [fileUrl] = useState("/CV.pdf");
  return (
    <div className="bg-black text-white py-12 px-4 2xs:px-[5%] lg:px-[12%] relative overflow-hidden">
      {/* Animated Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-border" />
      
      {/* Scrolling Text Section */}
      <div className="relative overflow-hidden mb-16 group">
        <div className="flex">
          <div
            className="scrolling-text flex items-center space-x-8 text-2xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            {[...Array(8)].map((_, i) => (
              <span key={i} className="flex items-center">
                <span className="animate-pulse">✦</span>
                <span className="mx-4">STAY IN TOUCH</span>
                <span className="w-4 h-4 bg-purple-400 rounded-full animate-ping" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Social Links with Hover Effects */}
        <div className="grid grid-cols-1 gap-8 w-full max-w-md">
          <a
            href="#"
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:from-green-900/50 hover:to-green-900/20 transition-all duration-300 shadow-xl hover:shadow-green-500/20"
          >
            <div className="flex items-center space-x-6">
              <FaWhatsapp className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <h3 className="text-xl font-bold">WhatsApp</h3>
                <p className="text-gray-400 group-hover:text-green-200">Direct Message</p>
              </div>
              <div className="text-2xl group-hover:translate-x-3 transition-transform">
                →
              </div>
            </div>
          </a>

          <a
            href="#"
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:from-purple-900/50 hover:to-purple-900/20 transition-all duration-300 shadow-xl hover:shadow-purple-500/20"
          >
            <div className="flex items-center space-x-6">
              <FiInstagram className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <h3 className="text-xl font-bold">Instagram</h3>
                <p className="text-gray-400 group-hover:text-purple-200">Follow Updates</p>
              </div>
              <div className="text-2xl group-hover:translate-x-3 transition-transform">
                →
              </div>
            </div>
          </a>

          <a
            href="#"
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:from-blue-900/50 hover:to-blue-900/20 transition-all duration-300 shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center space-x-6">
              <FiTwitter className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <h3 className="text-xl font-bold">Twitter</h3>
                <p className="text-gray-400 group-hover:text-blue-200">Latest Thoughts</p>
              </div>
              <div className="text-2xl group-hover:translate-x-3 transition-transform">
                →
              </div>
            </div>
          </a>
        </div>

        {/* Download Card */}
        <div className="relative w-full max-w-md group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
          <a
            href={fileUrl}
            download="CV.pdf"
            className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 relative">
                <FiDownload className="w-12 h-12 text-blue-400 mb-4 animate-float" />
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-10 blur-xl" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Download Resume</h2>
              <p className="text-gray-400 mb-6">PDF Format • Updated Recently</p>
              <div className="px-6 py-2 bg-blue-500/20 rounded-full text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                Click to Download
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .scrolling-text {
          animation: scroll-left 20s linear infinite;
          white-space: nowrap;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-border {
          animation: border-flow 3s linear infinite;
        }

        @keyframes border-flow {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export default Resume;