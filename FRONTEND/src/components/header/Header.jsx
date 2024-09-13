import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-10 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <img
            alt="shiva"
            src="/images/shiva-tilak.png"
            className="w-12 h-12 rounded-full bg-black object-cover"
          />
          <span className="text-4xl font-extrabold text-gray-800">SHIV</span>
        </div>
        <nav className="hidden lg:flex flex-grow items-center">
          <ul className="flex space-x-8">
            {["Home", "About", "Contact", "Projects"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  to={`/#${item.toLowerCase()}`}
                  className="block py-2 px-4 text-lg font-medium transition-colors duration-300 text-gray-700 hover:text-amber-700"
                >
                  {item}
                </Link>
                <span
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-700 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center">
          <Link
            to="/#resume"
            className="py-2 px-4 bg-gray-800 text-white rounded-md font-semibold transition-colors duration-300 hover:bg-gray-600"
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
