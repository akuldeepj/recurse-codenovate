'use client';
import Image from "next/image";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";
import { GridBackgroundDemo } from "@/components/ui/hero";
import { TimelineDemo } from "@/components/timeline";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2600)
      }
    )()
  }, [])

  return (
    <>
      <AnimatePresence mode='wait'>
      {isLoading && <Preloader />}
      <GridBackgroundDemo />
      <TimelineDemo />
      </AnimatePresence>
      </>
  );
}
