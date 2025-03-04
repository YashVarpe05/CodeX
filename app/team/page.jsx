"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Sagar from "@/components/Sagar";
import Shubham from "@/components/Shubham";
import Yash2 from "@/components/Yash";
import Sayali from "@/components/Sayali";
import Darshana from "@/components/Darshana";
import Harshad from "@/components/Harshad";
import Om from "@/components/Om";
import Pratik from "@/components/Pratik";
import PratikS from "@/components/PratikS";
import Tanishq from "@/components/Tanishq";
import Yogesh from "@/components/Yogesh";
import styles from "./team.module.css";

const TeamPage = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
        <div className="relative flex items-center justify-center flex-col w-full">
          <FloatingNav navItems={navItems} />
          <div className="flex justify-center relative my-6 md:my-10 lg:my-20 z-10 px-4 mt-20 md:mt-24">
            <TextGenerateEffect
              words=".... {CodeX} Tech Leaders;_ "
              className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            />
          </div>
        </div>

        {/* Main content container - full width with minimal padding */}
        <div className="w-full px-2 sm:px-4 md:px-6 pb-16 max-w-[2000px] mx-auto">
          {/* Card Section */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-8">
            {/* Yash component is imported but not used - adding it here */}
            <div className="aspect-square w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-900/20 bg-gray-900/40 p-2">
              <Yash2 />
            </div>
            <div className="aspect-square w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-900/20 bg-gray-900/40 p-2">
              <Sagar />
            </div>
            <div className="aspect-square w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-900/20 bg-gray-900/40 p-2">
              <Shubham />
            </div>
            <div className="aspect-square w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-900/20 bg-gray-900/40 p-2">
              <Sayali />
            </div>
            <div className="aspect-square w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-900/20 bg-gray-900/40 p-2">
              <Darshana />
            </div>
            <div className="aspect-square w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-900/20 bg-gray-900/40 p-2">
              <Harshad />
            </div>
            <div className="aspect-square w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-900/20 bg-gray-900/40 p-2">
              <Om />
            </div>
            <div className="aspect-square w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-900/20 bg-gray-900/40 p-2">
              <Pratik />
            </div>
            <div className="aspect-square w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-900/20 bg-gray-900/40 p-2">
              <PratikS />
            </div>
            <div className="aspect-square w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-900/20 bg-gray-900/40 p-2">
              <Tanishq />
            </div>
            <div className="aspect-square w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-900/20 bg-gray-900/40 p-2">
              <Yogesh />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
