import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import Header from "./_components/Header";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#dddddd] to-[#b9b9b9] text-black">
        <Header />
        <div className="container flex flex-grow flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="py-40 text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Hi there, I&apos;m{" "}
            <span className="text-blue-900">Jared Price</span>
          </h1>
          <svg
            className="w-14 fill-blue-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>menu-down</title>
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        </div>
        <div>
          <div className="flex flex-col-reverse items-center justify-center overflow-x-clip lg:flex-row lg:p-14">
            <div className="px-40 py-6">
              <h1 className="text-6xl">Web Development</h1>
              <h2 className="pt-2 text-xl text-blue-900">Software</h2>
              <p className="mt-10 text-lg">
                I&apos;m passionate about full-stack web development, creating
                dynamic and user-friendly websites from the ground up. I enjoy
                working on both the front end and back end, ensuring seamless
                functionality and an engaging user experience. Whether it&apos;s
                coding, debugging, or collaborating on design, I love bringing
                ideas to life through code and making sure everything runs
                smoothly. Check out my{" "}
                <a className="text-blue-500" href="/web-portfolio">
                  web portfolio
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-center overflow-x-clip lg:flex-row lg:gap-10 lg:p-14">
            <div className="px-40 py-6 pb-36">
              <h1 className="text-6xl">Multimedia Production</h1>
              <h2 className="pt-2 text-xl text-blue-900">Media</h2>
              <p className="mt-10 text-lg">
                I&apos;m passionate about bringing ideas to life through various
                forms of media. Whether it&apos;s creating and editing engaging
                videos, producing unique music, enhancing photos, or crafting
                compelling scripts. I love every step of the creative process.
                My goal is to produce high-quality content that resonates with
                audiences, elevates projects, and tells a captivating story.
                Check out my{" "}
                <a className="text-blue-500" href="/media-portfolio">
                  media portfolio
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
