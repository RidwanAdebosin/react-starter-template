import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BurgerMenu, CloseMenu } from "../assets/(icons)/icons";
import cn from "../lib/utils/cn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyApp
        </Link>

        <div className=" flex items-center overflow-x-hidden">
          <div>
            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {!isMenuOpen ? (
                <BurgerMenu className={cn("text-blue-600 w-10 h-10")} />
              ) : (
                <CloseMenu className={cn("text-blue-600 w-10 h-10")} />
              )}
            </button>
          </div>

          <nav
            className={cn(
              "flex gap-5 max-md:absolute max-md:top-[4.5rem] max-md:flex-col max-md:items-end max-md:w-full max-md:h-[calc(100dvh-4.5rem)] max-md:left-0 max-md:bg-white max-md:shadow-lg max-md:rounded-lg max-md:p-4 transition-all duration-300 ease-in-out",
              isMenuOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full",
            )}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold px-2"
                  : "text-gray-700 hover:text-blue-600 px-2"
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold px-2"
                  : "text-gray-700 hover:text-blue-600 px-2"
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
