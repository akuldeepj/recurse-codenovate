"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";
import { PowerIcon } from "@heroicons/react/24/solid";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "rules",
    href: "/#rules",
  },
  {
    title: "timeline",
    href: "/#timeline",
  },
  
  {
    title: "statements",
    href: "/ps",
  },
];


export default function HeaderNav() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={"h-[100vh] bg-[#6c44ac] z-40 fixed right-0 top-0 text-white z-[15]"}
    >
      <div
        className={
          "box-border h-full p-[90px]  flex flex-col justify-between mob:w-[100vw] w-[35vw]"
        }
      >
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={
            "flex flex-col text-[56px] gap-[12px] mt-[80px] mob:text-[32px]"
          }
        >
          
          <div
            className={
              "text-[#999999] border-b border-[#999999] uppercase mt-[40px] text-sm"
            }
          >
            <p>Menu</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        
        {/* <Footer /> */}
      </div>
      <Curve />
    </motion.div>
  );
}