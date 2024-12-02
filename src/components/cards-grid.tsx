"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

type Item = {
  title: string
  description: string
  link: string
  image: string
  color: string
}

export  function AppleCardsCarousel({ items = [], className = "" }: { items?: Item[], className?: string }) {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  return (
    <>
      <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90vw]", className)}>
        {items.map((item, idx) => (
          <motion.div
            key={item.link}
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.2 }}
          >
            <div
              className={cn(
                "relative aspect-square overflow-hidden rounded-xl cursor-pointer",
                item.color
              )}
              onClick={() => setSelectedItem(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white dark:from-black/80">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <span className="text-sm text-blue-400 hover:text-blue-300 dark:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Learn more
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pb-8" />

      <AnimatePresence>
        {selectedItem && (
          <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-y-auto border-none max-h-[90vh] bg-transparent fixed-size">
              <motion.div
                initial={{ opacity: 0.3, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.1 }}
                className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900 w-full h-full"
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedItem.title}
                  </DialogTitle>
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="mt-6"
                    >
                    <div className="relative h-[300px] overflow-hidden rounded-lg w-full">
                      <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      layout="fill"
                      objectFit="cover"
                      className="object-center"
                      />
                    </div>
                    </motion.div>
                  <DialogDescription className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {selectedItem.description}
                  </DialogDescription>
                </DialogHeader>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}