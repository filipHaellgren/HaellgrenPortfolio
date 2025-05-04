'use client';

import { useRef, useState } from 'react';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-[#FCD9B8] to-[#8B7265]  py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          {/* Background grain overlay */}
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl text-[#5C4033] md:text-3xl">
                Let's create something together
              </h2>
              <p className="text-sm mt-2 md:text-base text-[#5C4033]">
                Let's Connect!
              </p>
            </div>

            <div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="text-[#FFD9A0] bg-[#5C4033] inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max"
              >
                <span className="font-semibold">
                  {showForm ? 'Close' : 'Contact me'}
                </span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>

         {/* Dropdown Form */} 
          <div 
          ref={contentRef} 
          style={{ 
            maxHeight: showForm 
              ? `${contentRef.current?.scrollHeight}px` 
              : '0px', 
            transition: 'max-height 0.7s ease', 
            overflow: 'hidden', 
          }} 
          > 
          <div className="grid gap-4 max-w-xl mx-auto mt-10 text-left">
            <a 
               href="https://mail.google.com/mail/?view=cm&fs=1&to=filip.g.hallgren@gmail.com&su=Hello&body=Hi%20Filip,"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FFD9A0] bg-[#5C4033] px-4 py-3 rounded-xl font-semibold text-center"
            >
              📧 Send me an email
            </a>
            <a 
              href="https://www.linkedin.com/in/filiphaellgren/" 
              target="_blank" 
              className="text-[#FFD9A0] bg-[#5C4033] px-4 py-3 rounded-xl font-semibold text-center"
            >
              💼 Connect on LinkedIn
            </a>
            <a 
              href="https://github.com/filipHaellgren" 
              target="_blank" 
              className="text-[#FFD9A0] bg-[#5C4033] px-4 py-3 rounded-xl font-semibold text-center"
            >
              💻 View my GitHub
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
