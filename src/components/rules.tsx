"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <>
      <h1 className="text-4xl sm:text-6xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-400 my-8 text-center" id="rules">
        Rules and Information
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-[90vw] px-4 sm:px-6 lg:px-8">

        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Team Formation Guidelines
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Form a team of 3-4 participants from eligible B.Tech/B.E./B.Sc programs. Cross-college and interdisciplinary teams are encouraged. A team leader must be assigned as the main point of contact.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="team formation image"
            className="absolute lg:-right-[40%] right-1/2 transform translate-x-1/2 lg:translate-x-0 grayscale filter -bottom-3 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Code of Conduct
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Respect organizers, sponsors, and peers. Any form of cheating, plagiarism, or violation of guidelines will lead to disqualification.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Project Submission
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Submit your project within the deadline via the provided GitHub repository. Ensure the solution aligns with the selected problem statement and includes proper documentation.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="project submission image"
            className="absolute lg:-right-[20%] right-1/2 transform translate-x-1/2 lg:translate-x-0 -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-900">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Exciting Prizes
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Winners will receive amazing prizes! From a prize pool of 75,000 and many more amazing prizes 🏆.
          </p>
        </WobbleCard>

        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-yellow-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Judging Criteria
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Submissions will be evaluated based on creativity, technical implementation, and overall presentation. Teams should be ready to discuss their projects in detail with judges.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1640163561346-7778a2edf353?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="judging criteria image"
            className="absolute lg:-right-[40%] right-1/2 transform translate-x-1/2 lg:translate-x-0 grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Networking Opportunities
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Take advantage of networking sessions to connect with peers and industry experts, fostering collaboration and potential mentorship.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="networking opportunities image"
            className="absolute lg:-right-[20%] right-1/2 transform translate-x-1/2 lg:translate-x-0 -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Event Schedule
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            - Round 1 (Quiz): 22nd Nov 2024<br />
            - Round 2 (Idea Submission): 24th Nov 2024<br />
            - Round 3 (Hackathon): 30th Nov 2024
          </p>
          <Image
            src="https://images.unsplash.com/photo-1622465949558-94d7dbea2651?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="networking opportunities image"
            className="absolute lg:-right-[20%] right-1/2 transform translate-x-1/2 lg:translate-x-0 -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-orange-800">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Facilities and Support
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Food will be provided at designated areas. Participants must bring their own laptops and tools. Security and assistance will be available throughout the event.
          </p>
        </WobbleCard>

      </div>
    </>
  );
}
