import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import { IMAGE_STRING } from "@/constants/image_string";
import useDarkSide from "@/utils/useDarkSide";
import { navItems } from "./navbar-data";
import { STRINGS } from "@/constants/common-strings";

function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkMode, setDarkMode] = useState(false);
  const [getTheme, setFetchTheme] = useState("");
  const [menu, setMenu] = useState({
    openMenuId: null,
    // openSubMenuId: null,
    // openNestedSubMenuId: null
  });
  const [openMenuId, setOpenMenuId] = useState(null);
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [openNestedSubMenuId, setOpenNestedSubMenuId] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const handleMenuToggle = (menuId) => {
    setOpenSubMenuId((prev) => (prev === menuId ? null : menuId));
  };

  const handleSubMenuToggle = (subMenuId) => {
    setOpenNestedSubMenuId((prev) => (prev === subMenuId ? null : subMenuId));
  };

  const renderSubNav = (subNavItems, parentId = null) => {
    return (
      <ul className="ml-4 mt-2 space-y-2 ">
        {subNavItems.map((subItem) => (
          <li
            key={subItem.id}
            className="relative group"
            onMouseEnter={() => handleSubMenuToggle(subItem.id)}
            onMouseLeave={() => handleSubMenuToggle(null)}
          >
            <LinkScroll
              to={subItem.link}
              smooth
              duration={500}
              className="block px-4 py-2 text-sm text-gray-600 hover:text-primary cursor-pointer"
            >
              {subItem.name}
            </LinkScroll>

            {/* Render Nested Submenu */}
            {subItem.sub_nav && openNestedSubMenuId === subItem.id && (
              <div
                className="absolute left-full top-0 bg-white-300 shadow-md rounded-md"
                style={{ zIndex: 50 }}
              >
                {renderSubNav(subItem.sub_nav, subItem.id)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <nav id="navbar" className="relative z-10 w-full text-neutral-800">
        <div className="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
          <div className="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
            <div className="w-full flex flex-row items-center justify-between py-6">
              <Image
                src={IMAGE_STRING.LOGO_1}
                alt="Logo"
                className="w-20 mx-auto"
                width={60}
                height={60}
                layout="intrinsic"
                priority
              />
              <button
                className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
                onClick={() =>
                  setOpenMenuId((prev) => (prev === "main" ? null : "main"))
                }
                // onClick={() => setMenu((prev) => ({ openMenuId: (prev === "main" ? null : "main")}))}
              >
                {openMenuId === "main" ? (
                  <i className="ri-close-circle-line ri-xl text-textcolor"></i>
                ) : (
                  <i className="ri-menu-3-line ri-xl"></i>
                )}
              </button>
            </div>

            <ul
              className={`${
                openMenuId === "main" ? "block" : "hidden"
              } w-full lg:w-auto lg:flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0`}
            >
              {navItems.map((data) => (
                <li
                  key={data.id}
                  className="relative group"
                  onMouseEnter={() => handleMenuToggle(data.id)}
                  onMouseLeave={() => handleMenuToggle(null)}
                >
                  <LinkScroll
                    to={data.link}
                    smooth
                    duration={500}
                    className={`block px-4 py-2 cursor-pointer ${
                      activeLink === data.activeLink
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                    onSetActive={() => setActiveLink(data.activeLink)}
                  >
                    {data.name}
                  </LinkScroll>

                  {/* Render Submenu */}
                  {data.sub_nav_items && openSubMenuId === data.id && (
                    <div
                      className="absolute left-0 mt-2 bg-white-300 shadow-md rounded-lg"
                      style={{ zIndex: 50 }}
                    >
                      {renderSubNav(data.sub_nav_items, data.id)}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div 
          // className={`${ openMenuId === "main" ? "block" : "hidden"} flex space-x-3`}
          className={`${
            openMenuId === "main" ? "block" : "hidden"
          } sm:flex md:relative sm:space-x-6 space-y-4 sm:space-y-0`}
          // className={`block sm:hidden  flex space-x-3`}
          >
            <button className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]">
              {STRINGS.SIGN_IN}
            </button>
            <button className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white-300">
              {STRINGS.SIGN_UP}
            </button>
          </div>
          </div>
          
          
        </div>
      </nav>
    </>
  );
}

export default Header;
