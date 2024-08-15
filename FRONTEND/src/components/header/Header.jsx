import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const MenudropdownRef = useRef(null);

  const toggleMenuDropdown = () => {
    setIsMenuDropdownOpen(!isMenuDropdownOpen);
  };

  const handleClickOutsideMenu = (event) => {
    if (
      MenudropdownRef.current &&
      !MenudropdownRef.current.contains(event.target)
    ) {
      setIsMenuDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className="fixed z-10 w-full ">
      <div className="relative w-full bg-gradient-to-r from-white to-pink-50]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            {/* profile */}
            <Link to="/ProfileCard">
              <img
                alt="shiva"
                src="/images/shiva-tilak.png"
                className="relative inline-block object-cover object-center w-12 h-12 rounded-full bg-black cursor-pointer"
                data-popover-target="profile-menu"
              />
            </Link>
            <span className="font-bold text-3xl">SHIV</span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              <li className="rounded-md hover:bg-gray-200 active:bg-gray-900/20 px-3 py-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-amber-800" : "text-gray-700"
                    } border-b border-gray-100 font-bold lg:hover:bg-transparent lg:border-0 hover:text-amber-800 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="rounded-md hover:bg-gray-200 active:bg-gray-900/20 px-3 py-2">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-amber-800" : "text-gray-700"
                    } border-b border-gray-100 font-bold hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-800 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="rounded-md hover:bg-gray-200 active:bg-gray-900/20 px-3 py-2">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-amber-800" : "text-gray-700"
                    } border-b border-gray-100 font-bold hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-800 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="rounded-md hover:bg-gray-200 active:bg-gray-900/20 px-3 py-2">
                <NavLink
                  to="/projets"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-amber-800" : "text-gray-700"
                    } border-b border-gray-100 font-bold hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-800 lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <button className="rounded-md bg-gray-400 hover:bg-gray-200 active:bg-gray-900/20 px-3 py-2">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-amber-800" : "text-gray-700"
                  } border-b border-gray-100 font-bold hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-800 lg:p-0`
                }
              >
                resume
              </NavLink>
            </button>
          </div>
          <div className="lg:hidden">
            <div className="inline-flex items-center space-x-2">
              {/* profile */}
              <span className="relative" ref={MenudropdownRef}>
                <div className="lg:hidden">
                  <button className="rounded-md bg-gray-400 hover:bg-gray-200 active:bg-gray-900/20 mr-2">
                    <NavLink
                      to="/resume"
                      className={({ isActive }) =>
                        `block py-1 pr-4 pl-3 duration-200 ${
                          isActive ? "text-amber-800" : "text-gray-700"
                        } border-b border-gray-100 font-bold hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-800 lg:p-0`
                      }
                    >
                      resume
                    </NavLink>
                  </button>
                  <button 
                    className=" rounded-md py-1 bg-gray-400 relative max-h-[40px] max-w-[40px] select-none text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-200 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-dark="true"
                    data-popover-target="notifications-menu"
                    onClick={toggleMenuDropdown}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 cursor-pointer"
                    >
                      <line x1="4" y1="12" x2="20" y2="12"></line>
                      <line x1="4" y1="6" x2="20" y2="6"></line>
                      <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                  </button>
                </div>
                {isMenuDropdownOpen && (
                  <ul
                    role="menu"
                    data-popover="profile-menu"
                    data-popover-placement="bottom"
                    className="absolute z-10 flex min-w-[120px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                    style={{
                      left: "10%", // Center horizontally
                      transform: "translateX(-73%)", // Center horizontally
                      marginTop: "20px", // Adjust as needed for vertical alignment
                    }}
                  >
                    <div className="flex flex-col p-1">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          `text-sm p-1 font-semibold ${isActive ? "text-amber-800" : "text-gray-700"} hover:text-amber-800`
                        }
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          `text-sm p-1 font-semibold ${isActive ? "text-amber-800" : "text-gray-700"} hover:text-amber-800`
                        }
                      >
                        About
                      </NavLink>
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          `text-sm p-1 font-semibold ${isActive ? "text-amber-800" : "text-gray-700"} hover:text-amber-800`
                        }
                      >
                        Contact
                      </NavLink>
                      <NavLink
                        to="/projets"
                        className={({ isActive }) =>
                          `text-sm p-1 mb-2 font-semibold ${isActive ? "text-amber-800" : "text-gray-700"} hover:text-amber-800`
                        }
                      >
                        Projects
                      </NavLink>
                    </div>
                  </ul>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
