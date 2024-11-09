'use client'
import BoxReveal from "@/components/ui/box-reveal";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import images from "./images.json";
import { Motion } from "@/components/framer-motion";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';

import GridPattern from "@/components/ui/grid-pattern";

export default function BoxRevealDemo() {

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect( () => {
  //   (
  //     async () => {
  //         const LocomotiveScroll = (await import('locomotive-scroll')).default
  //         const locomotiveScroll = new LocomotiveScroll();

  //         setTimeout( () => {
  //           setIsLoading(false);
  //           document.body.style.cursor = 'default'
  //           window.scrollTo(0,0);
  //         }, 2600)
  //     }
  //   )()
  // }, [])


  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-black p-20 md:shadow-xl h-screen">
    <div className="flex h-[100vh] w-[100vw] mob:flex-col items-center justify-center">
       <AnimatePresence mode='wait'>
        {/* {isLoading && <Preloader />} */}
        <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn("[mask-image:radial-gradient(60vw_circle_at_center,white,transparent)]")}
      />
      {/* Left Content Section */}
      <div className="w-1/2 flex flex-col justify-center items-start p-10 mob:w-full mob:mt-6">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <Image 
          src={'/Images/recurse.png'}
          width={200}
          height={200}
          className="dark:block hidden"
          />
          <Image 
          src={'/Images/recurse-black.png'}
          width={200}
          height={200}
          className="dark:hidden block"
          />
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            Code Chase by 
            {/* <span className="text-[#5046e6]">Recurse</span> */}
            <span className="text-primary"> Recurse</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            Tech Club @
            {/* <span className="text-[#5046e6]"> KMIT</span> */}
            <span className="text-primary"> KMIT</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-[1.5rem]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae explicabo ullam. Excepturi temporibus consequuntur facere, enim laborum adipisci ipsa, sint corrupti voluptatum soluta hic molestias nostrum incidunt vel. Accusamus?
            </p>
          </div>
        </BoxReveal>
      <div className="flex gap-2">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <Link
            href={"/ps"}
            className="z-10 flex my-3 items-center justify-center"
          >
            <AnimatedGradientText>
              📝 <hr className="mx-2 h-8 w-[2px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text`
                )}
              >
                Know More
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </Link>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <Link
            href={"/register"}
            className="z-10 flex my-3 items-center justify-center"
          >
            <AnimatedGradientText>
              🚀 <hr className="mx-2 h-8 w-[2px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Register Now
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </Link>
        </BoxReveal>
        </div>
      </div>

      {/* Right Section for Images */}
      <div className="w-[50%] h-[100%] flex items-center relative mob:hidden">
        <div className="flex justify-center flex-grow items-center space-x-6 lg:space-x-8">
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            {images.slice(0, 2).map((image, index) => (
              <Motion.div
                initial={{ opacity: 0, y: -640 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 110,
                  delay: Math.random(),
                }}
                key={index}
                className="floating-image h-52 w-36 md:h-64 md:w-44 overflow-hidden rounded-lg"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                />
              </Motion.div>
            ))}
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-5">
            {images.slice(2, 5).map((image, index) => (
              <Motion.div
                initial={{ opacity: 0, y: -640 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 110,
                  delay: Math.random(),
                }}
                key={index}
                className="floating-image h-52 w-36 md:h-64 md:w-44 overflow-hidden rounded-lg"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                />
              </Motion.div>
            ))}
          </div>
          <div className="hidden xl:grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            {images.slice(5).map((image, i) => (
              <Motion.div
                initial={{ opacity: 0, y: -640 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 110,
                  delay: Math.random(),
                }}
                key={i}
                className="floating-image h-52 w-36 md:h-64 md:w-44 overflow-hidden rounded-lg"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                />
              </Motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Section */}
      {/* <div className="mob:mx-5 mob:my-5 mob:mt-10 des:hidden tab:hidden xl:hidden">
        <Image 
        src={images[0].url}
        alt="Next.js"
        width={500}
        height={500}
        />
      </div> */}
      </AnimatePresence>
    </div>
    </div>
  );
}
