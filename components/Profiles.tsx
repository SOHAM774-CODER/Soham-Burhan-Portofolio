
import React from 'react';
import type { Profile } from '../types';
import { PROFILES_DATA } from '../constants';

const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => (
  <a href={profile.url} target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
    <div className="flex items-center space-x-4">
      <div className="text-calm-blue-600 group-hover:text-calm-blue-700">
        {profile.icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-slate-900">{profile.name}</h4>
        <p className="text-slate-600">{profile.description}</p>
      </div>
    </div>
  </a>
);

const Profiles: React.FC = () => {
  return (
    <section id="profiles" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Find Me Online</h2>
          <p className="mt-4 text-lg text-slate-600">Connect with me on various professional platforms.</p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROFILES_DATA.map((profile) => (
            <ProfileCard key={profile.name} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;