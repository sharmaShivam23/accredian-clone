import React from 'react';
import { stats } from '@/data/siteData';

const Stats = () => {
  
  return (
    <section className="py-20 bg-white" id="stats">
      <div className="container mx-auto px-4">
        
        
        <div className="text-center mb-16">
           <h1 className="text-[40px] font-medium text-gray-800">
           Our  <span className="text-[#3b82f6]">Track Record</span>
          </h1>
          <h2 className="text-[18px] font-medium text-gray-800">
            The Numbers Behind <span className="text-[#3b82f6]">Our Success</span>
          </h2>
        </div>

        {/* Stats Grid with dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center px-4 md:px-8 ${
        
                index === 0 ? 'md:pr-12 md:pl-0' : 
                index === 2 ? 'md:pl-12 md:pr-0' : 'md:px-12'
              }`}
            >
              {/* Pill-shaped value container */}
              <div className="bg-[#e0f2fe] text-[#2563eb] font-bold text-2xl rounded-full px-8 py-3 mb-6">
                {stat.value}
              </div>
              
              {/* Stat label with specific max-width and line-height */}
              <p className="text-gray-900 font-medium text-[15px] leading-relaxed max-w-[280px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Stats;