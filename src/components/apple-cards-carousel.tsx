"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Item = {
  title: string;
  description: string;
  link: string;
  image: string;
  color: string;
};

export const AppleCardsCarousel = ({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <>
      <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full", className)}>
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
                <p className="text-sm text-gray-300 dark:text-gray-400 mb-4">{item.description}</p>
                <span className="text-sm text-blue-400 hover:text-blue-300 dark:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Learn more
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pb-8" /> {/* Adds padding at the bottom of the screen */}

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[425px] dark:bg-gray-800 dark:text-white">
          <DialogHeader>
            <DialogTitle>{selectedItem?.title}</DialogTitle>
            <DialogDescription>{selectedItem?.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Image
              src={selectedItem?.image || ""}
              alt={selectedItem?.title || ""}
              width={400}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="mt-4">
            <a
              href={selectedItem?.link}
              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              Learn more
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
