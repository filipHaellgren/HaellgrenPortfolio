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
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">

      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={twMerge(
              "nav-item",
              activeSection === item.href.replace("#", "")
                ? "bg-[#5C4033]  text-[#FFD9A0] "
                : "text-[#5C4033]  hover:bg-[#5C4033]/50 hover:text-[#FDF6EE]"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};