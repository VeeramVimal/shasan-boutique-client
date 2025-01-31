import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";

import { IMAGE_STRING } from "@/constants/image_string";
import useDarkSide from "@/utils/useDarkSide";
import { navItems } from "./navbar-data";

function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkMode, setDarkMode] = useState(false);
  const [getTheme, setFetchTheme] = useState("");

  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState({
    sub_1: false,
    sub_2: false,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const renderSubNav = (subNavItems) => {
    return (
      <ul className="space-y-2 pl-4">
        {subNavItems.map((subNavItem, index) => (
          <li key={index} className="relative group">
            <Link href={subNavItem.path} className={"block px-4 py-2"}>
              {subNavItem.name}
            </Link>
            {subNavItem.sub_nav && renderSubNav(subNavItem.sub_nav)}
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
              {/* <img
                src={IMAGE_STRING.LOGO_1}
                alt="Logo"
                className="w-20 mx-auto"
              /> */}
              <Image
                src={IMAGE_STRING.LOGO_1}
                alt="Vercel Logo"
                className="w-20 mx-auto"
                width={60}
                height={60}
                layout="intrinsic"
                priority
              />
              <button
                className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
                onClick={toggleMenu}
              >
                {open ? (
                  <i
                    className="ri-close-circle-line ri-xl text-textcolor"
                    title="Close the app launcher"
                  />
                ) : (
                  <i className="ri-menu-3-line ri-xl" />
                )}
              </button>
            </div>

            <ul
              className={`${
                open ? "block" : "hidden"
              } lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto`}
            >
              {navItems.map((data) => (
                <li key={data.id} className="relative group">
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
                  {data.sub_nav_items && (
                    <div className="hidden group-hover:block absolute left-0 mt-2 bg-white shadow-md rounded-lg">
                      {renderSubNav(data.sub_nav_items)}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
