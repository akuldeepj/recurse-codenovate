import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from "next/link";
import { AppleCardsCarousel } from "./apple-cards-carousel";
import data from "./data.json";

export function BorderBeamDemo() {
  return (
    <div className="flex h-full w-screen flex-col items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-black md:shadow-xl">
      {/* <Link href={"/"}>
        <Image 
          src='/Images/recurse.png'
          alt="Recurse"
          width={150}
          height={150}
          className="dark:block hidden md:hidden mx-2 mt-6"
        />
        <Image 
          src='/Images/recurse-black.png'
          alt="Recurse"
          width={150}
          height={150}
          className="dark:hidden block md:hidden mx-2 mt-6"
        />
      </Link> */}

      {/* <h1 className="text-4xl font-bold text-center mt-8">RECURSE PRESENTS</h1> */}
      <div className="relative rounded-2xl p-2">
        <Image
          src="/Banner.png"
          alt="Hero Image"
          width={1400}
          height={800}
          className="hidden md:w-[80vw] rounded-[inherit] border object-contain shadow-lg dark:block w-[90vw] mob:my-5"
        />
        <Image
          src="/Banner1.png"
          alt="Hero Image"
          width={1400}
          height={800}
          className="dark:hidden md:w-[80vw] rounded-[inherit] border object-contain shadow-lg block w-[90vw] mob:my-5"
        />
        <BorderBeam size={350} duration={12} delay={9} className="mob:hidden" />
      </div>

      <div className="z-10 flex flex-col sm:flex-row my-5 items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
        {/* Download PPT Template Button */}
        <a
          href="/downloads/ppt-template.pptx"
          download
          className="z-10 flex items-center justify-center w-full sm:w-auto"
        >
          <AnimatedGradientText>
            <span className="flex items-center">
              📄 <hr className="mx-2 h-6 w-[0.5px] shrink-0 bg-gray-400" />
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#4fc3f7] via-[#0288d1] to-[#4fc3f7] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Download PPT Template
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </span>
          </AnimatedGradientText>
        </a>
        {/* Register Now Button */}
        <Link
          href="https://unstop.com/o/TQusDqL"
          className="z-10 flex items-center justify-center w-full sm:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatedGradientText>
            <span className="flex items-center">
              🚀 <hr className="mx-2 h-6 w-[0.5px] shrink-0 bg-gray-400" />
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Register Now
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </span>
          </AnimatedGradientText>
        </Link>
        {/* Download Problem Statements PDF Button */}
        <a
          href="/downloads/problem-statements.pdf"
          download
          className="z-10 flex items-center justify-center w-full sm:w-auto"
        >
          <AnimatedGradientText>
            <span className="flex items-center">
              📘 <hr className="mx-2 h-6 w-[0.5px] shrink-0 bg-gray-400" />
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ff8a65] via-[#d84315] to-[#ff8a65] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Download Problem Statements
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </span>
          </AnimatedGradientText>
        </a>
      </div>

      <div className="flex flex-col items-center mob:hidden">
        <p className="text-lg text-gray-500">Scroll down for more</p>
        <ChevronDown className="animate-bounce" size={32} />
      </div>
      <div className="md:h-[20vh] flex items-center justify-center h-[5vh]" />
      <AppleCardsCarousel items={data} />
    </div>
  );
}