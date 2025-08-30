import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPresenceOpen, setIsPresenceOpen] = useState(false);
  const [isPresenceHoverOpen, setIsPresenceHoverOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsNavOpen(false);
    setIsPresenceOpen(false);
  }, [location.pathname]);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsNavOpen(false);
        setIsPresenceOpen(false);
        setIsPresenceHoverOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const presenceItems = [
    { label: "Plantations", to: "/presence/plantations" },
    { label: "Tea Factory", to: "/presence/tea-factory" },
    { label: "Hardware & Plantation Division", to: "/presence/hardware" },
    { label: "Hospitality", to: "/presence/hospitality" },
    { label: "Education", to: "/presence/education" },
  ];

  const linkBase = "uppercase text-sm tracking-wide transition-colors";

  const activeClass = ({ isActive }) =>
    `${linkBase} ${
      isScrolled
        ? isActive
          ? "text-blue-600"
          : "text-gray-800 hover:text-blue-600"
        : isActive
        ? "text-blue-200"
        : "text-white hover:text-blue-200"
    }`;

  return (
    <nav
      ref={navRef}
      className={`w-full fixed top-0 z-50 font-montserrat transition-colors duration-300 ${
        isScrolled ? "bg-white shadow text-gray-900" : "bg-transparent text-white"
      }`}
    >
      {/* Top bar */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src="/assets/logo/group-icon.png"
                  alt="logo"
                  className="h-8 w-8"
                />
                <span className="sr-only">HOME</span>
              </Link>
            </div>

            {/* Center: Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              <NavLink to="/" className={activeClass}>
                HOME
              </NavLink>

              {/* Our presence (desktop dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => setIsPresenceHoverOpen(true)}
                onMouseLeave={() => setIsPresenceHoverOpen(false)}
              >
                <button
                  type="button"
                  className={`${linkBase} flex items-center ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={isPresenceHoverOpen}
                >
                  <span>OUR PRESENCE</span>
                  <svg className="ml-2 w-3 h-3" fill="none" viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M1 1l4 4 4-4"
                      className={`transition-transform ${
                        isPresenceHoverOpen ? "rotate-180" : ""
                      }`}
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                {isPresenceHoverOpen && (
                  <div className="absolute top-full mt-2 bg-white text-black shadow-lg p-4 z-50 w-64 rounded-lg">
                    <ul className="space-y-1 text-sm uppercase">
                      {presenceItems.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            className="block px-3 py-2 rounded hover:bg-slate-100"
                            onClick={() => setIsPresenceHoverOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <NavLink to="/news" className={activeClass}>
                NEWS
              </NavLink>
            </div>

            {/* Right: Contact (md+ only) */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className={`border px-4 py-2 rounded-full text-sm uppercase transition-colors ${
                  isScrolled
                    ? "text-gray-800 border-gray-800 hover:bg-gray-100"
                    : "text-white border-white hover:bg-white hover:text-blue-950"
                }`}
              >
                CONTACT
              </Link>
            </div>

            {/* Hamburger (mobile) */}
            <button
              className={`p-2 rounded md:hidden ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={() => setIsNavOpen((v) => !v)}
              aria-expanded={isNavOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isNavOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white shadow-sm transition-[max-height,opacity] duration-300 overflow-hidden ${
          isNavOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 space-y-3 text-slate-900 uppercase">
          <Link
            to="/"
            className="block text-lg"
            onClick={() => setIsNavOpen(false)}
          >
            HOME
          </Link>

          {/* Our presence mobile collapsible */}
          <button
            type="button"
            className="w-full flex items-center justify-between text-lg"
            onClick={() => setIsPresenceOpen((v) => !v)}
            aria-expanded={isPresenceOpen}
            aria-controls="presence-submenu"
          >
            <span>OUR PRESENCE</span>
            <svg className="ml-2 w-3 h-3" fill="none" viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
                className={`transition-transform ${
                  isPresenceOpen ? "rotate-180" : ""
                }`}
              />
            </svg>
          </button>

          <ul
            id="presence-submenu"
            className={`pl-4 border-l ml-2 space-y-1 transition-[max-height,opacity,margin] duration-300 overflow-hidden ${
              isPresenceOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            {presenceItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block py-2 text-base hover:underline"
                  onClick={() => {
                    setIsNavOpen(false);
                    setIsPresenceOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/news"
            className="block text-lg"
            onClick={() => setIsNavOpen(false)}
          >
            NEWS
          </Link>

          <Link
            to="/contact"
            className="block text-lg"
            onClick={() => setIsNavOpen(false)}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
