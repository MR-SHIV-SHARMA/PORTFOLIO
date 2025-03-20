import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Scroll Effect Optimization
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-4 sm:px-10 lg:px-16 transition-all duration-300 ${
        isScrolled ? "" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between py-1">
        {/* ✅ Logo */}
        <div
          className={`text-3xl font-extrabold ${isScrolled ? "text-white" : "text-black"}`}
        >
          SHIV
        </div>

        {/* ✅ Desktop Navigation */}
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
                  className={`absolute inset-x-0 bottom-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isScrolled ? "bg-amber-500" : "bg-amber-700"
                  }`}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* ✅ Mobile Menu Button (FIX: Scroll पर White होगा) */}
        <button
          onClick={handleMenuToggle}
          className="sm:hidden flex flex-col space-y-1 z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-7 h-0.5 transition-transform duration-300 ${
              isOpen
                ? "rotate-45 translate-y-2 bg-white"
                : isScrolled
                  ? "bg-white"
                  : "bg-black"
            }`}
          />
          <span
            className={`block w-7 h-0.5 transition-transform duration-300 ${
              isOpen
                ? "-rotate-45 -translate-y-2 bg-white"
                : isScrolled
                  ? "bg-white"
                  : "bg-black"
            }`}
          />
        </button>
      </div>

      {/* ✅ Mobile Navigation (पहले जैसा: Top से Slide होगा) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 transform transition-transform duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-3xl text-white">
          {["About", "Resume", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/#${item.toLowerCase()}`}
                onClick={handleMenuToggle}
                className="hover:text-amber-500"
              >
                {item}
              </Link>
            </li>
          ))}
          <div className="border-t border-gray-500 w-4/5 mt-4" />
          <div className="text-lg text-gray-300">Start a conversation</div>
          <div className="text-center">
            <div className="underline text-white text-lg font-bold">
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
