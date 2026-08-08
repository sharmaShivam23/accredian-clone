"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/siteData";
import Button from "@/components/ui/Button";

export default function Navbar() {
  // Controls whether the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);
  
  // Tracks which tab is currently active, defaulting to "Home"
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-12 h-[88px]">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={() => setActiveTab("Home")} 
          className="flex flex-col leading-none shrink-0 group cursor-pointer"
        >
          <span className="text-[26px] font-bold text-[#1A73E8] tracking-tight">
            accredian
          </span>
          <span className="text-[9px] font-medium tracking-[0.1em] text-slate-400 mt-1 text-center group-hover:text-slate-500 transition-colors">
            credentials that matter
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden xl:flex items-center gap-2 text-[14px] font-semibold text-slate-800">
          {navLinks.map((link) => {
            // Check if the link matches the currently active state
            const isActive = link.label === activeTab;
            
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveTab(link.label)}
                  className={`px-4 py-2 transition-all duration-200 ease-in-out cursor-pointer ${
                    isActive
                      ? "text-[#1A73E8] border-b-2 border-[#1A73E8]"
                      : "rounded-full hover:bg-blue-50/80 hover:text-[#1A73E8]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Button */}
{/* <div className="hidden xl:block">
          <Button 
            href="#lead-form" 
            className="bg-[#1A73E8] hover:bg-blue-700 text-white font-medium text-sm px-6 py-2.5 rounded-md transition-all shadow-sm"
          >
            Enquire Now
          </Button>
        </div>         */}

        {/* Mobile hamburger */}
        <button
          className="xl:hidden text-slate-700 hover:text-[#1A73E8] transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-[88px] left-0 w-full border-t border-slate-100 bg-white px-6 py-6 shadow-xl z-50">
          <ul className="flex flex-col gap-2 text-[15px] font-semibold text-slate-700">
            {navLinks.map((link) => {
              const isActive = link.label === activeTab;
              
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveTab(link.label);
                      setIsOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                      isActive
                        ? "bg-blue-50 text-[#1A73E8]"
                        : "hover:bg-slate-50  font-extrabold hover:text-[#1A73E8]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <Button 
            href="#lead-form" 
            className="mt-6 w-full bg-[#1A73E8] hover:bg-blue-700 text-white font-medium text-[15px] px-6 py-3.5 rounded-md transition-all shadow-sm"
          >
            Enquire Now
          </Button> */}
        </div>
      )}
    </header>
  );
}