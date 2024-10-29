"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  // State to manage mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full items-center justify-between p-8 text-black">
      <Link href={"/"}>
        <h1 className="text-2xl font-medium tracking-tighter md:text-3xl">
          J-Develops
        </h1>
      </Link>

      {/* Menu Icon - Visible on mobile */}
      <button onClick={toggleMenu} className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 w-8 fill-black"
        >
          <title>menu</title>
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>

      {/* Full Menu Links - Hidden on mobile, shown on larger screens */}
      <div className="hidden items-center gap-5 sm:flex">
        <Link className="text-xl" href={"/"}>
          Home
        </Link>
        <Link className="text-xl" href={"/blog"}>
          Blog
        </Link>
        <Link className="text-xl" href={"/portfolio"}>
          Portfolio
        </Link>
        <Link className="text-xl" href={"/contact-me"}>
          Contact Me
        </Link>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform bg-slate-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <div className="flex items-center justify-between p-6">
          <Link href={"/"} onClick={toggleMenu}>
            <h1 className="text-2xl font-medium tracking-tighter text-black">
              J-Develops
            </h1>
          </Link>
          {/* Close Menu Button */}
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 fill-black"
            >
              <title>close</title>
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Links */}
        <nav className="flex flex-col items-start gap-8 p-8 text-black">
          <Link className="text-xl" href={"/"} onClick={toggleMenu}>
            Home
          </Link>
          <Link className="text-xl" href={"/blog"} onClick={toggleMenu}>
            Blog
          </Link>
          <Link className="text-xl" href={"/portfolio"} onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link className="text-xl" href={"/contact-me"} onClick={toggleMenu}>
            Contact Me
          </Link>
        </nav>
      </div>
    </div>
  );
}
