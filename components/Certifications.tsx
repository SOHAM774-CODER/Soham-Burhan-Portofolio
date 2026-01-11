
import React, { useState } from 'react';
import type { Certification } from '../types';
import { CERTIFICATIONS_DATA } from '../constants';

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
    <div className={`p-3 rounded-full mb-3 ${
        cert.category === 'Google Cloud' ? 'bg-calm-blue-100 text-calm-blue-600' :
        cert.category === 'Salesforce' ? 'bg-sky-100 text-sky-600' : 'bg-slate-100 text-slate-600'
      }`}>
      {/* Fix: Cast icon to React.ReactElement<any> to allow passing className prop, resolving overload error. */}
      {React.cloneElement(cert.icon as React.ReactElement<any>, { className: "h-8 w-8" })}
    </div>
    <h4 className="font-semibold text-slate-800 flex-grow">{cert.name}</h4>
    <p className="text-sm text-slate-500 mt-1">{cert.issuer}</p>
  </div>
);

const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Google Cloud' | 'Salesforce' | 'General'>('All');

  const filteredCerts = CERTIFICATIONS_DATA.filter(cert => 
    filter === 'All' || cert.category === filter
  );

  const getButtonClass = (category: typeof filter) => 
    `px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
      filter === category 
        ? 'bg-calm-blue-600 text-white shadow' 
        : 'bg-white text-slate-600 hover:bg-calm-blue-50'
    }`;

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Badges & Certifications</h2>
          <p className="mt-4 text-lg text-slate-600">My collection of professional certifications and skill badges.</p>
        </div>

        <div className="mt-10 flex justify-center space-x-2 sm:space-x-4">
          <button onClick={() => setFilter('All')} className={getButtonClass('All')}>All</button>
          <button onClick={() => setFilter('Google Cloud')} className={getButtonClass('Google Cloud')}>Google Cloud</button>
          <button onClick={() => setFilter('Salesforce')} className={getButtonClass('Salesforce')}>Salesforce</button>
          <button onClick={() => setFilter('General')} className={getButtonClass('General')}>General</button>
        </div>

        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredCerts.map((cert) => (
            <CertificationCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;