import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Tracks closing animation

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if the page has scrolled
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  const handleMenuToggle = () => {
    if (isOpen) {
      setIsClosing(true); // Start closing animation
      setTimeout(() => {
        setIsClosing(false);
        setIsOpen(false); // Fully close after animation ends
      }, 500); // Match the animation duration
    } else {
      setIsOpen(true); // Open the menu
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full px-2 2xs:px-[5%] lg:px-[9%] transition-colors duration-300 ${
        isScrolled ? "" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between py-1">
        {/* Logo/Title */}
        <div
          className={`flex items-center z-30 text-4xl font-extrabold transition-colors duration-300 ${
            isScrolled && !isOpen ? "text-white" : "text-black"
          }`}
        >
          SHIV
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex flex-grow justify-end">
          <ul className="flex space-x-8">
            {["About", "Resume", "Projects", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  to={`/#${item.toLowerCase()}`}
                  className={`block py-2 px-4 text-lg font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-white hover:text-amber-500"
                      : "text-black hover:text-amber-700"
                  }`}
                >
                  {item}
                </Link>
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 ${
                    isScrolled ? "bg-amber-500" : "bg-amber-700"
                  } transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100`}
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={handleMenuToggle}
            className="relative z-30 py-2 px-4 rounded-md font-semibold transition-transform duration-300"
          >
            {/* Toggle Hamburger Icon / Close Icon */}
            <div
              className={`w-6 h-0.5 bg-black transition-transform duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-1" : "translate-y-0"
              } ${isScrolled && !isOpen ? "bg-white" : "bg-black"}`}
            />
            <div
              className={`w-6 h-0.5 bg-black transition-transform duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1.5"
              } ${isScrolled && !isOpen ? "bg-white" : "bg-black"}`}
            />
          </button>
        </div>
      </div>

      {/* Sliding Overlay Menu */}
      <div
        className={`fixed inset-0 bg-white z-20 transform transition-transform duration-500 ${
          isOpen && !isClosing ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul
          className={`flex flex-col items-center justify-center h-full space-y-8 text-4xl transition-opacity duration-500 ${
            isClosing
              ? "opacity-0 -translate-y-10"
              : "opacity-100 translate-y-0"
          }`}
        >
          {["About", "Resume", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/#${item.toLowerCase()}`}
                onClick={handleMenuToggle}
                className="text-black hover:text-amber-700 transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
          <div className="px-10 w-full">
            <div className="border border-gray-400 w-full" />
          </div>
          <div className="text-center">
            <div className="text-gray-600 text-lg">Start a conversation</div>
            <div className="underline text-gray-900 text-lg font-bold">
              <Link href="mailto:shivps7568@gmail.com">
                hey shivps7568@gmail.com
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
}
