"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/components/layout/ScrollAnimationWrapper";
import "./landingPage.css";
import Image from "next/image";
import { IMAGE_STRING } from "@/constants/image_string";
function HeroSection() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <section
      id="hero"
      // className="relative min-h-[75vh] bg-cover-gradient-2 sm:bg-cover-gradient"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden "
          variants={scrollAnimation}
          initial="offscreen"
          animate="onscreen"
        >
          <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
            <span className="text-base text-gradient font-semibold uppercase">
              Sign Up Today
            </span>
            <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
              The World's{" "}
              <span className="text-header-gradient">Fastest Growing</span>{" "}
              Crypto Web App
            </h1>
            {/* <h1 className="text-[clamp(2rem, 5vw, 6rem)] font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
              The World's{" "}
              <span className="text-header-gradient">Fastest Growing</span>{" "}
              Crypto Web App
            </h1> */}

            <p className="paragraph hidden sm:block">
              Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
              bank transfers or your credit/debit card.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
              <button className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white-300">
                Get Started
              </button>
              <button className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center">
                <span>
                  Download App
                  <i className="ri-download-line ml-2" />
                </span>
              </button>
            </div>
          </div>
          <div className="hidden sm:block col-span-12 lg:col-span-6 mb-4">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                className="transition-all duration-300 ease-in-out hover:scale-105"
                src={IMAGE_STRING.HERO_IMAGE}
                alt="scriti-frame"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
}

export default HeroSection;
