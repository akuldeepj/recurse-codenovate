"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  // IconBrandGithub,
  // IconBrandX,
  IconExchange,
  IconHome,
  IconBrandInstagram,
  IconBook,
  IconTimeline,
  Icon24Hours,
  IconBulb
} from "@tabler/icons-react";
// import Image from "next/image";

export default function FloatingDockBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Timeline",
      icon: (
        <IconTimeline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#timeline",
    },
    {
      title: "Rules",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#rules",
    },
    
    
    {
      title: "Problem Statements",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/ps",
    },

    // {
    //   title: "Instagram",
    //   icon: (
    //     <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "https://www.instagram.com/recurse.official",
    // },
  ];
  return (
    <div className="flex items-center justify-center w-full fixed z-50 bottom-5 mob:hidden">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
