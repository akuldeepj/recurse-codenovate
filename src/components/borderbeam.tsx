import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronDown, ChevronRight } from "lucide-react";
import GradualSpacing from "./ui/gradual-spacing";


export function BorderBeamDemo() {
  return (
    <>
    <div className="relative flex h-full w-screen flex-col items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-black md:shadow-xl">
        <GridPattern width={40} height={40} x={-1} y={-1} className={cn("[mask-image:radial-gradient(60vw_circle_at_center,white,transparent)]")} />

        <h1 className="text-4xl font-bold text-center my-8">RECURSE PRESENTS</h1>
        {/* <div className='relative rounded-2xl p-2'>
          <img
            src="/Banner.png"
            alt="Hero Image"
            className="hidden md:w-[50vw] rounded-[inherit] border object-contain shadow-lg dark:block w-[70vw]"
          />
          <img
            src="/Banner.png"
            alt="Hero Image"
            className="block w-[700px] rounded-[inherit] border object-contain shadow-lg dark:hidden"
          />
          <BorderBeam size={450} duration={12} delay={9} />
        </div> */}
        <div className="relative flex h-[70vh] w-[70vw] flex-col items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-gray-900 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Main Banner
      </span>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
      <div className="z-10 flex my-5 items-center justify-center">
        <AnimatedGradientText>
          🖥️ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Register Now
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        
      </div>
        <div className=" flex flex-col items-center mob:hidden">
          <p className="text-lg text-gray-500">Scroll down for more</p>
          <ChevronDown className="animate-bounce" size={32} />
        </div>
        <div className='md:h-[40vh] flex items-center justify-center h-[10vh]'>
        <GradualSpacing
          className="font-display text-center text-sm font-bold tracking-[-0.1em] text-black dark:text-white md:text-5xl md:leading-[5rem]"
          text="Problem Statements will be released soon!"
        />
      </div>
        <div className="py-10"></div>
    </div>
    </>
  );
}
