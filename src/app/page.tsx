'use client';
import Image from "next/image";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";
import { GridPatternLinearGradient } from "@/components/ui/hero";
import { TimelineDemo } from "@/components/timeline";
import { WobbleCardDemo } from "@/components/rules";
import { AccordionDemo } from "@/components/faq";
import images from "./images.json";
import BoxRevealDemo from "@/components/test";
import HackathonLanding from "@/components/hackathon-landing";
import CountdownTimer from '@/components/Timer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // setIsLoading(false);
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
      }, 2600);
      document.body.style.cursor = 'default';
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 2600);
      })();
    }
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
      {isLoading && <Preloader />}
      </AnimatePresence>
      {/* <BoxRevealDemo /> */}
      <HackathonLanding />
      {/* <GridPatternLinearGradient /> */}
      <TimelineDemo />
      <WobbleCardDemo />
      <AccordionDemo />
      <CountdownTimer targetDate={'2024-11-30T10:00:00+05:30'} />
      
      </>
  );
}
