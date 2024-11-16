'use client'

import Link from 'next/link'
import { Twitter, Github,Instagram,Computer, Linkedin } from 'lucide-react'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import { RiDiscordLine } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";


export default function FooterComponent() {
  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4 text-xl">
              <img src="/codenovate.png" alt="Logo" className="w-6 h-6" />
                <span className="font-semibold">Codenovate</span>
              </div>
              {/* <p className="text-sm text-gray-600 dark:text-gray-400">All rights reserved</p> */}
              <p className="text-sm text-gray-600 dark:text-gray-400 italic font-semibold">
                A <Link className="underline text-primary" href={"https://www.instagram.com/recurse.official"} target='_blank'>Recurse</Link> initiative
              </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* <div className="space-y-4">
              <Link href="#" className="block hover:text-gray-600 dark:hover:text-gray-300">Pricing</Link>
              <Link href="#" className="block hover:text-gray-600 dark:hover:text-gray-300">Blog</Link>
              <Link href="#" className="block hover:text-gray-600 dark:hover:text-gray-300">Contact</Link>
            </div> */}
            <div className="space-y-4">
              <Link href="/ps" className="block hover:text-gray-600 dark:hover:text-gray-300">Problem Statements</Link>
                <Link href="/#faq" className="block hover:text-gray-600 dark:hover:text-gray-300">FAQ</Link>
              <Link href="/#rules" className="block hover:text-gray-600 dark:hover:text-gray-300">Rules</Link>

            </div>
            <div className="space-y-4">
              <Link href="https://www.instagram.com/recurse.official" target='_blank' className="flex items-center space-x-2 hover:text-gray-600 dark:hover:text-gray-300">
                <Instagram size={20} />
                <span>Instagram</span>
              </Link>
              <Link href="https://discord.gg/nmymK9V43d" target='_blank' className="flex items-center space-x-2 hover:text-gray-600 dark:hover:text-gray-300">
                <FaDiscord size={20} />
                <span>Discord</span>
              </Link>
              <Link href="https://unstop.com/o/TQusDqL" target='_blank' className="flex items-center space-x-2 hover:text-gray-600 dark:hover:text-gray-300">
                <Computer size={20} />
                <span>Unstop</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8">
          <TextHoverEffect text="Codenovate" />
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 italic font-semibold">
            Made with <span className="text-red-500">♥</span> by <Link href={"https://www.instagram.com/recurse.official"} target='_blank'><span className="underline">Recurse</span></Link>
          </p>
        </div>
      </div>
    </footer>
  )
}