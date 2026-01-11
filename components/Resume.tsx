
import React from 'react';
import type { Skill } from '../types';
import { SKILLS_DATA } from '../constants';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex items-center space-x-3 bg-slate-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <span className="text-calm-blue-600">{skill.icon}</span>
    <span className="font-medium text-slate-700">{skill.name}</span>
  </div>
);

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 sm:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">My Resume</h2>
          <p className="mt-4 text-lg text-slate-600">A summary of my education, skills, and experience.</p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto space-y-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-calm-blue-200 pb-2">Education</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-slate-900">B.Tech in Computer Science and Design</h4>
                <p className="text-slate-600">Yeshwantrao Chavan College of Engineering (YCCE), Nagpur</p>
                <p className="text-sm text-slate-500">CGPA up to 7th Semester: 7.58</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-slate-900">12th CBSE Board</h4>
                <p className="text-slate-600">Saraswat Central Public School, Saoner</p>
                <p className="text-sm text-slate-500">Completed in 2022 with 76%</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-slate-900">10th CBSE Board</h4>
                <p className="text-slate-600">Arvind Indo Public School, Saoner</p>
                <p className="text-sm text-slate-500">Completed in 2020 with 83%</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-calm-blue-200 pb-2">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {SKILLS_DATA.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;