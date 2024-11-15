'use client'

import React, { useState, useEffect } from 'react'
import GridPattern from './ui/grid-pattern'
import { cn } from '@/lib/utils'

import { FaReact, FaNodeJs, FaPython, FaJs, FaDocker, FaRust, FaSwift, FaJava, FaPhp, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiGo, SiRuby, SiCsharp, SiCplusplus,SiKotlin } from 'react-icons/si'

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
  { Icon: FaJava, alt: 'Java' },
  { Icon: FaPhp, alt: 'PHP' },
  { Icon: SiKotlin, alt: 'Kotlin' },
  { Icon: FaHtml5, alt: 'HTML5' },
  { Icon: FaCss3Alt, alt: 'CSS3' },
  { Icon: SiRuby, alt: 'Ruby' },
  { Icon: SiCsharp, alt: 'C#' },
  { Icon: SiCplusplus, alt: 'C++' },
]

function FloatingIcon({ Icon, alt, style }: IconType) {
  return (
    <div className="absolute text-primary/50 dark:text-primary-foreground/50" style={style}>
      <Icon size={32} title={alt} />
    </div>
  )
}

export default function FuturisticCountdownTimer({ targetDate = "2023-12-31T23:59:59" }) {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>(calculateTimeLeft())
  const [icons, setIcons] = useState<IconType[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

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

  function calculateTimeLeft() {
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    const target = new Date(targetDate).toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    
    const difference = new Date(target).getTime() - new Date(now).getTime()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn("[mask-image:radial-gradient(60vw_circle_at_center,white,transparent)] absolute inset-0")}
      />
      {icons.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}
      <div className="z-10 text-center p-8 rounded-3xl shadow-2xl">
        <h2 className="text-6xl font-bold text-white mb-10">See you in 🔥</h2>
        {Object.keys(timeLeft).length === 0 ? (
          <h1 className="text-8xl font-extrabold text-neon-blue mb-8 animate-pulse">Time is up!</h1>
        ) : (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-gray-800 rounded-2xl p-6 shadow-lg transform  transition-all duration-300  relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <p className="text-5xl font-bold text-primary mb-2 relative z-10">{value}</p>
                  <p className="text-xl text-gray-400 capitalize relative z-10">{unit}</p>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-full h-full border-2 border-primtext-primary rounded-2xl animate-ping"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
    </div>
  )
}

