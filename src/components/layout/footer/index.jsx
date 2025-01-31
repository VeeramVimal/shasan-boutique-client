import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGE_STRING } from "@/constants/image_string";
import { FooterData_1, FooterData_2, FooterData_3 } from "./footer-data";

function Footer() {
  return (
    <section id="footer" className="mt-2" >
      <footer className="max-w-screen-xl px-8 mx-auto">
        <div className="w-full border-y border-[#DDDDDD]">
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <div className="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]">
              <div
                //   className="sm:hidden xl:block mb-6 sm:mb-0"
                className=" xl:block mb-6 sm:mb-0"
              >
                <Image
                  src={IMAGE_STRING.LOGO_1}
                  alt="Logo"
                  className="w-24 -mt-2"
                  width={60}
                  height={60}
                  layout="intrinsic"
                  priority
                />
              </div>
              <div>
                <ul className="space-y-4">
                  {FooterData_1 &&
                    FooterData_1.map((data_1, index) => (
                        <li key={index} className="text-sm text-gray-600 hover:text-primary">
                            {data_1.label}
                        </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]">
              <ul className="space-y-4">
              {FooterData_2 &&
                    FooterData_2.map((data_1, index) => (
                        <li key={index} className="text-sm text-gray-600 hover:text-primary">
                            {data_1.label}
                        </li>
                    ))}
              </ul>
            </div>

            <div className="md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r-0 border-[#DDDDDD]">
              <ul className="space-y-4">
              {FooterData_3 &&
                    FooterData_3.map((data_1, index) => (
                        <li key={index} className="text-sm text-gray-600 hover:text-primary">
                            {data_1.label}
                        </li>
                    ))}
              </ul>
            </div>

            <div className="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]">
              <h5 className="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">
                Newsletter
              </h5>
              <p className="text-sm text-[#666666] focus:outline-none focus:shadow-outline">
                Never miss anything crypto when <br className="sm:hidden" />
                you're on the go
              </p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
                  placeholder="Enter your email"
                />
                <button className="bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300">
                  {/* <ArrowRightIcon :size="20" /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
          &copy; Copyright 2025 Dev Exchange. All rights reserved
        </div>
      </footer>
    </section>
  );
}
export default Footer;
