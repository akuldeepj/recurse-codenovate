import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Registrations Begin",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Online - 14th Nov, 2024
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://via.placeholder.com/500" // Replace with actual image URL
              alt="Registrations Begin 1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://via.placeholder.com/500" // Replace with actual image URL
              alt="Registrations Begin 2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Qualifying Quiz (Round 1)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Online - 22nd Nov, 2024
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://via.placeholder.com/500" // Replace with actual image URL
              alt="Qualifying Quiz 1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://via.placeholder.com/500" // Replace with actual image URL
              alt="Qualifying Quiz 2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Idea Submission (Round 2)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Online - 26th Nov, 2024
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://via.placeholder.com/500" // Replace with actual image URL
              alt="Idea Submission 1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://via.placeholder.com/500" // Replace with actual image URL
              alt="Idea Submission 2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Idea Evaluations and Results",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Online - 28th Nov, 2024
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://via.placeholder.com/500" // Replace with actual image URL
              alt="Idea Evaluations 1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://via.placeholder.com/500" // Replace with actual image URL
              alt="Idea Evaluations 2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Final Hackathon (Round 3)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Offline - 30th Nov, 2024
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://via.placeholder.com/500" // Replace with actual image URL
              alt="Final Hackathon 1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://via.placeholder.com/500" // Replace with actual image URL
              alt="Final Hackathon 2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
