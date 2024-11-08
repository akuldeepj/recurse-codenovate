'use client'

import Link from 'next/link'
import { Twitter, Github,Instagram,Computer, Linkedin } from 'lucide-react'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'

export default function FooterComponent() {
  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4 text-xl">
              <div className="w-6 h-6 bg-gray-800 dark:bg-gray-200 rounded-sm"></div>
              <span className="font-semibold">FLARE</span>
            </div>
            {/* <p className="text-sm text-gray-600 dark:text-gray-400">All rights reserved</p> */}
            <p className="text-sm text-gray-600 dark:text-gray-400 italic font-semibold">
            A <span className="underline text-[#A6FF04]">Recurse</span> initiative
          </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* <div className="space-y-4">
              <Link href="#" className="block hover:text-gray-600 dark:hover:text-gray-300">Pricing</Link>
              <Link href="#" className="block hover:text-gray-600 dark:hover:text-gray-300">Blog</Link>
              <Link href="#" className="block hover:text-gray-600 dark:hover:text-gray-300">Contact</Link>
            </div> */}
            <div className="space-y-4">
              <Link href="#" className="block hover:text-gray-600 dark:hover:text-gray-300">Problem Statements</Link>
              <Link href="#faq" className="block hover:text-gray-600 dark:hover:text-gray-300">FAQ</Link>
              <Link href="#rules" className="block hover:text-gray-600 dark:hover:text-gray-300">Rules</Link>

            </div>
            <div className="space-y-4">
              <Link href="https://www.instagram.com/recurse.official" target='_blank' className="flex items-center space-x-2 hover:text-gray-600 dark:hover:text-gray-300">
                <Instagram size={20} />
                <span>Instagram</span>
              </Link>
              <Link href="https://discord.gg/Pg6urJfX" target='_blank' className="flex items-center space-x-2 hover:text-gray-600 dark:hover:text-gray-300">
                <Linkedin size={20} />
                <span>Discord</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 hover:text-gray-600 dark:hover:text-gray-300">
                <Computer size={20} />
                <span>Unstop</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8">
          <TextHoverEffect text="FLARE" />
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 italic font-semibold">
            Made with <span className="text-red-500">♥</span> by <span className="underline">Recurse</span>
          </p>
        </div>
      </div>
    </footer>
  )
}