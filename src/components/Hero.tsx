import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        'Software Developer',
        'Cyber Security Analyst',
        'Network Engineer',
        'Open Source Contributor'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"></div>
      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          {/* <span className="block mb-4">Hello, I'm Fackson</span> */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            <span ref={el}></span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Turning ideas into reality through code and innovation
        </p>
        <div className="flex gap-6 justify-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            Contact Me
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            View Work
          </button>
        </div>
      </div>
    </header>
  );
}