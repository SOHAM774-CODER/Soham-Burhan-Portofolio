
import React from 'react';
import { PROFILES_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg text-white">Soham Burhan</p>
            <p className="text-sm">Student | Gen AI | Cloud Enthusiast</p>
          </div>
          <div className="flex space-x-6">
            {PROFILES_DATA.map((profile) => (
              <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
                {/* Fix: Cast icon to React.ReactElement<any> to allow passing className prop, resolving overload error. */}
                {React.cloneElement(profile.icon as React.ReactElement<any>, { className: "h-6 w-6" })}
                <span className="sr-only">{profile.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-4 text-center text-sm text-slate-400">
          <p>&copy; Soham Burhan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;