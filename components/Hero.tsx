
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-calm-blue-50 via-white to-calm-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
          Soham Burhan
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-600">
          Student | Cloud Enthusiast | Gen AI | Salesforce Champion
        </p>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-slate-700">
          Aspiring learner excited to learn Salesforce, contribute effective solutions, and grow in cloud technologies.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-calm-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-calm-blue-700 transition-transform transform hover:scale-105 duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;