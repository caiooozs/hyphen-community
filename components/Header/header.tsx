"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { FiUsers, FiInfo, FiMessageCircle } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 w-full">
        <header className="w-full max-w-5xl bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-xl flex items-center justify-between px-6 py-3 transition-all">
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center text-xl font-bold tracking-wider text-white"
            >
              <img src="/hyphen-logo.png" alt="Hyphen" className="h-16" />
              <span className="text-md font-light">Hyphen</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#ecosystem"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              <FiUsers className="text-lg" />
              Comunidade
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              <FiInfo className="text-lg" />
              Sobre
            </a>
            <a
              href="#channels"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              <FiMessageCircle className="text-lg" />
              Conectar-se
            </a>
            <a
              href="https://linktr.ee/hyphencommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button className="text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all text-sm px-5 py-2 h-auto">
                Participe agora
                <FaArrowRight className="ml-2" />
              </Button>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors text-white focus:outline-none"
            aria-label="Open Menu"
          >
            <HiMenu className="text-2xl" />
          </button>
        </header>
      </div>

      {/* Mobile Offcanvas Menu */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#111116] border-l border-white/10 z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 shadow-2xl ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white focus:outline-none"
            aria-label="Close Menu"
          >
            <HiX className="text-xl" />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          <a
            href="#ecosystem"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-lg font-medium"
          >
            <FiUsers className="text-xl" />
            Comunidade
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-lg font-medium"
          >
            <FiInfo className="text-xl" />
            Sobre
          </a>
          <a
            href="#channels"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-lg font-medium"
          >
            <FiMessageCircle className="text-xl" />
            Conectar-se
          </a>
          <a
            href="https://linktr.ee/hyphencommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <Button className="text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full w-full justify-center transition-all py-6">
              Participe agora
              <FaArrowRight className="ml-2" />
            </Button>
          </a>
        </nav>
      </div>
    </>
  );
}
