"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
// Assumes hero.image is the transparent PNG of the two people
import { hero } from "@/data/siteData"; 

export default function Hero() {
  return (
    <section id="home" className="px-6 lg:px-12 pt-10 pb-16 w-full flex justify-center bg-white">
      {/* Main Container - Added the all-around soft shadow here */}
      <div className="relative w-full max-w-[1300px] bg-[#F0F6FF] rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row items-stretch min-h-[520px]">
        
        {/* Left: Text Content */}
        <div className="relative z-10 w-full md:w-[60%] lg:w-[55%] pl-8 pr-8 py-12 md:pl-14 lg:pl-20 md:py-20 flex flex-col justify-center">
          
          <h1 className="text-[40px] md:text-[52px] lg:text-[56px] font-bold text-slate-900 leading-[1.15] tracking-tight">
            Next-Gen <span className="text-[#1A73E8]">Expertise</span>
            <br />
            For Your <span className="text-[#1A73E8]">Enterprise</span>
          </h1>

          <p className="mt-6 text-[17px] md:text-[19px] text-slate-800 font-medium leading-relaxed max-w-[420px]">
            Cultivate high-performance
            <br className="hidden sm:block" />
            teams through expert learning.
          </p>

          {/* Bullet Points */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            {[
              "Tailored Solutions", 
              "Industry Insights", 
              "Expert Guidance"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-slate-800 font-medium text-[14px]">
                <CheckCircle2 className="text-[#16A34A] shrink-0" strokeWidth={2.5} size={20} />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-10">
            <a 
              href="#lead-form"
              className="inline-block bg-[#1A73E8] hover:bg-blue-700 text-white font-medium text-[16px] px-8 py-3.5 rounded-lg transition-all shadow-[0_4px_14px_0_rgba(26,115,232,0.39)] hover:shadow-[0_6px_20px_rgba(26,115,232,0.23)] hover:-translate-y-[1px]"
            >
              Enquire Now
            </a>
          </div>
        </div>

       
        <div className="relative w-full h-[350px] md:h-full md:absolute md:right-0 md:bottom-0 md:w-[50%] lg:w-[48%]">
          <Image
            src={hero.image}
            alt="Enterprise professionals collaborating"
            fill
            className="object-contain object-bottom md:object-right-bottom"
            priority
          />
        </div>

      </div>
    </section>
  );
}
