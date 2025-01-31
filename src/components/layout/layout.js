"use client";

import { useEffect, useState } from "react";
import AddClassBody from "../elements/AddClassBody";
import Header from "./header";
import Footer from "./footer";
// import AOS from 'aos';

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
  pageProps,
}) {
  // const { isTheme } = useSelector((state) => state.auth);
  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    // AOS.init();
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);

  //   useEffect(() => {
  //     const currentThemeClass = isTheme || "is_light";
  //     document.body.classList.remove("is_light", "is_dark");
  //     document.body.classList.add(currentThemeClass);
  //   }, [isTheme]);

  return (
    <>
      <div id="top" />
      <AddClassBody />
      <Header />
      {children}
      <Footer />
    </>
  );
}
