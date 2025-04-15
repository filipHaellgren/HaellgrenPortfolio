"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { HeaderHook } from "@/hooks/HeaderHook"; // update path if needed

export const Header = () => {
  const sectionIds = ["home", "projects", "about", "contact"];
  const activeSection = HeaderHook(sectionIds);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex justify-center items-center sticky z-20 top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={twMerge(
              "nav-item",
              activeSection === item.href.replace("#", "")
                ? "bg-white text-gray-900"
                : "text-white/70 hover:bg-white/20 hover:text-white"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};