"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isCategoryRoute = [
    "/categories",
    "/about",
    "/contact",
    "/admin",
    "/jobs",
    "/search",
  ].some((route) => pathname.startsWith(route));

  const isProjectsRoute =
    pathname.startsWith("/projects/") && pathname.split("/").length > 2;

  const [navbarClass, setNavbarClass] = useState({
    backgroundColor: isProjectsRoute ? "bg-[#fefdf8]" : "bg-[#fefdf8]",
    padding: isProjectsRoute ? "py-1 md:py-0" : "py-3",
    textColor: isCategoryRoute
      ? isProjectsRoute
        ? "text-[#111010]"
        : "text-black"
      : "text-[#111010]",
    lineBackground: isCategoryRoute ? "bg-black" : "bg-[#111010]",
    logoSrc: isCategoryRoute
      ? isProjectsRoute
        ? "/images/logo.png"
        : "/images/logo2.png"
      : "/images/logo.png",
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null); // <-- NEW

  useEffect(() => {
    const updateNavbarOnScroll = () => {
      if (menuOpen || window.scrollY >= 80) {
        setNavbarClass({
          backgroundColor: "bg-[#fefdf8]",
          padding: "py-1 md:py-0",
          textColor: "text-[#111010]",
          lineBackground: "bg-[#111010]",
          logoSrc: "/images/logo.png",
        });
      } else {
        setNavbarClass({
          backgroundColor: isProjectsRoute ? "bg-[#111010]" : "bg-[#fefdf8]",
          padding: isProjectsRoute ? "py-1 md:py-0" : "py-3",
          textColor: isCategoryRoute
            ? isProjectsRoute
              ? "text-[#111010]"
              : "text-black"
            : "text-[#111010]",
          lineBackground: isCategoryRoute ? "bg-black" : "bg-[#111010]",
          logoSrc: isCategoryRoute
            ? isProjectsRoute
              ? "/images/logo.png"
              : "/images/logo2.png"
            : "/images/logo.png",
        });
      }
    };

    const handleClickOutside = (event) => {
      if (
        !menuRef.current?.contains(event.target) &&
        !searchRef.current?.contains(event.target) &&
        !dropdownRef.current?.contains(event.target) // <-- Check this too
      ) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", updateNavbarOnScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", updateNavbarOnScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, isCategoryRoute, isProjectsRoute]);

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "The Team",
      href: "/team",
    },
    {
      label: "Infrastructure",
      href: "/infrastructure",
    },
    {
      label: "Curriculum",
      href: "/curriculum",
    },
    {
      label: "Result",
      href: "/result",
      hasDropdown: true,
      subItems: ["CBSE Results", "Internal Assessment"],
    },
    {
      label: "Admission",
      href: "/admission",
      hasDropdown: true,
      subItems: ["Apply Now", "Admission Details"],
    },
    {
      label: "Policies",
      href: "/policies",
      hasDropdown: true,
      subItems: ["Code of Conduct", "Privacy Policy", "Terms of Service"],
    },
    {
      label: "Partners",
      href: "/partners",
    },
    {
      label: "Clubs",
      href: "/clubs",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {(menuOpen || dropdownOpen) && (
        <div className="fixed inset-0 backdrop-blur-md z-20 pointer-events-none" />
      )}

      <nav
        className={`${navbarClass.backgroundColor} fixed w-full z-50 top-0 left-0 transition-all duration-300 ${navbarClass.padding}`}
      >
        <div className="max-w-[80vw] flex flex-wrap items-center justify-between mx-auto relative">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4"
          >
            <img
              src={"/logo.png"}
              alt="Logo"
              className="h-17 object-cover top-0"
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((prev) => !prev);
              setDropdownOpen(false);
            }}
            className={`inline-flex items-center z-50 py-2 text-sm ${navbarClass.textColor} rounded-lg md:hidden focus:outline-none`}
          >
            <div className="relative w-6 h-6">
              <svg
                className={`absolute top-0 left-0 w-6 h-6 transition-all ${
                  menuOpen ? "opacity-100" : "opacity-0 -rotate-45"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <svg
                className={`absolute top-0 left-0 w-6 h-6 transition-all ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </button>

          {/* Menu */}
          <div
            ref={menuRef}
            className={`${
              menuOpen ? "fixed top-0 left-0 z-40 animate-slideDown" : "hidden"
            } w-full md:flex md:w-auto md:order-1 transition-all duration-100`}
          >
            <ul
              className={`flex flex-col py-4 pt-[7vh] md:pt-4 rounded-b-xl relative z-30 ${navbarClass.backgroundColor} md:flex-row md:gap-6 md:mt-0 md:text-sm md:font-medium md:bg-transparent`}
            >
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <li
                    key={item.label}
                    className={`group relative text-base font-medium cursor-pointer text-center ${navbarClass.textColor}`}
                  >
                    <div
                      className="relative z-10"
                      onClick={(e) => {
                        e.preventDefault();
                        setDropdownOpen(
                          dropdownOpen === item.label ? false : item.label
                        );
                      }}
                    >
                      {item.label}
                    </div>
                    <span
                      className={`absolute left-0 top-6 bottom-0 w-0 h-[1.4px] ${navbarClass.lineBackground} transition-all duration-300 ease-in-out group-hover:w-full`}
                      aria-hidden="true"
                    ></span>

                    <AnimatePresence>
                      {dropdownOpen === item.label && (
                        <motion.ul
                          ref={dropdownRef}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="absolute md:mt-2 w-full md:w-[230px] z-50 rounded-md shadow-lg bg-[#fefdf8] p-2"
                        >
                          {item.subItems.map((sub) => (
                            <li key={sub}>
                              <Link
                                href={`${item.href}/${sub
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="block px-3 py-1 text-sm text-[#111010] hover:bg-[#ededed] rounded transition-all duration-300"
                                onClick={() => {
                                  setMenuOpen(false);
                                  setDropdownOpen(false);
                                }}
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li
                    key={item.label}
                    className={`group relative text-base font-medium cursor-pointer text-center ${navbarClass.textColor}`}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="relative z-10"
                    >
                      {item.label}
                    </Link>
                    <span
                      className={`absolute left-0 top-6 bottom-0 w-0 h-[1.4px] ${navbarClass.lineBackground} transition-all duration-300 ease-in-out group-hover:w-full`}
                      aria-hidden="true"
                    ></span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
