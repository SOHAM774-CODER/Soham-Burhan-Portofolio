import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">About Me</h2>
          <p className="mt-4 text-lg text-slate-600">A little bit about my journey and aspirations.</p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto space-y-8">
          <div className="space-y-6 text-slate-700 text-lg">
            <h3 className="text-2xl font-semibold text-slate-800">Professional Objective</h3>
            <p>
              Seeking an entry-level technical role within a reputable organization where I can leverage my skills in cloud computing and software development to contribute to innovative and impactful projects.
            </p>
            <p>
              I have a deep passion for continuous learning and technology, with a strong focus on cloud platforms and collaborative development. I am eager to apply my knowledge and grow as a professional in a challenging environment.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="text-slate-600 space-y-2 text-center sm:flex sm:justify-between sm:space-y-0">
              <p><strong>Pronouns:</strong> He/Him</p>
              <p><strong>Location:</strong> Maharashtra, India</p>
              <p><strong>College:</strong> Yeshwantrao Chavan College of Engineering (YCCE)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;