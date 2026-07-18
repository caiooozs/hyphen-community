"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`animate-header w-full flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-24 text-white sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-blue-950/40 backdrop-blur-md shadow-2xl border-b border-blue-900/20 py-3"
          : "bg-blue-950 shadow-xl py-4"
      }`}
    >
      <div className="w-full md:w-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold tracking-wider">Hyphen</h1>
        </div>
        {/* Burger Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1.5 rounded-lg hover:bg-blue-900/50 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <HiX className="text-2xl text-white" />
          ) : (
            <HiMenu className="text-2xl text-white" />
          )}
        </button>
      </div>

      {/* Navigation Links - Responsive */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center w-full md:w-auto mt-4 md:mt-0 transition-all duration-300`}
      >
        <a
          href="#ecosystem"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-400 transition-all text-sm md:text-md py-1.5 md:py-0 w-full md:w-auto text-center"
        >
          Comunidade
        </a>
        <a
          href="#about"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-400 transition-all text-sm md:text-md py-1.5 md:py-0 w-full md:w-auto text-center"
        >
          Sobre
        </a>
        <a
          href="#channels"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-blue-400 transition-all text-sm md:text-md py-1.5 md:py-0 w-full md:w-auto text-center"
        >
          Conectar-se
        </a>
          <a
            href="https://linktr.ee/hyphencommunity"
            target="_blank"
            rel="noopener noreferrer"
          >
        <Button className="text-black bg-white transition-all transform hover:text-blue-700 text-xs md:text-sm px-4 py-1.5 md:py-2 w-full md:w-auto mt-2 md:mt-0">
            Participe agora
          <FaArrowRight />
        </Button>
          </a>
      </nav>
    </header>
  );
}
