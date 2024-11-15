'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { ChevronRight, Code } from 'lucide-react'
import { FaReact, FaNodeJs, FaPython, FaJs, FaDocker, FaJava, FaPhp, FaRust, FaSwift } from 'react-icons/fa'
import { SiTypescript, SiKotlin, SiGo } from 'react-icons/si'
import { cn } from '@/lib/utils'
import { GridPattern } from '@/components/ui/grid-pattern'
import AnimatedGradientText from './ui/animated-gradient-text'
import Image from 'next/image'

interface IconType {
  Icon: React.ElementType;
  alt: string;
  style?: React.CSSProperties;
}

const techIcons = [
  { Icon: FaReact, alt: 'React' },
  { Icon: FaNodeJs, alt: 'Node.js' },
  { Icon: FaPython, alt: 'Python' },
  { Icon: FaJs, alt: 'JavaScript' },
  { Icon: SiTypescript, alt: 'TypeScript' },
  { Icon: FaDocker, alt: 'Docker' },
  { Icon: FaRust, alt: 'Rust' },
  { Icon: FaSwift, alt: 'Swift' },
  { Icon: SiGo, alt: 'Go' },
]

const sponsors = [
  { name: 'Tutorials Point', logo: '/Images/tp.png' },
  { name: 'Student Tribe', logo: '/Images/ST.png' },
]

function FloatingIcon({ Icon, alt, style }: IconType) {
  return (
    <div className="absolute text-primary/50 dark:text-primary-foreground/50" style={style}>
      <Icon size={32} title={alt} />
    </div>
  )
}

export default function HackathonLanding() {
  const [icons, setIcons] = useState<IconType[]>([]);

  useEffect(() => {
    const newIcons = techIcons.map((icon, index) => ({
      ...icon,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `float-around ${20 + Math.random() * 40}s linear infinite`,
        animationDelay: `${-Math.random() * 20}s`,
      },
    }))
    setIcons(newIcons)
  }, [])

  return (
    <div className={cn(
      "relative flex min-h-screen flex-col items-center justify-center px-4",
      "transition-colors duration-200 overflow-hidden"
    )}>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn("[mask-image:radial-gradient(60vw_circle_at_center,white,transparent)]")}
      />
      {icons.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}
      <div className="w-full max-w-6xl space-y-12 text-center z-10">
        {/* Top pill button */}
        {/* <div className="flex justify-center">
          <Link
            href="#"
            className={cn(
              "inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium",
              "text-foreground transition-colors hover:bg-accent",
              "dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            )}
          >
            <span className="mr-2">🚀</span>
            Title Sponsor 
          </Link>
        </div> */}

        {/* Main headline */}
        <div className="space-y-4">
          <h1 className={cn(
            "text-center text-4xl font-bold  tracking-wide",
            "sm:text-5xl md:text-6xl lg:text-7xl",
            "text-gray-900 dark:text-white"
          )}>
            Code.{" "}
              Create.
            {" "}
            Conquer.
            <br />
            <span className="font-serif italic bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Codenovate</span> 2024
          </h1>

          {/* Description text */}
          <div className="mx-auto max-w-[800px] space-y-4">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Not a coding genius? No sweat! Dive in, level up, and make epic connections.
              Whether you&apos;re a rookie or a pro, this is your chance to turn wild ideas into real-world impact!
            </p>
          </div>
          {/* Sponsors section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Sponsored by</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex items-center justify-center rounded-lg shadow-md">
                <Image 
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={50}
                  height={50}
                  className="max-w-full max-h-full object-contain rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* <Link
            href={"/ps"}
            className="z-10 flex my-3 items-center justify-center"
          >
            <AnimatedGradientText>
              📝 <hr className="mx-2 h-6 w-[0.5px] shrink-0 bg-gray-400" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Know More
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </Link> */}
          <Link
            href={"https://unstop.com/o/TQusDqL"}
            className="z-10 flex mx-3 items-center justify-center"
            target='_blank'
          >
            <AnimatedGradientText>
              🚀 <hr className="mx-2 h-6 w-[0.5px] shrink-0 bg-gray-400" />{" "}
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
        </div>

        

        {/* Footer text */}
        <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
          <Image 
            src={'/Images/recurse.png'}
            alt="Recurse"
            width={150}
            height={150}
            className="dark:block hidden"
          />
          <Image 
            src={'/Images/recurse-black.png'}
            alt="Recurse"
            width={150}
            height={150}
            className="dark:hidden block"
          />
          <Image 
            src={'/Images/prlogo.png'}
            alt="PR"
            width={100}
            height={100}
            className="block"
          />
        </div>
      </div>
      <style jsx global>{`
        @keyframes float-around {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(100px, -50px) rotate(90deg);
          }
          50% {
            transform: translate(0, 100px) rotate(180deg);
          }
          75% {
            transform: translate(-100px, 50px) rotate(270deg);
          }
        }
      `}</style>
    </div>
  )
}