import { useState } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { navItems } from "./navbar-data";
const Navbar = () => {
  const [openMenuId, setOpenMenuId] = useState(null); // State to track open menu
  const [openSubMenuId, setOpenSubMenuId] = useState(null); // State for nested submenu

  const handleMenuToggle = (menuId) => {
    setOpenMenuId((prev) => (prev === menuId ? null : menuId));
  };

  const handleSubMenuToggle = (subMenuId) => {
    setOpenSubMenuId((prev) => (prev === subMenuId ? null : subMenuId));
  };

  const renderSubNav = (subNavItems, parentId = null) => {
    return (
      <ul className="space-y-2 ml-4">
        {subNavItems.map((subItem) => (
          <li
            key={subItem.id}
            className="relative group"
            onMouseEnter={() => handleSubMenuToggle(subItem.id)}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            {/* Submenu Link */}
            <LinkScroll
              to={subItem.link}
              smooth
              duration={500}
              className="block px-4 py-2 text-sm text-gray-600 hover:text-primary cursor-pointer"
            >
              {subItem.name}
            </LinkScroll>

            {/* Nested Submenu */}
            {subItem.sub_nav && openSubMenuId === subItem.id && (
              <div className="absolute left-full top-0 bg-white shadow-md rounded-md">
                {renderSubNav(subItem.sub_nav, subItem.id)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="relative z-10 w-full text-neutral-800 bg-gray-100 shadow-md">
      <div className="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="text-xl font-bold">LOGO</a>
          </Link>
          {/* Mobile Menu Toggle */}
          <button
            className="rounded-lg lg:hidden focus:outline-none"
            onClick={() => setOpenMenuId((prev) => (prev === "main" ? null : "main"))}
          >
            {openMenuId === "main" ? (
              <i className="ri-close-circle-line ri-xl text-textcolor"></i>
            ) : (
              <i className="ri-menu-3-line ri-xl"></i>
            )}
          </button>
        </div>

        {/* Main Navigation */}
        <ul
          className={`${
            openMenuId === "main" ? "block" : "hidden"
          } w-full lg:w-auto lg:flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative group"
              onMouseEnter={() => handleMenuToggle(item.id)}
              onMouseLeave={() => handleMenuToggle(null)}
            >
              {/* Primary Nav Link */}
              <LinkScroll
                to={item.link}
                smooth
                duration={500}
                className="block px-4 py-2 text-gray-700 hover:text-primary cursor-pointer"
              >
                {item.name}
              </LinkScroll>

              {/* Render Submenu */}
              {item.sub_nav_items && openMenuId === item.id && (
                <div className="absolute left-0 top-full bg-white shadow-md rounded-md p-2">
                  {renderSubNav(item.sub_nav_items, item.id)}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
