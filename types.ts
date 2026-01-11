import type React from 'react';

export interface Skill {
  name: string;
  // Fix: Use React.ReactElement to avoid JSX namespace error in a .ts file.
  icon: React.ReactElement;
}

export interface Certification {
  name: string;
  issuer: string;
  // Fix: Use React.ReactElement to avoid JSX namespace error in a .ts file.
  icon: React.ReactElement;
  category: 'Google Cloud' | 'Salesforce' | 'General';
}

export interface Project {
  name: string;
  description: string;
}

export interface Profile {
  name: string;
  url: string;
  // Fix: Use React.ReactElement to avoid JSX namespace error in a .ts file.
  icon: React.ReactElement;
  description: string;
}