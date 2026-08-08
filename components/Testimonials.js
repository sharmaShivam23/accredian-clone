"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/siteData";

// Group testimonials 2-per-slide, same as the reference site
function chunk(list, size) {
  const groups = [];
  for (let i = 0; i < list.length; i += size) {
    groups.push(list.slice(i, i + size));
  }
  return groups;
}

export default function Testimonials() {
  const slides = chunk(testimonials, 2);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="testimonials" className="px-5 sm:px-8 py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Testimonials from Our Partners"
          highlight="Our Partners"
          subtitle="What Our Clients Are Saying"
          subtitleHighlight="Our Clients"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {slides[activeSlide].map((item) => (
            <div key={item.company} className="bg-white border border-slate-200 rounded-2xl p-6">
              {/* <p className="font-bold text-lg text-slate-400 mb-4">{item.company}</p> */}
              <img src={item.company}  className="w-10 h-10 " alt="" />
              <p className="text-slate-600 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to testimonial slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  activeSlide === index ? "bg-blue-600" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
