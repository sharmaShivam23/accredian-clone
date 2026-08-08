"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { faqCategories } from "@/data/siteData";

export default function FAQs() {
  // Which category tab is active ("About the Course", "About the Delivery"...)
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].key);
  // Which single question is expanded (index within the active category)
  const [openIndex, setOpenIndex] = useState(0);

  const activeQuestions =
    faqCategories.find((cat) => cat.key === activeCategory)?.questions ?? [];

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setOpenIndex(0);
  };

  return (
    <section id="faqs" className="px-5 sm:px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Frequently Asked Questions" highlight="Questions" align="left" />

        <div className="grid md:grid-cols-[240px_1fr] gap-8">
          {/* Category tabs */}
          <div className="flex md:flex-col gap-3 overflow-x-auto">
            {faqCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`whitespace-nowrap text-left px-5 py-3 rounded-xl border font-semibold text-sm transition-colors ${
                  activeCategory === cat.key
                    ? "border-blue-600 text-blue-600 bg-blue-50"
                    : "border-slate-200 text-slate-500 hover:border-slate-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div>
            <div className="flex flex-col gap-3">
              {activeQuestions.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.question}
                    className="border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-semibold text-slate-800">{item.question}</span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Smooth expand/collapse via grid-template-rows animation */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-4 text-sm text-slate-500">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <Button href="#lead-form">Enquire Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}