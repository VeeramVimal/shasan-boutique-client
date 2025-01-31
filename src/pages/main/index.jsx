"use client";

import Layout from "@/components/layout/layout";
import HeroSection from "@/components/landing/hero-section";

// const Main = () => {
//   return (
//     <>
//       <Layout>
//         <div className="top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] ">
//         <HeroSection />
//         </div>
//       </Layout>
//     </>
//   );
// };
const Main = () => {
  return (
    <>
      <div className="relative min-h-screen font-sans antialiased">
       <div className="absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] bg-cover-gradient-2 sm:bg-cover-gradient"></div>
        <Layout>
          {/* Hero Section */}
          <main className="relative text-neutral-800">
            <HeroSection />

          </main>
        </Layout>
      </div>
    </>
  );
};
export default Main;
