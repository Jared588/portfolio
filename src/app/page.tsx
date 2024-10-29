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
          <h1 className="py-52 text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
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
          <div className="flex flex-col-reverse items-center justify-center overflow-x-clip lg:flex-row lg:gap-10 lg:p-14">
            <div className="px-20 py-10">
              <h1 className="text-6xl">Web Development</h1>
              <h2 className="pt-2 text-xl text-blue-900">
                Software
              </h2>
              <p className="mt-10 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-center overflow-x-clip lg:flex-row lg:gap-10 lg:p-14">
            <div className="px-20 py-10">
              <h1 className="text-6xl">Video Editing</h1>
              <h2 className="pt-2 text-xl text-blue-900">
                Multimedia
              </h2>
              <p className="mt-10 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
